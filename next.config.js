const { version } = require("./package.json")
const withSourceMaps = require("@zeit/next-source-maps")

console.log("CI_COMMIT_SHA 0", process.env.CI_COMMIT_SHA)

module.exports = withSourceMaps({
  env: {
    APP_VERSION: version,
    APP_REVISION: process.env.CI_COMMIT_SHA || "dev",
  },
  webpack(config) {
    return config
  },
})
