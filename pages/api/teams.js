import { fetch } from "../../src/lib/github";

export default async (req, res) => {
  const org = process.env.GH_ORG;

  const query = `
    query {
      organization(login: "${org}") {
        teams(
          first:100,
          privacy: VISIBLE,
          rootTeamsOnly:true,
          orderBy: {field: NAME, direction: ASC}
        ) {
          totalCount
          edges {
            node {
              slug
              name
              avatarUrl
              description
            }
          }
        }
      }
    }
  `;

  const data = await fetch(query);

  res.json(data.organization.teams.edges);
};
