import React from "react"
import Link from "next/link"
import { LogIn, Edit3, BarChart2, LogOut } from "react-feather"

import { UserContext } from "../../lib/user"

const Menu = () => (
  <div className="menu">
    <UserContext.Consumer>
      {(user) =>
        user && !user.error ? (
          <>
            <div className="profile">
              <div className="name">{user.name}</div>
              <div className="links">
                <Link href="/publish" as="/publish">
                  <a>
                    <Edit3 size={12} />
                    Publier
                  </a>
                </Link>
                <Link href="/stats" as="/stats">
                  <a>
                    <BarChart2 size={12} />
                    Statistiques
                  </a>
                </Link>
                <Link href="/api/auth0/logout" as="/api/auth0/logout">
                  <a className="logout">
                    <LogOut size={12} />
                    Déconnexion
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="avatar"
              style={{ backgroundImage: `url(${user.picture})` }}
            ></div>
          </>
        ) : (
          <Link href="/api/auth0/login" as="/api/auth0/login">
            <a className="button">
              <LogIn size={12} /> Login
            </a>
          </Link>
        )
      }
    </UserContext.Consumer>
  </div>
)

export default Menu
