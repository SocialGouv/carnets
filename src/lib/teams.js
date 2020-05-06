import React from "react"
import { fetch } from "@lib/hasura"

const org = process.env.GITHUB_ORGANIZATION

export const TeamsContext = React.createContext()

export const list = async () => {
  const query = `
    query {
      organization(login: "${org}") {
        teams(
          first: 50,
          privacy: VISIBLE,
          rootTeamsOnly: true,
          orderBy: {field: NAME, direction: ASC}
        ) {
          totalCount
          nodes {
            slug
            name
            avatarUrl
            description
            members {
              nodes {
                login
              }
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
    organization: {
      teams: { nodes: teams },
      coreTeam: {
        members: { nodes: coreTeamMembers },
      },
    },
  } = await fetch(query)

  return {
    teams,
    admins: coreTeamMembers.map((member) => member.login),
  }
}

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

export const getPosts = async (team) => {
  const query = `
    query getTeamPosts($team: String) {
      posts(
        order_by: {created_at: desc},
        where: {team_slug: {_eq: $team}}
      ) {
        id
        mood
        term
        needs
        author
        team_slug
        priorities
        created_at
        kpis {
          id
          value
          name
        }
      }
    }
  `

  const { posts } = await fetch(query, { team })

  return posts
}
