// annotate.js wire protocol v1 on Cloudflare Pages Functions + D1.
// PREVIEW ONLY: returns 404 unless ANNOTATE_ENABLED=1 and the D1 binding exist
// (set only under [env.preview] in wrangler.toml) and the host is not production.
// Identity comes from Cloudflare Access (Cf-Access-Authenticated-User-Email);
// requests without it are rejected. Everyone signed in sees all comments;
// only a comment's author (or a review author) can edit or delete it.
const MAX_BODY = 64 * 1024, MAX_TEXT = 5000, MAX_REPLIES = 200, MAX_COMMENTS = 2000;
const WRITES_PER_MIN = 30, SESSION_MS = 24 * 3600 * 1000;
const ID_RE = /^[A-Za-z0-9_-]{1,128}$/, COLOR_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const TYPES = new Set(["highlight", "shape", "pin", "pen", "block", "note"]);
const STATUSES = new Set(["open", "in_progress", "resolved", "wont_fix"]);
const CLOSED = new Set(["resolved", "wont_fix"]);
const GEOM = { shape: ["rect", "circle"], pin: ["pin"], pen: ["pen"], block: ["block"] };
const PROD_HOSTS = new Set(["edstsr.pages.dev", "edstokenizedsecuritiesrails.com", "www.edstokenizedsecuritiesrails.com"]);

class E extends Error { constructor(s, c, m, x) { super(c); this.s = s; this.c = c; this.m = m; this.x = x; } }
const bad = f => new E(422, "invalid_comment", f);
const json = (s, b, h = {}) => new Response(b === undefined ? null : JSON.stringify(b),
  { status: s, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...h } });
const fin = v => typeof v === "number" && Number.isFinite(v);
const iso = v => typeof v === "string" && v.length <= 40 && !isNaN(Date.parse(v));
let last = 0;
const stamp = () => { let t = Date.now(); if (t <= last) t = last + 1; last = t; return new Date(t).toISOString(); };
const b64 = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64 = s => decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
async function rid(email) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(email.toLowerCase()));
  return "rvr_" + [...new Uint8Array(d)].slice(0, 9).map(b => b.toString(16).padStart(2, "0")).join("");
}

function cleanGeom(type, g) {
  if (type === "highlight" || type === "note") { if (g != null) throw bad("geom"); return null; }
  if (!g || typeof g !== "object" || !(GEOM[type] || []).includes(g.kind)) throw bad("geom");
  const o = { kind: g.kind };
  if (g.selector !== undefined) { if (typeof g.selector !== "string" || g.selector.length >= 4096) throw bad("geom.selector"); o.selector = g.selector; }
  if (g.kind === "block" && !(o.selector && o.selector.trim())) throw bad("geom.selector");
  const nums = g.kind === "pin" ? ["x", "y"] : (g.kind === "rect" || g.kind === "circle") ? ["x", "y", "w", "h"] : [];
  for (const k of nums) { if (!fin(g[k])) throw bad("geom." + k); o[k] = g[k]; }
  if (g.kind === "pen") {
    if (!Array.isArray(g.points) || g.points.length < 2 || g.points.length > 3000 ||
      !g.points.every(p => Array.isArray(p) && p.length === 2 && fin(p[0]) && fin(p[1]))) throw bad("geom.points");
    o.points = g.points.map(p => [p[0], p[1]]);
  }
  if (g.kind !== "block") for (const k of ["vw", "vh"]) if (g[k] !== undefined) { if (!fin(g[k])) throw bad("geom." + k); o[k] = g[k]; }
  return o;
}
function cleanAnchor(type, a) {
  if (a == null) { if (type === "highlight") throw bad("anchor"); return null; }
  if (typeof a !== "object" || typeof a.exact !== "string" || !a.exact.trim() || a.exact.length > 10000 ||
    typeof a.prefix !== "string" || typeof a.suffix !== "string" || a.prefix.length > 2000 || a.suffix.length > 2000) throw bad("anchor");
  return { exact: a.exact, prefix: a.prefix, suffix: a.suffix };
}
function cleanAssignee(v) {
  if (v == null) return null;
  if (typeof v !== "object" || typeof v.name !== "string" || !v.name.trim() || v.name.length > 80 ||
    !(v.id == null || (typeof v.id === "string" && ID_RE.test(v.id)))) throw bad("assignee");
  return { id: v.id || null, name: v.name.trim() };
}
function cleanIncoming(b, id) {
  if (!b || typeof b !== "object" || Array.isArray(b)) throw bad("body");
  if (b.id !== undefined && b.id !== id) throw bad("id");
  if (b.visibility !== undefined && b.visibility !== "shared") throw bad("visibility");
  if (!TYPES.has(b.type)) throw bad("type");
  if (typeof b.page !== "string" || !b.page || b.page.length > 2048) throw bad("page");
  if (b.url !== undefined && (typeof b.url !== "string" || b.url.length > 4096)) throw bad("url");
  if (typeof b.text !== "string" || b.text.length > MAX_TEXT) throw bad("text");
  if (typeof b.color !== "string" || !COLOR_RE.test(b.color)) throw bad("color");
  if (b.status !== undefined && !STATUSES.has(b.status)) throw bad("status");
  if (b.resolved !== undefined && typeof b.resolved !== "boolean") throw bad("resolved");
  if (b.createdAt !== undefined && !iso(b.createdAt)) throw bad("createdAt");
  if (b.updatedAt !== undefined && !iso(b.updatedAt)) throw bad("updatedAt");
  return { page: b.page, url: typeof b.url === "string" ? b.url : "", type: b.type, text: b.text, color: b.color,
    anchor: cleanAnchor(b.type, b.anchor), geom: cleanGeom(b.type, b.geom), status: b.status, resolved: b.resolved,
    assignee: b.assignee === undefined ? undefined : cleanAssignee(b.assignee), createdAt: b.createdAt, base: b.updatedAt };
}
async function readJson(req) {
  if (!/^application\/json/i.test(req.headers.get("content-type") || "")) throw new E(415, "unsupported_media_type");
  const len = Number(req.headers.get("content-length") || 0);
  if (len > MAX_BODY) throw new E(413, "too_large");
  const t = await req.text();
  if (t.length > MAX_BODY) throw new E(413, "too_large");
  try { return JSON.parse(t); } catch { throw new E(400, "invalid_json"); }
}
const pub = (row) => { const c = JSON.parse(row.data); return c; };

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  if (env.ANNOTATE_ENABLED !== "1" || !env.ANNOTATE_DB || PROD_HOSTS.has(url.hostname)) return new Response("Not found", { status: 404 });
  try { return await route(request, env, url); }
  catch (e) {
    if (e instanceof E) {
      const b = { error: e.c }; if (e.m && e.m !== e.c) b.message = e.m; if (e.x && e.x.comment) b.comment = e.x.comment;
      return json(e.s, b, e.x && e.x.retryAfter ? { "Retry-After": String(e.x.retryAfter) } : {});
    }
    console.error("annotate error", e); return json(500, { error: "internal" });
  }
}

async function route(req, env, url) {
  const db = env.ANNOTATE_DB, reviewId = env.ANNOTATE_REVIEW_ID || "edstsr-preview";
  const parts = url.pathname.split("/").filter(Boolean).map(decodeURIComponent).slice(3); // after v1/annotate/reviews
  if (parts[0] !== reviewId) throw new E(404, "review_not_found");
  // Same-origin only: browsers send Origin on non-GET; reject any foreign Origin.
  const origin = req.headers.get("origin");
  if (origin && origin !== url.origin) throw new E(403, "origin_not_allowed");
  if (req.method === "OPTIONS") throw new E(403, "origin_not_allowed");
  const email = (req.headers.get("cf-access-authenticated-user-email") || "").trim().toLowerCase();
  if (!email || email.length > 254 || !email.includes("@")) throw new E(403, "invite_invalid", "Sign in through Cloudflare Access to comment.");
  const authors = (env.ANNOTATE_AUTHORS || "").toLowerCase().split(",").map(s => s.trim()).filter(Boolean);
  const isAuthor = authors.includes(email);
  const id0 = await rid(email);
  const rest = parts.slice(1), m = req.method;

  if (rest.length === 1 && rest[0] === "session") {
    if (m !== "POST") throw new E(405, "method_not_allowed");
    const body = await readJson(req);
    let name = body && typeof body.name === "string" ? body.name.trim().slice(0, 80) : "";
    if (!name) name = email.split("@")[0];
    const exp = Date.now() + SESSION_MS;
    const token = "s." + b64(JSON.stringify({ e: email, n: name, x: exp }));
    return json(200, { token, expiresAt: new Date(exp).toISOString(),
      reviewer: { id: id0, name, role: isAuthor ? "author" : "reviewer", email },
      review: { id: reviewId, name: "Ed's Tokenized Securities Rails (preview)", note: "", pages: [] } });
  }
  // edstsr: read-only per-page counts so the site can point to comments on other pages.
  if (rest.length === 1 && rest[0] === "summary") {
    if (m !== "GET") throw new E(405, "method_not_allowed");
    const r = (await db.prepare("SELECT page, COUNT(*) n, MAX(updated_at) u FROM comments WHERE review=? AND deleted_at IS NULL GROUP BY page ORDER BY page").bind(reviewId).all()).results;
    return json(200, { pages: r.map(x => ({ page: x.page, count: x.n, updatedAt: x.u })) }, { "Cache-Control": "no-store" });
  }
  if (rest[0] !== "comments") throw new E(404, "not_found");
  // Bearer token must belong to the same Access-authenticated email.
  const mt = /^Bearer\s+s\.(\S+)$/i.exec(req.headers.get("authorization") || "");
  let sess; try { sess = mt && JSON.parse(unb64(mt[1])); } catch { sess = null; }
  if (!sess || sess.e !== email) throw new E(401, "unauthorized");
  if (!(sess.x > Date.now())) throw new E(401, "session_expired");
  const me = { id: id0, name: String(sess.n || email.split("@")[0]).slice(0, 80), email };

  if (rest.length === 1) {
    if (m !== "GET") throw new E(405, "method_not_allowed");
    const page = url.searchParams.get("page");
    const q = page === null
      ? db.prepare("SELECT data FROM comments WHERE review=? AND deleted_at IS NULL ORDER BY created_at, id").bind(reviewId)
      : db.prepare("SELECT data FROM comments WHERE review=? AND page=? AND deleted_at IS NULL ORDER BY created_at, id").bind(reviewId, page);
    const comments = (await q.all()).results.map(pub);
    const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify(comments)));
    const etag = '"' + b64(String.fromCharCode(...new Uint8Array(h))).slice(0, 27) + '"';
    const inm = (req.headers.get("if-none-match") || "").split(",").map(s => s.trim().replace(/^W\//, ""));
    if (inm.includes(etag)) return new Response(null, { status: 304, headers: { ETag: etag } });
    return json(200, { comments }, { ETag: etag });
  }
  const id = rest[1];
  if (!ID_RE.test(id)) throw new E(404, "comment_not_found");
  const get = async () => { const r = await db.prepare("SELECT * FROM comments WHERE review=? AND id=?").bind(reviewId, id).first(); return r; };
  const log = (at, ev) => db.prepare("INSERT INTO activity VALUES (?,?,?,?)").bind(reviewId, id, at, JSON.stringify({ at, by: { id: me.id, name: me.name, email }, ...ev }));
  if (rest.length === 3 && rest[2] === "activity" && m === "GET") {
    if (!(await get())) throw new E(404, "comment_not_found");
    const ev = (await db.prepare("SELECT event FROM activity WHERE review=? AND id=? ORDER BY at").bind(reviewId, id).all()).results.map(r => JSON.parse(r.event));
    return json(200, { events: ev });
  }
  if (!["PUT", "POST", "DELETE"].includes(m)) throw new E(405, "method_not_allowed");

  // Rate limit: WRITES_PER_MIN per signed-in email.
  const now = Date.now();
  const cnt = await db.prepare("SELECT COUNT(*) n, MIN(at) a FROM writes WHERE email=? AND at>?").bind(email, now - 60000).first();
  if (cnt.n >= WRITES_PER_MIN) throw new E(429, "rate_limited", undefined, { retryAfter: Math.max(1, Math.ceil((cnt.a + 60000 - now) / 1000)) });
  await db.batch([db.prepare("INSERT INTO writes VALUES (?,?)").bind(email, now), db.prepare("DELETE FROM writes WHERE at<?").bind(now - 120000)]);

  const row = await get();
  const stored = row && pub(row);
  const mine = c => c.authorId === me.id || isAuthor;
  const save = (c, at) => db.prepare("INSERT INTO comments (review,id,page,author_email,created_at,updated_at,deleted_at,data) VALUES (?,?,?,?,?,?,NULL,?) ON CONFLICT(review,id) DO UPDATE SET page=excluded.page, updated_at=excluded.updated_at, data=excluded.data")
    .bind(reviewId, id, c.page, row ? row.author_email : email, c.createdAt, at, JSON.stringify(c));

  if (rest.length === 2 && m === "PUT") {
    const inc = cleanIncoming(await readJson(req), id);
    if (row && row.deleted_at) throw new E(410, "deleted");
    const at = stamp(), by = { id: me.id, name: me.name };
    const st = inc.status || (inc.resolved === undefined ? (stored ? stored.status : "open")
      : inc.resolved ? (stored && CLOSED.has(stored.status) ? stored.status : "resolved") : "open");
    if (!stored) {
      const n = await db.prepare("SELECT COUNT(*) n FROM comments WHERE review=? AND deleted_at IS NULL").bind(reviewId).first();
      if (n.n >= MAX_COMMENTS) throw new E(422, "too_many_comments");
      const c = { schema: 2, id, page: inc.page, url: inc.url, type: inc.type, author: me.name, authorId: me.id, authorEmail: email,
        text: inc.text, color: inc.color, anchor: inc.anchor, geom: inc.geom, visibility: "shared", status: st, resolved: CLOSED.has(st),
        resolvedBy: CLOSED.has(st) ? me.id : null, resolvedAt: CLOSED.has(st) ? at : null,
        assignee: isAuthor && inc.assignee || null, assignedAt: isAuthor && inc.assignee ? at : null,
        replies: [], createdAt: inc.createdAt || at, updatedAt: at, editedAt: null };
      await db.batch([save(c, at), log(at, { kind: "created" })]);
      return json(201, { comment: c });
    }
    if (!mine(stored)) throw new E(403, "not_owner");
    if (inc.base && Date.parse(stored.updatedAt) > Date.parse(inc.base)) throw new E(409, "stale", undefined, { comment: stored });
    if (stored.type !== inc.type) throw bad("type");
    const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const changed = ["text", "color", "anchor", "geom"].filter(k => !same(stored[k], inc[k]));
    if (inc.assignee !== undefined && !same(inc.assignee, stored.assignee || null) && !isAuthor) throw new E(403, "not_author");
    const next = { ...stored }, evs = [];
    for (const k of changed) next[k] = inc[k];
    if (changed.includes("text")) next.editedAt = at;
    if (changed.length) evs.push({ kind: "edited", fields: changed });
    if (st !== stored.status) { next.status = st; next.resolved = CLOSED.has(st); next.resolvedBy = next.resolved ? me.id : null; next.resolvedAt = next.resolved ? at : null; evs.push({ kind: "status", from: stored.status, to: st }); }
    if (inc.assignee !== undefined && !same(inc.assignee, stored.assignee || null)) { next.assignee = inc.assignee; next.assignedAt = inc.assignee ? at : null; evs.push({ kind: "assigned", to: inc.assignee }); }
    if (!evs.length) return json(200, { comment: stored });
    next.updatedAt = at;
    await db.batch([save(next, at), ...evs.map(e => log(at, e))]);
    return json(200, { comment: next });
  }
  if (rest.length === 2 && m === "DELETE") {
    if (!stored || row.deleted_at) return new Response(null, { status: 204 });
    if (!mine(stored)) throw new E(403, "not_owner");
    const at = stamp();
    await db.batch([db.prepare("UPDATE comments SET deleted_at=?, updated_at=? WHERE review=? AND id=?").bind(at, at, reviewId, id), log(at, { kind: "deleted" })]);
    return new Response(null, { status: 204 });
  }
  if (rest.length === 3 && rest[2] === "replies" && m === "POST") {
    const b = await readJson(req);
    if (!b || typeof b !== "object" || typeof b.id !== "string" || !ID_RE.test(b.id)) throw bad("reply.id");
    if (typeof b.text !== "string" || !b.text.trim() || b.text.length > MAX_TEXT) throw bad("reply.text");
    if (!stored) throw new E(404, "comment_not_found");
    if (row.deleted_at) throw new E(410, "deleted");
    if (stored.replies.some(r => r.id === b.id)) return json(200, { comment: stored });
    if (stored.replies.length >= MAX_REPLIES) throw new E(422, "too_many_replies");
    const at = stamp();
    const next = { ...stored, replies: stored.replies.concat({ id: b.id, author: me.name, authorId: me.id, authorEmail: email, text: b.text, createdAt: at, editedAt: null }), updatedAt: at };
    await db.batch([save(next, at), log(at, { kind: "replied", replyId: b.id })]);
    return json(201, { comment: next });
  }
  if (rest.length === 4 && rest[2] === "replies" && m === "DELETE") {
    const r = stored && !row.deleted_at && stored.replies.find(x => x.id === rest[3]);
    if (!r) return new Response(null, { status: 204 });
    if (r.authorId !== me.id && !isAuthor) throw new E(403, "not_owner");
    const at = stamp();
    const next = { ...stored, replies: stored.replies.filter(x => x.id !== rest[3]), updatedAt: at };
    await db.batch([save(next, at), log(at, { kind: "reply_deleted", replyId: rest[3] })]);
    return new Response(null, { status: 204 });
  }
  throw new E(404, "not_found");
}
