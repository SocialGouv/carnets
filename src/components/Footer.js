import React from "react"

const version = process.env.APP_VERSION
const revision = process.env.APP_REVISION

const Footer = () => (
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
      <a href={`https://github.com/SocialGouv/carnets/tree/${revision}`}>
        ({revision.substring(0, 6)})
      </a>
    </div>
  </div>
)

export default Footer
