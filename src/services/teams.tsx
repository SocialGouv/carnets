import useSWR from "swr"

import fetcher from "@/utils/fetcher"
import useToken from "@/services/token"
import { getTeams } from "@/queries/index"

const useTeams = (): Team[][] => {
  const [token] = useToken()

  const {
    data: {
      organization: { teams: { nodes: teams = undefined } = {} } = {},
    } = {},
  } = useSWR(token ? [getTeams, token] : null, fetcher)

  return [teams]
}

export default useTeams
