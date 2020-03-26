const { version } = require("./package.json")

module.exports = {
  env: {
    APP_VERSION: version,
    APP_REVISION: process.env.CI_COMMIT_SHA || "dev"
  }
}
