import { fetch } from "@lib/hasura"
import { createContext, useContext } from "react"

const org = process.env.GITHUB_ORGANIZATION

export const TeamsContext = createContext()
export const useTeams = () => useContext(TeamsContext)

export const sync = async () => {
  const data = await getDataFromGithub()
  return syncGithubData(data)
}

const syncGithubData = (data) => {
  const role = "webhook"
  const secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET
  const query = `
    mutation syncGithubAdminsAndTeams($data: jsonb) {
      delete_github_data(where: {}) {
        affected_rows
      }
      insert_github_data(objects: [{ admins_and_teams: $data }]) {
        affected_rows
        returning {
          id
        }
      }
    }
  `
  const variables = { data }
  return fetch(query, variables, null, role, secret)
}

const getDataFromGithub = async () => {
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
        members: { nodes: admins },
      },
    },
  } = await fetch(query)

  return {
    admins: admins.map((member) => member.login),
    teams,
  }
}

export const list = async () => {
  const query = `
    query {
      github_data(where: {}) {admins_and_teams}
    }
  `

  const {
    github_data: [
      {
        admins_and_teams: { admins, teams },
      },
    ],
  } = await fetch(query)

  return { admins, teams }
}

export const getMembers = async (slug) => {
  const query = `
    query {
      github_data(where: {}) {admins_and_teams}
    }
  `

  const {
    github_data: [
      {
        admins_and_teams: { admins, teams },
      },
    ],
  } = await fetch(query)

  const team = teams.find((team) => team.slug === slug)
  const {
    members: { nodes },
  } = team
  const members = nodes.map((member) => member.login)

  return [...admins, ...members]
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
