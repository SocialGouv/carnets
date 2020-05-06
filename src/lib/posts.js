import React from "react"
import { fetch } from "@lib/hasura"

export const PostsContext = React.createContext()

export const get = async (id) => {
  const query = `
    query getPost($id: uuid) {
      posts(
        where: {id: {_eq: $id}}
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

  const { posts } = await fetch(query, { id })
  return posts
}

export const list = async () => {
  const query = `
    {
      posts(
        distinct_on: team_slug,
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

  const { posts } = await fetch(query)
  return posts
}

export const create = (post, accessToken) => {
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
  const variables = { objects: [post] }
  return fetch(query, variables, accessToken)
}

export const update = (post, accessToken) => {
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
  delete post.author
  delete post.team_slug
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
  return fetch(query, variables, accessToken)
}

export const remove = (id, accessToken) => {
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

  return fetch(query, { id }, accessToken)
}
