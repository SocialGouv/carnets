import auth0 from "../../../src/lib/auth0"
import { fetch } from "../../../src/lib/hasura"
import { isAllowedToPost } from "../../../src/lib/isAllowedToPost"

const update = async post => {
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

  const kpis = post.kpis
    .filter(kpi => kpi.name && kpi.name.length)
    .map(kpi => {
      kpi.post_id = id
      return kpi
    })

  delete post.kpis

  const variables = {
    id: id,
    kpis: kpis,
    post: post
  }
  console.log("UPDATE POST", variables)
  await fetch(query, variables)
}

const insert = async post => {
  const query = `
    mutation insert_posts($objects: [posts_insert_input!]!) {
      insert_posts(objects: $objects) {
        returning {
          id
        }
      }
    }
  `

  post.kpis = { data: post.kpis.filter(kpi => kpi.name && kpi.name.length) }
  console.log("INSERT POST", post)
  const variables = {
    objects: [post]
  }

  await fetch(query, variables)
}

export default async (req, res) => {
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

    const granted = await isAllowedToPost(user.nickname)

    if (!granted) {
      res.status(403)
      throw new Error(`User ${user.name} not granted to SocialGouv`)
    }

    req.body.author = user.nickname

    await (req.body.id ? update : insert)(req.body)
  } catch (e) {
    console.error(e)
    if (res.statusCode < 400) {
      res.status(500)
    }
  }

  res.send(null)
}