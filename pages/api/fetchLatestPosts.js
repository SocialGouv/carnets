import fetch from "isomorphic-unfetch";

const token = process.env.GH_TOKEN;
const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const ref = process.env.GH_BRANCH;
const path = process.env.GH_PATH;

const fetchJson = url => fetch(url).then(r => r.json());

const fetchFile = async file => ({
  file,
  content: await fetchJson(file.download_url)
});

const fetchAllFiles = () =>
  fetch(
    `https://${token}@api.github.com/repos/${org}/${repo}/contents/${path}/latest?ref=${ref}`
  )
    .then(r => r.json())
    .then(
      json =>
        json.filter &&
        Promise.all(
          json
            .filter(f => f.type === "file" && f.path.match(/\.json$/))
            .map(fetchFile)
        )
    );

const fetchPosts = () => {
  return fetchAllFiles();
};

// API route
export default (req, res) => {
  return fetchPosts()
    .then(r => res.json(r || { success: false }))
    .catch(e => res.json({ success: false, error: e.message }));
};
