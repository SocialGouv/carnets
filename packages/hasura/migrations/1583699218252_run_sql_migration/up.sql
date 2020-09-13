
CREATE VIEW teams_status AS
    SELECT
    team_slug,
    MAX(created_at) AS last_post,
    MAX((
        SELECT COUNT(*) FROM kpis WHERE post_id = posts.id
    )) AS kpis_count
    FROM posts
    GROUP BY team_slug
    ORDER BY team_slug;