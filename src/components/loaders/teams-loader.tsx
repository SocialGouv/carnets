import Teams from "@/components/teams"
import useTeams from "@/hooks/use-teams"
import Loader from "@/components/common/loader"

export const TeamsLoader = () => {
  const teams = useTeams()

  if (!teams) return <Loader />
  if (!teams.length) return <div>Aucune équipe pour le moment...</div>

  return <Teams teams={teams} />
}

export default TeamsLoader
