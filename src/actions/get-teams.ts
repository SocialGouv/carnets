import { cache } from "react";
import fetcher from "@/utils/graphql-fetcher";
import { getTeams as getTeamsQuery } from "@/queries/index";

type Teams = Record<"organization", Record<"teams", Record<"nodes", Team[]>>>;

export async function getTeamBySlug(slug: string) {
  const teams = await getTeams();
  return teams.find((team) => team.slug === slug);
}

const blacklist = [
  "appel-a-idees-fabrique-numerique",
  "data-ia",
  "devops-psn",
  "dora",
  "evolution-plateforme",
  "fabrique",
  "fce",
  "plateforme",
  "startup-bootstrap",
  "carnets-standup",
  "maison-de-l-autisme",
  "mano",
  "nata",
  "ozensemble",
  "tumeplay",
  "vao",
  "appel-a-idees-fabrique-numerique",
  "dora",
  "evolution-plateforme",
  "plateforme",
];

const getTeams = cache(async () => {
  const {
    organization: {
      teams: { nodes: teams },
    },
  } = (await fetcher({ query: getTeamsQuery })) as Teams;

  return teams.filter((team) => !blacklist.includes(team.slug));
});

export default getTeams;
