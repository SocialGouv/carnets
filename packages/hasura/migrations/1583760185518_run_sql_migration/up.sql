
CREATE OR REPLACE VIEW "public"."teams_status" AS 
    SELECT DISTINCT p.team_slug,
    (
        SELECT MAX(created_at) FROM posts WHERE team_slug = p.team_slug
    ) AS last_post,
    (
        SELECT MAX(count) FROM (
            SELECT COUNT(*) AS count FROM kpis WHERE kpis.post_id = (
                SELECT id FROM posts WHERE team_slug = p.team_slug AND created_at = (
                    SELECT MAX(created_at) FROM posts WHERE team_slug = p.team_slug
                )
            )
        ) AS xxx
    ) AS kpis_count,
    (
        SELECT mood FROM posts WHERE team_slug = p.team_slug AND created_at = (
            SELECT MAX(created_at) FROM posts WHERE team_slug = p.team_slug
        )
    ) AS mood
    FROM posts AS p;