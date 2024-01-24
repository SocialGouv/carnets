import { cache } from "react";
import fetcher from "@/utils/graphql-fetcher";
import { getTeams as getTeamsQuery } from "@/queries/index";

type Teams = Record<
  "github_data",
  Record<"admins_and_teams", Record<"teams", Team[]>>[]
>;

export async function getTeamBySlug(slug: string) {
  const teams = await getTeams();
  return teams.find((team) => team.slug === slug);
}

const getTeams = cache(async () => {
  const {
    github_data: [
      {
        admins_and_teams: { teams },
      },
    ],
  } = (await fetcher({ query: getTeamsQuery })) as Teams;

  return teams;
});

export default getTeams;
