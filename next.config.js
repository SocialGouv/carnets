const { version } = require("./package.json")
const withSourceMaps = require("@zeit/next-source-maps")

const revision = process.env.CI_COMMIT_SHA || "dev"

module.exports = withSourceMaps({
  env: {
    APP_VERSION: version,
    APP_REVISION: revision,
  },
  webpack(config) {
    return config
  },
})
