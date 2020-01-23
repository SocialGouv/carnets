import fetch from "isomorphic-unfetch";

const fetchJson = url => fetch(url).then(r => r.json());

const fetchFile = async file => ({
  file,
  content: await fetchJson(file.download_url)
});

export default url =>
  fetch(url)
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
