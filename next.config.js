const { version } = require("./package.json")
const withSourceMaps = require("@zeit/next-source-maps")

module.exports = withSourceMaps({
  env: {
    APP_VERSION: version,
    APP_REVISION: process.env.CI_COMMIT_SHA || "dev",
  },
  webpack(config) {
    return config
  },
})
