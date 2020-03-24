import { fetch } from "../../lib/hasura"

export default async (req, res) => {
  const { slug, id } = req.query
  // console.log(
  //   "ID:",
  //   id,
  //   !!id,
  //   id ? "yes" : "no",
  //   id === "undefined",
  //   req.params
  // )
  const query = `
    {
      posts(
        ${id ? `where: {id: {_eq: "${id}"}},` : ""}
        ${slug || id ? "" : "distinct_on: team_slug,"}
        ${slug ? `where: {team_slug: {_eq: "${slug}"}},` : ""}
        order_by: {team_slug: asc, created_at: desc}
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

  // console.log("query", query)

  try {
    const data = await fetch(query)
    res.json(data.posts)
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
