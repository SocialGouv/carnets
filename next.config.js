const { version } = require("./package.json")
const withSourceMaps = require("@zeit/next-source-maps")

const revision = process.env.CI_COMMIT_SHA || "dev"
console.log("CI_COMMIT_SHA 0", process.env.CI_COMMIT_SHA, revision)

module.exports = withSourceMaps({
  env: {
    APP_VERSION: version,
    APP_REVISION: revision,
  },
  webpack(config) {
    return config
  },
})
