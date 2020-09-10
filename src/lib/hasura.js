import { GraphQLClient } from "graphql-request"

const url = process.env.HASURA_URL

export const fetch = async (query, variables, token, role, secret) => {
  const headers = { "content-type": "application/json" }
  if (secret) headers["x-hasura-admin-secret"] = secret
  else if (token) headers.Authorization = `Bearer ${token}`
  if (role) headers["x-hasura-role"] = role
  console.log("FETCH headers", headers)
  const graphQLClient = new GraphQLClient(url, { headers })
  return graphQLClient.request(query, variables)
}
