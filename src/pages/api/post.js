import Auth0 from "@lib/auth0"
import { fetch } from "@lib/hasura"

const suppress = async (id, accessToken) => {
  const query = `
    mutation delete_posts($id: uuid) {
      delete_kpis(where: {post_id: {_eq: $id}}) {
        affected_rows
      }
      delete_posts(where: {id: {_eq: $id}}) {
        affected_rows
      }
    }
  `

  await fetch(query, { id }, accessToken)
}

export default async (req, res) => {
  const auth0 = Auth0()
  const { id } = JSON.parse(req.body)

  try {
    if (req.method !== "DELETE") {
      res.status(405)
      throw new Error("Wrong method")
    }

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

    await suppress(id, accessToken)
  } catch (error) {
    console.error(error)
    if (res.statusCode < 400) {
      res.status(500)
    }
  }

  res.send(null)
}
