import { cache } from "react";
import fetcher from "@/utils/graphql-fetcher";
import { getStats as getStatsQuery } from "@/queries/index";

export interface PostsStat {
  count: number;
  week: number;
  year: number;
  date?: Date;
}

export interface TeamsStatus {
  mood: Mood;
  last_post: Date;
  team_slug: string;
  kpis_count: number;
}

interface Data {
  posts_stat: PostsStat[];
  teams_status: TeamsStatus[];
}

const getStats = cache(async () => {
  const stats = (await fetcher({
    query: getStatsQuery,
  })) as Data;

  return stats;
});

export default getStats;
