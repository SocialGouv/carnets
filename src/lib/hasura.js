import { GraphQLClient } from "graphql-request"

console.log("process.env.TEST_ONE:", process.env.TEST_ONE)
console.log("process.env.TEST_TWO:", process.env.TEST_TWO)
console.log("process.env.TEST_THREE:", process.env.TEST_THREE)
console.log("process.env.TEST_FOUR:", process.env.TEST_FOUR)
console.log("process.env.TEST_FIVE:", process.env.TEST_FIVE)
console.log("process.env.TEST_SIX:", process.env.TEST_SIX)
console.log("process.env.TEST_SEVEN:", process.env.TEST_SEVEN)
console.log("process.env.HASURA_URL:", process.env.HASURA_URL)
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
