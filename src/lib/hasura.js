import { GraphQLClient } from "graphql-request"

console.log("process.env.HASURA_URL:", process.env.HASURA_URL)
console.log("process.env.TEST_FOUR:", process.env.TEST_FOUR)
const url = process.env.TEST_FOUR || process.env.HASURA_URL
const secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET

export const fetch = async (query, variables) => {
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": secret
    }
  })

  return await graphQLClient.request(query, variables)
}
