const { version } = require("./package.json")
// const dotenv = require("dotenv")
// dotenv.config()

console.log("next.config - process.env.TEST_ONE:", process.env.TEST_ONE)
console.log("next.config - process.env.TEST_TWO:", process.env.TEST_TWO)
console.log("next.config - process.env.TEST_THREE:", process.env.TEST_THREE)
console.log("next.config - process.env.TEST_FOUR:", process.env.TEST_FOUR)
console.log("next.config - process.env.TEST_FIVE:", process.env.TEST_FIVE)
console.log("next.config - process.env.TEST_SIX:", process.env.TEST_SIX)
console.log("next.config - process.env.TEST_SEVEN:", process.env.TEST_SEVEN)
console.log("next.config - process.env.TEST_HEIGHT:", process.env.TEST_HEIGHT)
console.log("next.config - process.env.TEST_NINE:", process.env.TEST_NINE)
console.log("next.config - process.env.HASURA_URL:", process.env.HASURA_URL)

console.log("next.config - process.env.AUTH0_DOMAIN:", process.env.AUTH0_DOMAIN)
console.log(
  "next.config - process.env.AUTH0_CLIENT_ID",
  process.env.AUTH0_CLIENT_ID
)
console.log(
  "next.config - process.env.AUTH0_CLIENT_SECRET:",
  process.env.AUTH0_CLIENT_SECRET
)
console.log(
  "next.config - process.env.AUTH0_SESSION_COOKIE_SECRET:",
  process.env.AUTH0_SESSION_COOKIE_SECRET
)

module.exports = {
  env: {
    APP_VERSION: version,
    APP_REVISION: process.env.CI_COMMIT_SHA || "dev"
  }
}
