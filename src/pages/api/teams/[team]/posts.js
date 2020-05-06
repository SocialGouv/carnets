import { fetch } from "@lib/hasura"

export default async (req, res) => {
  const { team } = req.query

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

  try {
    const { posts } = await fetch(query, { team })
    res.json(posts)
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
