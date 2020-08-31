module.exports = {
  modulePathIgnorePatterns: [".k8s/*"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@lib(.*)$": "<rootDir>/src/lib$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
  },
}
