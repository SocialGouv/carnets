import { GraphQLClient } from "graphql-request";

const org = process.env.GH_ORG;
const user = process.env.GH_USER;
const token = process.env.GH_TOKEN;
const branch = process.env.GH_BRANCH;
const url = "https://api.github.com/graphql";
const auth = Buffer.from(`${user}:${token}`).toString("base64");

export default async (req, res) => {
  const query = `
    query {
      repository(owner: "${org}", name: "carnets") {
        files: object(expression: "${branch}:posts/latest/") {
          ... on Tree {
            entries {
              name
              content: object {
                ... on Blob {
                  text
                }
              }
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

  const files = data.repository.files
    ? data.repository.files.entries
        .filter(entry => entry.name.includes("json"))
        .map(file => {
          file.content = JSON.parse(file.content.text);
          return file;
        })
    : [];

  res.json(files);
};