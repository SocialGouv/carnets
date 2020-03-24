import React from "react"
import Link from "next/link"
import { UserContext } from "../../lib/user"

const Menu = () => (
  <UserContext.Consumer>
    {user =>
      user && !user.error ? (
        <>
          <div className="profile">
            <div className="name">{user.name}</div>
            <Link href="/publish" as="/publish">
              <a>Publish</a>
            </Link>
            <Link href="/stat" as="/stat">
              <a>Stat</a>
            </Link>
            <Link href="/api/auth0/logout" as="/api/auth0/logout">
              <a>Logout</a>
            </Link>
          </div>
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
)

export default Menu
