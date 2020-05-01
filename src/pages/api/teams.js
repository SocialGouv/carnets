import { fetch } from "@lib/hasura"

const org = process.env.GITHUB_ORGANIZATION

export default async (req, res) => {
  const query = `
    query {
      organization(login: "${org}") {
        teams(
          first:100,
          privacy: VISIBLE,
          rootTeamsOnly:true,
          orderBy: {field: NAME, direction: ASC}
        ) {
          totalCount
          nodes {
            slug
            name
            avatarUrl
            description
          }
        }
      }
    }
  `

  try {
    const data = await fetch(query)
    res.json(data.organization.teams.nodes)
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
