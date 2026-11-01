-- Email signups (newsletter list). Collect only; nothing sends from here.
CREATE TABLE IF NOT EXISTS signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,          -- lowercased, trimmed
  created_at TEXT NOT NULL,            -- UTC ISO, first signup
  last_seen_at TEXT NOT NULL,          -- UTC ISO, latest repeat submit
  name TEXT,                           -- optional, <=100 chars
  role TEXT,                           -- optional: Investor|Builder/developer|Issuer|Policy/legal|Just curious|Other
  source TEXT,                         -- page the form was on
  consent TEXT NOT NULL,               -- consent text version shown
  ip_hash TEXT,                        -- salted SHA-256 of IP, for rate limiting only
  user_agent TEXT,
  status TEXT NOT NULL DEFAULT 'subscribed'  -- 'subscribed' | 'removed'
);
CREATE INDEX IF NOT EXISTS idx_signups_ip_ts ON signups (ip_hash, last_seen_at);
-- Upgrade an existing v1 table instead:
-- ALTER TABLE signups ADD COLUMN name TEXT; ALTER TABLE signups ADD COLUMN role TEXT;
