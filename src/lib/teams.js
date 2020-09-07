import { fetch } from "@lib/hasura"
import { createContext, useContext } from "react"

const org = process.env.GITHUB_ORGANIZATION

export const TeamsContext = createContext()
export const useTeams = () => useContext(TeamsContext)

export const sync = async () => {
  const data = await getDataFromGithub()
  return syncGithubData(data)
}

export const syncGithubData = (data) => {
  const query = `
    mutation syncGithubAdminsAndTeams() {
      delete_github_data() {
        affected_rows
      }
      insert_github_data(objects: $objects) {
        returning {
          id
        }
      }
    }
  `
  const variables = { objects: [{ admins_and_teams: data }] }
  return fetch(query, variables)
}

export const getDataFromGithub = async () => {
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
                name
                avatarUrl
                url
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
                name
                avatarUrl
                url
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
