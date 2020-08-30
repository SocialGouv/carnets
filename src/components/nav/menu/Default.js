import Link from "next/link"
import React from "react"
import { LogIn } from "react-feather"

const Default = () => (
  <Link href="/api/auth0/login" as="/api/auth0/login">
    <a className="button">
      <LogIn size={12} /> Login
    </a>
  </Link>
)

export default Default
