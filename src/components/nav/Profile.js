import React from "react"
import Link from "next/link"
import { UserContext } from "../../lib/user"

const Profile = () => (
  <UserContext.Consumer>
    {user =>
      user && !user.error ? (
        <>
          <div className="profile">
            <div className="name">{user.name}</div>
            <Link href="/api/stat" as="/api/stat">
              <a>stat</a>
            </Link>
            <Link href="/api/auth0/logout" as="/api/auth0/logout">
              <a>logout</a>
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

export default Profile
