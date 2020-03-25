import { GraphQLClient } from "graphql-request"

const url = process.env.TEST_FOUR
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
