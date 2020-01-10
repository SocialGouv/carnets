import fetch from "isomorphic-unfetch";

const token = process.env.GH_TOKEN;
const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const ref = process.env.GH_BRANCH;
const path = process.env.GH_PATH;

const fetchJson = url => fetch(url).then(r => r.json());

const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

const isNum = num => num && ("" + num).match(/^\d+$/);

const fetchFile = async file => ({
  file,
  content: await fetchJson(file.download_url)
});

const fetchAllFiles = filesPath =>
  //console.log("fetchAllFiles", filesPath);

  fetch(
    `https://${token}@api.github.com/repos/${org}/${repo}/contents/${path}${filesPath ||
      ""}?ref=${ref}`
  )
    .then(r => r.json())
    .then(
      json =>
        //console.log(json) ||
        json.filter &&
        Promise.all(
          json
            .filter(f => f.type === "file" && f.path.match(/\.json$/))
            .map(fetchFile)
        )
    );

const fetchPosts = (year, month) => {
  if (isNum(year) && isNum(month)) {
    return fetchAllFiles(`/${pad(year)}/${pad(month)}`);
  }
};

// API route
export default (req, res) => {
  const { year, month } = req.query;
  return fetchPosts(year, month)
    .then(r => res.json(r || { success: false }))
    .catch(e => res.json({ success: false, error: e.message }));
};
