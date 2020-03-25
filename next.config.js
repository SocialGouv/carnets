const { version } = require("./package.json")
const dotenv = require("dotenv")
dotenv.config()

const revision =
  process.env.CI_COMMIT_SHA ||
  require("child_process")
    .execSync("git rev-parse HEAD")
    .toString()
    .trim()

module.exports = {
  env: {
    APP_VERSION: version,
    APP_REVISION: revision,
    HASURA_URL: process.env.HASURA_URL,
    GITHUB_USER: process.env.GITHUB_USER,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_REDIRECT_URI: process.env.AUTH0_REDIRECT_URI,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    GITHUB_ORGANIZATION: process.env.GITHUB_ORGANIZATION,
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    AUTH0_SESSION_COOKIE_SECRET: process.env.AUTH0_SESSION_COOKIE_SECRET,
    AUTH0_POST_LOGOUT_REDIRECT_URI: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI
  }
}
