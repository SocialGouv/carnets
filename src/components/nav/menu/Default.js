import Link from "next/link"
import React from "react"
import { BarChart2, Box, LogIn } from "react-feather"

const Default = () => (
  <div className="links">
    <Link href="/" as="/">
      <a>
        <Box size={13} />
        Accueil
      </a>
    </Link>
    <Link href="/stats" as="/stats">
      <a>
        <BarChart2 size={13} />
        Statistiques
      </a>
    </Link>
    <Link href="/api/auth0/login" as="/api/auth0/login">
      <a className="logout">
        <LogIn size={13} />
        Connexion
      </a>
    </Link>
  </div>
)

export default Default
