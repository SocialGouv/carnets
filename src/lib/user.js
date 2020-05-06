import React from "react"

import Auth0 from "@lib/auth0"
import { getMembers } from "@lib/teams"

export const UserContext = React.createContext()

export const getInfo = async (req, res) => {
  const auth0 = Auth0()
  const { user } = (await auth0.getSession(req)) || {}
  if (!user) {
    res.status(401)
    throw new Error("Unknown user")
  }
  const tokenCache = await auth0.tokenCache(req, res)
  const { accessToken } = await tokenCache.getAccessToken()
  if (!accessToken || !accessToken.length) {
    res.status(403)
    throw new Error(`Cannot get user's access token`)
  }
  const members = await getMembers(req.body.team_slug)
  if (!members.includes(user.nickname)) {
    res.status(403)
    throw new Error(`User ${user.name} not granted to SocialGouv`)
  }
  return [user.nickname, accessToken]
}
