import fetch from "isomorphic-unfetch";

const user = process.env.GH_USER;
const token = process.env.GH_TOKEN;
const auth = Buffer.from(`${user}:${token}`).toString("base64");

const options = {
  headers: {
    Authorization: `Basic ${auth}`
  }
};

const fetchJson = url => fetch(url, options).then(r => r.json());

const fetchFile = async file => ({
  file,
  content: await fetchJson(file.download_url)
});

export default url =>
  fetch(url, options)
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
