import React from "react"

const version = process.env.APP_VERSION
// const revision = process.env.APP_REVISION
console.log("CI_COMMIT_SHA 1", process.env.CI_COMMIT_SHA)

const Footer = () => {
  console.log("CI_COMMIT_SHA 2", process.env.CI_COMMIT_SHA)
  const revision = process.env.CI_COMMIT_SHA || "dev"

  return (
    <div className="footer">
      <div className="info">
        Pour en savoir plus sur l&apos;utilisation de <b>Carnets</b>, visitez le{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SocialGouv/www/wiki/Inscrire-son-%C3%A9quipe-au-standup"
        >
          wiki
        </a>
        .
      </div>
      <div className="version">
        version {version}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/SocialGouv/carnets/tree/${revision}`}
        >
          ({revision.substring(0, 6)})
        </a>
      </div>
    </div>
  )
}

export default Footer
