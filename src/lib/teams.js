import React from "react"
import { fetch } from "@lib/hasura"

export const TeamsContext = React.createContext()

export const getMembers = async (team) => {
  const org = process.env.GITHUB_ORGANIZATION

  const query = `
    query {
      organization(login: "${org}") {
        currentTeam: team(slug: "${team}") {
          members {
            nodes {
              login
            }
          }
        }
        coreTeam: team(slug: "core-team") {
          members {
            nodes {
              login
            }
          }
        }
      }
    }
  `

  const {
    organization: { currentTeam, coreTeam },
  } = await fetch(query)

  const currentTeamMembers = currentTeam ? currentTeam.members.nodes : []
  const coreTeamMembers = coreTeam ? coreTeam.members.nodes : []

  return [...currentTeamMembers, ...coreTeamMembers].map(
    (member) => member.login
  )
}
