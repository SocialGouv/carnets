import React from "react"
import Link from "next/link"
import { UserContext } from "../lib/user"

const Nav = () => (
  <>
    <h1>It Works!</h1>
    <UserContext.Consumer>
      {user =>
        user && !user.error ? (
          <>
            <div>{user.name}</div>
            <Link href="/api/logout" as="/api/logout">
              <a>logout</a>
            </Link>
          </>
        ) : (
          <Link href="/api/login" as="/api/login">
            <a>login</a>
          </Link>
        )
      }
    </UserContext.Consumer>
  </>
)

export default Nav
