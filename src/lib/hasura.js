import { GraphQLClient } from "graphql-request"

console.log("hasura - process.env.TEST_ONE:", process.env.TEST_ONE)
console.log("hasura - process.env.TEST_TWO:", process.env.TEST_TWO)
console.log("hasura - process.env.TEST_THREE:", process.env.TEST_THREE)
console.log("hasura - process.env.TEST_FOUR:", process.env.TEST_FOUR)
console.log("hasura - process.env.TEST_FIVE:", process.env.TEST_FIVE)
console.log("hasura - process.env.TEST_SIX:", process.env.TEST_SIX)
console.log("hasura - process.env.TEST_SEVEN:", process.env.TEST_SEVEN)
console.log("hasura - process.env.TEST_HEIGHT:", process.env.TEST_HEIGHT)
console.log("hasura - process.env.TEST_NINE:", process.env.TEST_NINE)
console.log("hasura - process.env.HASURA_URL:", process.env.HASURA_URL)

const url = process.env.HASURA_URL
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
