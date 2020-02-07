import { fetch } from "../../../src/lib/github";

export default async (req, res) => {
  const org = process.env.GH_ORG;
  const branch = process.env.GH_BRANCH;

  const query = `
    query {
      repository(owner: "${org}", name: "carnets") {
        files: object(expression: "${branch}:posts/${req.query.slug}/") {
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
        .sort(
          (a, b) =>
            new Date(b.content.date).getTime() -
            new Date(a.content.date).getTime()
        )
    : [];

  res.json(files);
};
