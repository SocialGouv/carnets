import useSWR from "swr"

import fetcher from "@/utils/fetcher"
import { getTeams } from "@/queries/index"

const useTeams = () => {
  const { data } = useSWR("teams", () => fetcher(getTeams))

  return Array.isArray(data)
    ? data
    : data?.github_data[0].admins_and_teams.teams
}

export default useTeams
