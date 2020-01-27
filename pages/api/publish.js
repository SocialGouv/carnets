import auth0 from "../../src/lib/auth0";
import GitHubPublisher from "github-publish";
import { sanitize } from "../../src/lib/teams";
import { isAllowedToPost } from "../../src/isAllowedToPost";

const token = process.env.GH_TOKEN;
const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const branch = process.env.GH_BRANCH;
const path = process.env.GH_PATH || "content";

const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

const getNormalizedDate = () => {
  const dte = new Date();

  return `${dte.getFullYear()}${pad(dte.getMonth() + 1)}${pad(
    dte.getDate()
  )}_${pad(dte.getHours())}${pad(dte.getMinutes())}${pad(dte.getSeconds())}`;
};

const publishTeam = async (...args) => {
  const fileName = `${sanitize(
    args[0].author.name
  )}-${getNormalizedDate()}.json`;

  args[0].filePath = `${path}/${args[0].data.team}/${fileName}`;

  return await publishData(...args);
};

const publishLatest = async (...args) => {
  args[0].filePath = `${path}/latest/${args[0].data.team}.json`;

  return await publishData(...args);
};

const publishData = ({ author, message, data, filePath }) => {
  const publisher = new GitHubPublisher(token, org, repo, branch);

  return (
    publisher
      // warn: for updating a file, we'd need origin file SHA
      .publish(filePath, JSON.stringify(data, null, 2), {
        message,
        author, // https://github.com/voxpelli/node-github-publish/pull/53,
        force: true
      })
      .then(function(result) {
        if (!result) {
          throw new Error("Cant push to GitHub 😭");
        }
        return result;
      })
  );
};

export default async (req, res) => {
  if (req.method === "POST") {
    const session = await auth0.getSession(req);
    if (session && session.user) {
      const granted = await isAllowedToPost(session.user.nickname);
      if (granted) {
        const message = "Some commit message";
        const author = {
          name: session.user.name,
          email: session.user.email
        };
        req.body.team = sanitize(req.body.team);

        const params = { author, message, data: req.body };
        return Promise.all([
          await publishTeam(params),
          await publishLatest(params)
        ])
          .then(sha => res.json({ success: true, sha }))
          .catch(e => console.log(e) || res.json({ success: false }));
      } else {
        console.log(`ERROR: use ${session.user.name} not granted to ${org}`);
      }
    }
  }

  res.json({ success: false });
};
