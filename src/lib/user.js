import { useAdmins } from "@lib/admins"
import Auth0 from "@lib/auth0"
import { getMembers, useTeams } from "@lib/teams"
import React, { createContext, useContext } from "react"

export const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const getUser = async (req, res) => {
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
  return [user, accessToken]
}

export const getInfo = async (req, res) => {
  const [user, accessToken] = await getUser(req, res)
  const members = await getMembers(req.body.team_slug)
  console.log("members", members)
  if (!members.includes(user.nickname)) {
    res.status(403)
    throw new Error(`User ${user.name} not granted to SocialGouv`)
  }
  return [user.nickname, accessToken]
}

const getUserTeams = (user, teams) => {
  const { nickname } = user
  return teams.reduce(
    (teams, team) => (
      team.members.nodes.find((member) => member.login === nickname) &&
        teams.push(team.slug),
      teams
    ),
    []
  )
}

export const UserProvider = ({ children, value: user }) => {
  const teams = useTeams()
  const admins = useAdmins()
  if (user && teams && admins) {
    user.isAdmin = admins.includes(user.nickname)
    user.teams = getUserTeams(user, teams)
  }
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
