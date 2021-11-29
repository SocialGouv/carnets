import useSWR from "swr/immutable"

import fetcher from "@/utils/fetcher"
import useToken from "@/services/token"
import { getLastPosts, getTeamPosts } from "@/queries/index"

const usePosts = (slug?: string | string[]): Post[][] => {
  const [token] = useToken()

  const { data: { posts: data } = {} } = useSWR(
    token ? [slug, slug ? getTeamPosts : getLastPosts, token] : null,
    (slug, query, token) => fetcher(query, token, slug ? { slug } : undefined)
  )

  const posts =
    data &&
    data.reduce(
      (acc: [Post], post: Post) => (post.team && acc.push(post), acc),
      []
    )

  return [posts]
}

export default usePosts
