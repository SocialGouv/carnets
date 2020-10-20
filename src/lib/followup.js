import { fetch } from "@lib/hasura"

export const get = async (slug) => {
  console.log("GET", slug)
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
  console.log("RES", followups)
  return followups
}

export const upsert = (followup, slug, accessToken) => {
  followup.team_slug = followup.team_slug || slug
  console.log("UPSERT", followup, accessToken)

  const query = `
    mutation insert_followups(
      $slug: String,
      $objects: [followups_insert_input!]!
    ) {
      insert_followups(
        objects: $objects,
        on_conflict: {
          constraint: followups_team_slug_key,
          update_columns: [data],
          where: {
            team_slug: {_eq: $slug}
          }
        }
      ) {
        returning {
          id
        }
      }
    }
  `

  const variables = { objects: [followup], slug: followup.team_slug }
  console.log("VARIABLES", variables)
  return fetch(query, variables, accessToken)
}
