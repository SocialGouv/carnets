import useSWR from "swr"
import useTeams from "./teams"

interface Team {
  slug: string
  name: string
  avatarUrl: string
  description: string
}

const useTeam = (slug: string | string[] | undefined): [Team | undefined] => {
  const [teams] = useTeams()

  const fetcher = (slug: string) => teams.find((team) => team.slug === slug)

  const { data } = useSWR(
    teams?.length && slug ? [slug, "team"] : null,
    fetcher
  )

  return [data]
}

export default useTeam
