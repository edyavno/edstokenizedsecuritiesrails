CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,
  email TEXT,
  path TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT
);
CREATE INDEX IF NOT EXISTS idx_page_views_email_ts ON page_views (email, ts);
