CREATE TABLE IF NOT EXISTS comments (
  review TEXT NOT NULL, id TEXT NOT NULL, page TEXT NOT NULL,
  author_email TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
  deleted_at TEXT, data TEXT NOT NULL, PRIMARY KEY (review, id));
CREATE INDEX IF NOT EXISTS comments_page ON comments(review, page);
CREATE TABLE IF NOT EXISTS activity (review TEXT, id TEXT, at TEXT, event TEXT);
CREATE INDEX IF NOT EXISTS activity_id ON activity(review, id);
CREATE TABLE IF NOT EXISTS writes (email TEXT, at INTEGER);
CREATE INDEX IF NOT EXISTS writes_email ON writes(email, at);
