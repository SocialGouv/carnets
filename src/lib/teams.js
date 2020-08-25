import { fetch } from "@lib/hasura"
import React from "react"

const org = process.env.GITHUB_ORGANIZATION

export const TeamsContext = React.createContext()

export const list = async () => {
  console.log('Call to "list"')
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
    admins: coreTeamMembers.map((member) => member.login),
    teams,
  }
}

export const getMembers = async (team) => {
  console.log('Call to "getMembers"')
  const query = `
    query getMembers($org: String!, $team: String!) {
      organization(login: $org) {
        currentTeam: team(slug: $team) {
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
  } = await fetch(query, { org, team })

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
