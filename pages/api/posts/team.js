import { fetch } from "../../../src/lib/hasura";

export default async (req, res) => {
  const query = `
    {
      posts(order_by: {created_at: desc}, where: {team_slug: {_eq: "${req.query.slug}"}}) {
        id
        mood
        term
        needs
        team_slug
        priorities
        created_at
        kpis {
          id
          value
          name
        }
      }
    }
  `;

  const data = await fetch(query);

  res.json(data.posts);
};
