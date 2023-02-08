import useSWR from "swr"

import fetcher from "@/utils/fetcher"
import useTeams from "@/hooks/use-teams"
import useToken from "@/hooks/use-token"
import { getLastPosts } from "@/queries/index"

const useLastPosts = () => {
  const teams = useTeams()
  const [token] = useToken()

  const slugs = teams?.map(({ slug }: { slug: string }) => slug)

  const { data, error } = useSWR(token && slugs ? "posts" : null, () =>
    fetcher(getLastPosts, token, { slugs })
  )

  if (error) throw new Error(`${error} (${token})`)
  return Array.isArray(data) ? data : data?.posts
}

export default useLastPosts
