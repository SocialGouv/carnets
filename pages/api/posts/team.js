// import fetch from "isomorphic-unfetch";
//
// const token = process.env.GH_TOKEN;
// const org = process.env.GH_ORG;
// const repo = process.env.GH_REPO;
// const ref = process.env.GH_BRANCH;
// const path = process.env.GH_PATH;
//
// const fetchJson = url => fetch(url).then(r => r.json());
//
// const fetchFile = async file => ({
//   file,
//   content: await fetchJson(file.download_url)
// });
//
// const fetchAllFiles = team =>
//   fetch(
//     `https://${token}@api.github.com/repos/${org}/${repo}/contents/${path}/${team}?ref=${ref}`
//   )
//     .then(r => r.json())
//     .then(
//       json =>
//         json.filter &&
//         Promise.all(
//           json
//             .filter(f => f.type === "file" && f.path.match(/\.json$/))
//             .map(fetchFile)
//         )
//     );
//
// // API route
// export default (req, res) => {
//   return fetchAllFiles(req.query.team)
//     .then(r => res.json(r || []))
//     .catch(e => res.json({ success: false, error: e.message, toto: 43 }));
// };

import { GraphQLClient } from "graphql-request";

const org = process.env.GH_ORG;
const user = process.env.GH_USER;
const token = process.env.GH_TOKEN;
const url = "https://api.github.com/graphql";
const auth = Buffer.from(`${user}:${token}`).toString("base64");

export default async (req, res) => {
  const query = `
    query {
      repository(owner: "${org}", name: "carnets") {
        files: object(expression: "master:posts/${req.query.slug}/") {
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
        .sort(
          (a, b) =>
            new Date(b.content.date).getTime() -
            new Date(a.content.date).getTime()
        )
    : [];

  res.json(files);
};
