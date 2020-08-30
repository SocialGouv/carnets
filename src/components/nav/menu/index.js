import { useUser } from "@lib/user"
import React from "react"

import Authenticated from "./Authenticated"
import Default from "./Default"

const Menu = () => {
  const user = useUser()
  return (
    <div className="menu">
      {user && !user.error ? <Authenticated user={user} /> : <Default />}
    </div>
  )
}

export default Menu
