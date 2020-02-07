import { GraphQLClient } from "graphql-request";

const user = process.env.GH_USER;
const token = process.env.GH_TOKEN;

const url = "https://api.github.com/graphql";
const auth = Buffer.from(`${user}:${token}`).toString("base64");

export const fetch = async query => {
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  return await graphQLClient.request(query);
};
