SELECT email, name, role, created_at, source, status FROM signups WHERE status = 'subscribed' ORDER BY created_at;
