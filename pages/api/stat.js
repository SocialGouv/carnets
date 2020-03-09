import { fetch } from "../../src/lib/hasura";

const getPostsStat = async () => {
  const query = `
    query {
      posts_stat(order_by: {week: asc}) {
        count
        week
        year
      }
    }
  `;

  const data = await fetch(query);
  return data.posts_stat;
};

const getTeamsStatus = async () => {
  const query = `
    query {
      teams_status {
        kpis_count
        last_post
        team_slug
      }
    }
  `;

  const data = await fetch(query);
  return data.teams_status;
};

export default async (req, res) => {
  try {
    const postsStat = await getPostsStat();
    const teamsStatus = await getTeamsStatus();
    res.json({ postsStat, teamsStatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};
