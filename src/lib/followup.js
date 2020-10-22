import { fetch } from "@lib/hasura"

export const get = async (slug) => {
  const query = `
    query getFollowup($slug: String) {
      followups(
        where: {team_slug: {_eq: $slug}}
      ) {
        id
        data
        team_slug
        updated_at
      }
    }
  `

  const res = await fetch(query, { slug })
  const { followups } = res
  return followups
}

export const upsert = async (followup, slug, accessToken) => {
  followup.updated_at = new Date()
  followup.team_slug = followup.team_slug || slug

  const query = `
    mutation insert_followups(
      $slug: String,
      $objects: [followups_insert_input!]!
    ) {
      insert_followups(
        objects: $objects,
        on_conflict: {
          constraint: followups_team_slug_key,
          update_columns: [data, updated_at],
          where: {
            team_slug: {_eq: $slug}
          }
        }
      ) {
        returning {
          id
          data
          team_slug
          updated_at
        }
      }
    }
  `

  const variables = { objects: [followup], slug: followup.team_slug }
  const {
    insert_followups: { returning },
  } = await fetch(query, variables, accessToken)
  return returning[0]
}
