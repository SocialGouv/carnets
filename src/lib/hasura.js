import { GraphQLClient } from "graphql-request";

const url = process.env.HASURA_URL;
const secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET;

console.log("HASURA_URL", url);
console.log("HASURA_GRAPHQL_ADMIN_SECRET", secret);

export const fetch = async (query, variables) => {
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": secret
    }
  });

  return await graphQLClient.request(query, variables);
};
