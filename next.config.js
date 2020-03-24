const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  env: {
    GITHUB_USER: process.env.GITHUB_USER,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    GITHUB_ORGANIZATION: process.env.GITHUB_ORGANIZATION,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI
  }
}
