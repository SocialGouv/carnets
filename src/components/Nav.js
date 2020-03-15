import React from "react"
import Link from "next/link"
import { UserContext } from "../lib/user"

const Nav = () => (
  <div className="nav">
    <h1>
      <Link href="/" as="/">
        <a>Carnets</a>
      </Link>
    </h1>
    <UserContext.Consumer>
      {user =>
        user && !user.error ? (
          <>
            <Link href="/api/auth0/logout" as="/api/auth0/logout">
              <a>logout</a>
            </Link>
            <div className="name">{user.name}</div>
            <div
              className="avatar"
              style={{ backgroundImage: `url(${user.picture})` }}
            ></div>
          </>
        ) : (
          <Link href="/api/auth0/login" as="/api/auth0/login">
            <a>login</a>
          </Link>
        )
      }
    </UserContext.Consumer>
  </div>
)

export default Nav
