
CREATE VIEW posts_stat AS
    SELECT year, week, COUNT(*) AS count FROM (
        SELECT DISTINCT
        date_part('year', created_at::date) AS year,
        date_part('week', created_at::date) AS week,
        team_slug AS team
        FROM posts
    ) AS sub
    GROUP BY year, week;