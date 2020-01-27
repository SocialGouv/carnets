import fetchPosts from "../../src/lib/fetchPosts";

const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const ref = process.env.GH_BRANCH;
const path = process.env.GH_PATH;

// API route
export default async (req, res) => {
  const url = `https://api.github.com/repos/${org}/${repo}/contents/${path}/latest?ref=${ref}`;
  const data = await fetchPosts(url);
  res.json(data);
};
