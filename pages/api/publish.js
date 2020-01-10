import GitHubPublisher from "github-publish";

import { isAllowedToPost } from "../../src/isAllowedToPost";
import auth0 from "../../src/lib/auth0";

const token = process.env.GH_TOKEN;

const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const branch = process.env.GH_BRANCH;
const path = process.env.GH_PATH || "content";

const sanitize = name => name.replace(/[\s/;:,!?#]/g, "-").toLowerCase();

const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

const getNormalizedDate = () => {
  const dte = new Date();
  return `${dte.getFullYear()}${pad(dte.getMonth() + 1)}${pad(
    dte.getDate()
  )}_${pad(dte.getHours())}${pad(dte.getMinutes())}${pad(dte.getSeconds())}`;
};

const publishData = ({ author, message, data }) => {
  const publisher = new GitHubPublisher(token, org, repo, branch);
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const newFileName = `${path}/${year}/${month}/${sanitize(
    author.name
  )}-${getNormalizedDate()}.json`;
  return (
    publisher
      // warn: for updating a file, we'd need origin file SHA
      .publish(newFileName, JSON.stringify(data, null, 2), {
        message,
        author // https://github.com/voxpelli/node-github-publish/pull/53
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
        console.log("granted", granted);
        const message = "Some commit message";
        return await publishData({
          author: {
            name: session.user.name,
            email: session.user.email
          },
          message,
          data: req.body
        })
          .then(sha => res.json({ success: true, sha }))
          .catch(e => console.log(e) || res.json({ success: false }));
      } else {
        console.log(`ERROR: use ${session.user.name} not granted to ${org}`);
      }
    }
  }

  res.json({ success: false });
};
