import { gql } from "graphql-request"

export const getTeams = gql`
  query getTeams {
    organization(login: "SocialGouv") {
      teams(
        first: 50
        privacy: VISIBLE
        rootTeamsOnly: true
        orderBy: { field: NAME, direction: ASC }
      ) {
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

export const getTeamPosts = gql`
  query getTeamPosts($slug: String) {
    posts(
      order_by: { created_at: desc }
      where: { team_slug: { _eq: $slug } }
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
        name
        value
      }
      team {
        name
      }
    }
  }
`

export const getLastPosts = gql`
  query getLastPosts {
    posts(
      distinct_on: team_slug
      order_by: { team_slug: asc, created_at: desc }
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
        name
        value
      }
      team {
        name
      }
    }
  }
`

export const getPost = gql`
  query getPost($id: uuid) {
    posts(where: { id: { _eq: $id } }) {
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
      team {
        name
      }
    }
  }
`

export const updatePost = gql`
  mutation update_posts($id: uuid, $post: posts_set_input) {
    update_posts(where: { id: { _eq: $id } }, _set: $post) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const createPost = gql`
  mutation insertPost($post: posts_insert_input!) {
    insert_posts_one(object: $post) {
      id
    }
  }
`

export const getStat = gql`
  query getStat {
    posts_stat(order_by: { year: asc, week: asc }) {
      count
      week
      year
    }
    teams_status {
      mood
      kpis_count
      last_post
      team_slug
    }
  }
`

export const getUserTeams = gql`
  query getUserTeams($login: String!) {
    organization(login: "socialgouv") {
      teams(first: 100, userLogins: [$login]) {
        nodes {
          slug
        }
      }
    }
  }
`

export const deletePost = gql`
  mutation delete_posts($id: uuid) {
    delete_kpis(where: { post_id: { _eq: $id } }) {
      affected_rows
    }
    delete_posts(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`
