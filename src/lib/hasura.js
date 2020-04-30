import { GraphQLClient } from "graphql-request"

const url = process.env.HASURA_URL

export const fetch = async (query, variables, token) => {
  const headers = { "content-type": "application/json" }
  if (token) headers.Authorization = `Bearer ${token}`
  const graphQLClient = new GraphQLClient(url, { headers })
  return await graphQLClient.request(query, variables)
}
