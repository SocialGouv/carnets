import Team from "@/components/team"
import useTeams from "@/hooks/use-teams"

export const TeamLoader = ({ slug }: { slug?: string }) => {
  const teams = useTeams()
  const team = teams && teams.find((team: Team) => team.slug === slug)

  return <Team team={team} />
}
