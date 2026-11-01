-- Production page views (public site). No email; IP + Cloudflare geo (Edward 2026-11-01, no privacy note).
CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,          -- UTC ISO
  path TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  ip TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  asn INTEGER,
  as_org TEXT,
  is_bot INTEGER NOT NULL DEFAULT 0  -- UA heuristic (bot/crawler/spider/GPT/Claude/etc.)
);
CREATE INDEX IF NOT EXISTS idx_pv_ts ON page_views (ts);
CREATE INDEX IF NOT EXISTS idx_pv_path ON page_views (path, ts);
