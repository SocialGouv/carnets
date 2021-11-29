import { GraphQLClient } from "graphql-request"

export const fetcher = <T>(url: string): Promise<T> =>
  fetch(url).then((r) => r.json())

export const gqFetcher = <T>({
  url,
  query,
  params = {},
  token,
}: Request): Promise<T> => {
  const client = new GraphQLClient(url)
  if (token) client.setHeader("authorization", `Bearer ${token}`)
  return client.request(query, params)
}
