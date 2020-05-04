import Auth0 from "@lib/auth0"
import { fetch } from "@lib/hasura"
import { isAllowedToPost } from "@lib/isAllowedToPost"

const update = async (post, accessToken) => {
  const query = `
    mutation update_posts($id: uuid, $post: posts_set_input, $kpis: [kpis_insert_input!]!) {
      update_posts(where: {id: {_eq: $id}}, _set: $post) {
        affected_rows
        returning {
          id
        }
      }
      delete_kpis(where: {post_id: {_eq: $id}}) {
        affected_rows
      }
      insert_kpis(objects: $kpis) {
        affected_rows
      }
    }
  `

  const id = post.id

  delete post.id
  delete post.created_at

  const kpis = post.kpis
    .filter((kpi) => kpi.name && kpi.name.length)
    .map((kpi) => {
      kpi.post_id = id
      delete kpi.id
      return kpi
    })

  delete post.kpis

  const variables = { id, kpis, post }

  await fetch(query, variables, accessToken)
}

const insert = async (post, accessToken) => {
  const query = `
    mutation insert_posts($objects: [posts_insert_input!]!) {
      insert_posts(objects: $objects) {
        returning {
          id
        }
      }
    }
  `

  post.kpis = { data: post.kpis.filter((kpi) => kpi.name && kpi.name.length) }

  const variables = {
    objects: [post],
  }

  await fetch(query, variables, accessToken)
}

export default async (req, res) => {
  const auth0 = Auth0()

  try {
    if (req.method !== "POST" && req.method !== "PUT") {
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
    console.log("accessToken", accessToken)
    if (!accessToken || !accessToken.length) {
      res.status(403)
      throw new Error(`Cannot get user's access token`)
    }

    const granted = await isAllowedToPost(user.nickname)

    if (!granted) {
      res.status(403)
      throw new Error(`User ${user.name} not granted to SocialGouv`)
    }

    req.body.author = user.nickname

    await (req.body.id ? update : insert)(req.body, accessToken)
  } catch (error) {
    console.error(error)
    if (res.statusCode < 400) {
      res.status(500)
    }
  }

  res.send(null)
}
