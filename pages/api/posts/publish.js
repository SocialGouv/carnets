import auth0 from "../../../src/lib/auth0";
import GitHubPublisher from "github-publish";
import { isAllowedToPost } from "../../../src/isAllowedToPost";

const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const token = process.env.GH_TOKEN;
const branch = process.env.GH_BRANCH;
const path = process.env.GH_PATH || "content";

const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

const sanitize = name =>
  name
    .replace(/[éè]/g, "e")
    .replace(/[\s/;:,!?#]/g, "-")
    .toLowerCase();

const getNormalizedDate = () => {
  const dte = new Date();

  return `${dte.getFullYear()}${pad(dte.getMonth() + 1)}${pad(
    dte.getDate()
  )}_${pad(dte.getHours())}${pad(dte.getMinutes())}${pad(dte.getSeconds())}`;
};

const publishTeam = params => {
  const { data, author } = params;
  const fileName = `${sanitize(author.name)}-${getNormalizedDate()}.json`;
  const filePath = `${path}/${data.team.slug}/${fileName}`;

  return publishData({ ...params, filePath });
};

const publishLatest = params => {
  const { data } = params;
  const filePath = `${path}/latest/${data.team.slug}.json`;

  return publishData({ ...params, filePath });
};

const publishData = async ({ author, message, data, filePath }) => {
  const publisher = new GitHubPublisher(token, org, repo, branch);

  const options = {
    message,
    author, // https://github.com/voxpelli/node-github-publish/pull/53,
    force: true
  };

  const result = await publisher.publish(
    filePath,
    JSON.stringify(data, null, 2),
    options
  );

  if (result) {
    return result;
  } else {
    throw new Error("Cannot push to GitHub 😭");
  }
};

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405);
      throw new Error("Wrong method");
    }

    const { user } = (await auth0.getSession(req)) || {};

    if (!user) {
      res.status(401);
      throw new Error("Unknown user");
    }

    const granted = await isAllowedToPost(user.nickname);

    if (!granted) {
      res.status(401);
      throw new Error(`User ${user.name} not granted to ${org}`);
    }

    const message = "[skip ci] News publish";

    const author = {
      name: user.name,
      email: user.email
    };

    const params = { author, message, data: req.body };
    await publishTeam(params);
    await publishLatest(params);
  } catch (e) {
    console.error(e);
    if (res.statusCode < 400) {
      res.status(500);
    }
  }

  res.send(null);
};
