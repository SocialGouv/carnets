const GitHubPublisher = require("github-publish");

const token = "---";
const org = "revolunet";
const repo = "LEDPole";
const branch = "test";

const getNormalizedDate = () => {
  const dte = new Date();
  return `${dte.getFullYear()}${dte.getMonth()}${dte.getDate()}_${dte.getHours()}${dte.getMinutes()}${dte.getSeconds()}`;
};

const sanitize = name => name.replace(/[\s/;:,!?#]/g, "-");

const publishData = ({ author, message, data }) => {
  const publisher = new GitHubPublisher(token, org, repo, branch);
  const newFileName = `src/${sanitize(
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

const publish = (req, res) => {
  const { data, name, email } = JSON.parse(req.body);
  const message = "Some commit message 2";
  publishData({
    author: {
      name,
      email
    },
    message,
    data
  })
    .then(sha => res.json({ success: true, sha }))
    .catch(() => res.json({ success: false }));
};

// todo: securize
// publish(
//   { body: '{"data":"pouet", "name":"my name", "email":"email@email.com"}' },
//   { json: data => console.log(data) }
// );

export default (req, res) => {
  console.log(req.method);
  console.log(req.body.data);
  res.json({ success: true });
};
