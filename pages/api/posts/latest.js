import { fetch } from "../../../src/lib/github";

const toto = process.env.GH_ORG;

console.log("ENV ORG", toto);

export default async (req, res) => {
  const org = process.env.GH_ORG;
  const branch = process.env.GH_BRANCH;

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

  const data = await fetch(query);

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
