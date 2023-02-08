import useSWR from "swr"

import fetcher from "@/utils/fetcher"
import useToken from "@/hooks/use-token"
import { getTeamPosts } from "@/queries/index"

const useTeamPosts = (slug?: string) => {
  const [token] = useToken()

  const { data, error } = useSWR(token && slug ? `posts/${slug}` : null, () =>
    fetcher(getTeamPosts, token, { slug })
  )

  if (error) throw new Error(`${error} (${token})`)
  return Array.isArray(data) ? data : data?.posts
}

export default useTeamPosts
