// Email signup: POST /v1/subscribe -> D1 `signups`. Collect only, sends nothing.
// Binding: SIGNUP_DB (falls back to ANNOTATE_DB on preview). No binding -> 404.
const CONSENT = "v1-2026-10-31";
const EMAIL_RE = /^[^\s@<>()",;:\\]{1,64}@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const MAX_PER_HOUR = 5;
const ROLES = ["Investor", "Builder/developer", "Issuer", "Policy/legal", "Just curious", "Other"];

async function sha256(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function reply(request, ok, message, status) {
  const wantsJson = (request.headers.get("Accept") || "").includes("application/json");
  if (wantsJson) return Response.json({ ok, message }, { status, headers: { "Cache-Control": "no-store" } });
  const to = new URL("/subscribe", request.url);
  to.searchParams.set("signup", ok ? "ok" : "error");
  return Response.redirect(to.toString(), 303);
}

export async function onRequestPost({ request, env }) {
  const db = env.SIGNUP_DB || env.ANNOTATE_DB;
  if (!db) return new Response("Not found", { status: 404 });
  let form;
  try { form = await request.formData(); } catch { return reply(request, false, "Bad request.", 400); }
  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if ((form.get("website") || "").toString().trim()) return reply(request, true, "Thanks, you're on the list.", 200);
  const email = (form.get("email") || "").toString().trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) return reply(request, false, "That email doesn't look right.", 400);
  const name = (form.get("name") || "").toString().replace(/[\u0000-\u001f\u007f<>]/g, "").trim();
  if (name.length > 100) return reply(request, false, "Name is too long (100 characters max).", 400);
  const role = (form.get("role") || "").toString().trim();
  if (role && !ROLES.includes(role)) return reply(request, false, "Pick a role from the list, or leave it blank.", 400);
  let source = (form.get("source") || "").toString().slice(0, 200);
  if (!source.startsWith("/")) source = "/";
  const now = new Date().toISOString();
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const ipHash = ip ? await sha256((env.SIGNUP_SALT || "edstsr") + ip) : null;
  const ua = (request.headers.get("User-Agent") || "").slice(0, 200);
  try {
    if (ipHash) {
      const since = new Date(Date.now() - 3600e3).toISOString();
      const r = await db.prepare("SELECT COUNT(*) AS n FROM signups WHERE ip_hash = ? AND last_seen_at > ?").bind(ipHash, since).first();
      if (r && r.n >= MAX_PER_HOUR) return reply(request, false, "Too many signups from here. Try again later.", 429);
    }
    // Dedupe on email: repeat submits only bump last_seen_at (and re-subscribe if removed).
    await db.prepare(
      `INSERT INTO signups (email, name, role, created_at, last_seen_at, source, consent, ip_hash, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(email) DO UPDATE SET last_seen_at = excluded.last_seen_at,
         name = COALESCE(NULLIF(excluded.name, ''), name), role = COALESCE(NULLIF(excluded.role, ''), role), status = 'subscribed'`
    ).bind(email, name || null, role || null, now, now, source, CONSENT, ipHash, ua).run();
  } catch (e) {
    return reply(request, false, "Something went wrong. Try again later.", 500);
  }
  return reply(request, true, "Thanks, you're on the list.", 200);
}

export function onRequest() {
  return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
}
