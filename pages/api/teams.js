import { GraphQLClient } from "graphql-request";

const org = process.env.GH_ORG;
const token = process.env.GH_TOKEN;
const url = "https://api.github.com/graphql";
const auth = Buffer.from(`gary-van-woerkens:${token}`).toString("base64");

export default async (req, res) => {
  const query = `
    query {
      organization(login: "${org}") {
        teams(first: 100, rootTeamsOnly:true) {
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

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  const data = await graphQLClient.request(query);
  res.json(data.organization.teams.edges);
};
