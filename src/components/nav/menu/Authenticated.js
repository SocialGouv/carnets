import Link from "next/link"
import React from "react"
import { BarChart2, Box, Edit3, LogOut } from "react-feather"

const Authenticated = ({ user }) => (
  <>
    <div className="profile">
      <div className="name">{user.name}</div>
      <div className="links">
        <Link href="/" as="/">
          <a>
            <Box size={13} />
            Accueil
          </a>
        </Link>
        <Link href="/publish" as="/publish">
          <a>
            <Edit3 size={13} />
            Publier
          </a>
        </Link>
        <Link href="/stats" as="/stats">
          <a>
            <BarChart2 size={13} />
            Statistiques
          </a>
        </Link>
        <Link href="/api/auth0/logout" as="/api/auth0/logout">
          <a className="logout">
            <LogOut size={13} />
            Déconnexion
          </a>
        </Link>
      </div>
    </div>
    <div
      className="avatar"
      style={{ backgroundImage: `url(${user.picture})` }}
    />
  </>
)

export default Authenticated
