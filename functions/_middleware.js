// Page-view logger (preview only). Records who opened which HTML page into D1 `page_views`.
// Never blocks or breaks page loads: logging runs in waitUntil, errors are swallowed, always returns next().
const SKIP_EXT = /\.(js|mjs|css|map|json|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf|eot|xml|txt|pdf|zip|csv|webmanifest|mp4|webm)$/i;

export async function onRequest(context) {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const p = url.pathname;
    const accept = request.headers.get("Accept") || "";
    const isPage =
      request.method === "GET" &&
      env.ANNOTATE_DB &&
      !p.startsWith("/v1/") &&
      !p.startsWith("/static/") &&
      !p.startsWith("/cdn-cgi/") &&
      !SKIP_EXT.test(p) &&
      (accept === "" || accept.includes("text/html") || accept.includes("*/*"));
    if (isPage) {
      const email = (request.headers.get("Cf-Access-Authenticated-User-Email") || "").toLowerCase() || null;
      const ua = (request.headers.get("User-Agent") || "").slice(0, 200);
      const ref = (request.headers.get("Referer") || "").slice(0, 300);
      const ts = new Date().toISOString();
      context.waitUntil(
        env.ANNOTATE_DB.prepare(
          "INSERT INTO page_views (ts, email, path, user_agent, referrer) VALUES (?, ?, ?, ?, ?)"
        ).bind(ts, email, p.slice(0, 500), ua, ref).run().catch(() => {})
      );
    }
  } catch (_) {}
  return context.next();
}
