SELECT email, COUNT(*) AS views, COUNT(DISTINCT path) AS pages, MIN(ts) AS first_view, MAX(ts) AS last_view
FROM page_views
WHERE ts >= strftime('%Y-%m-%dT%H:%M:%fZ', 'now', '-1 day')
GROUP BY email ORDER BY views DESC;
