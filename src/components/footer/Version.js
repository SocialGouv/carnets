import React from "react"

const version = process.env.APP_VERSION
const revision = process.env.APP_REVISION

const Version = () => (
  <div className="version">
    version {version}{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://github.com/SocialGouv/carnets/tree/${revision}`}
    >
      ({revision && revision.substring(0, 6)})
    </a>
  </div>
)

export default Version
