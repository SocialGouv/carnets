import { fetch } from "../../../src/lib/hasura";

export default async (req, res) => {
  const id = req.query.id;

  const query = `
  {
    posts(where: {id: {_eq: "${id}"}}) {
      id
      mood
      needs
      priorities
      team_slug
      term
      author
      created_at
      kpis {
        id
        value
        name
      }
    }
  }
  `;

  console.log("FETCHASS");
  try {
    const data = await fetch(query);
    res.json(data.posts);
  } catch (error) {
    res.status(404).json([]);
  }
};