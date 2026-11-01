// Page-view logger. Never blocks or breaks page loads: logging runs in waitUntil, errors are swallowed, always returns next().
// Preview (ANNOTATE_DB bound): logs the Access email into edstsr-annotate-preview.page_views (unchanged).
// Production (PAGEVIEW_DB bound, no ANNOTATE_DB): logs IP + Cloudflare geo/ASN into edstsr-signups.page_views (no email).
const SKIP_EXT = /\.(js|mjs|css|map|json|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf|eot|xml|txt|pdf|zip|csv|webmanifest|mp4|webm|vtt)$/i;
const BOT_RE = /bot|crawl|spider|slurp|fetch|preview|gpt|claude|anthropic|perplexity|bytespider|ccbot|facebookexternalhit|curl|wget|python|headless|httpclient|axios|node-fetch/i;

export async function onRequest(context) {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const p = url.pathname;
    const accept = request.headers.get("Accept") || "";
    const isPage =
      request.method === "GET" &&
      !p.startsWith("/v1/") &&
      !p.startsWith("/static/") &&
      !p.startsWith("/cdn-cgi/") &&
      !SKIP_EXT.test(p) &&
      (accept === "" || accept.includes("text/html") || accept.includes("*/*"));
    if (isPage && (env.ANNOTATE_DB || env.PAGEVIEW_DB)) {
      const ua = (request.headers.get("User-Agent") || "").slice(0, 200);
      const ref = (request.headers.get("Referer") || "").slice(0, 300);
      const ts = new Date().toISOString();
      const path = p.slice(0, 500);
      let stmt;
      if (env.ANNOTATE_DB) {
        const email = (request.headers.get("Cf-Access-Authenticated-User-Email") || "").toLowerCase() || null;
        stmt = env.ANNOTATE_DB.prepare(
          "INSERT INTO page_views (ts, email, path, user_agent, referrer) VALUES (?, ?, ?, ?, ?)"
        ).bind(ts, email, path, ua, ref);
      } else {
        const cf = request.cf || {};
        const ip = (request.headers.get("CF-Connecting-IP") || "").slice(0, 64) || null;
        stmt = env.PAGEVIEW_DB.prepare(
          "INSERT INTO page_views (ts, path, user_agent, referrer, ip, country, region, city, asn, as_org, is_bot) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        ).bind(ts, path, ua, ref, ip, cf.country || null, cf.region || null, cf.city || null,
               Number.isFinite(cf.asn) ? cf.asn : null, (cf.asOrganization || "").slice(0, 100) || null,
               (!ua || BOT_RE.test(ua)) ? 1 : 0);
      }
      context.waitUntil(stmt.run().catch(() => {}));
    }
  } catch (_) {}
  return context.next();
}
