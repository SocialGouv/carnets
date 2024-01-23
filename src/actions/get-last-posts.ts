import { cache } from "react";
import getTeams from "@/actions/get-teams";
import fetcher from "@/utils/graphql-fetcher";
import { getLastPosts as getLastPostsQuery } from "@/queries/index";

type Data = Record<"posts", []>;

const getLastPosts = cache(async () => {
  const teams = await getTeams();
  const slugs = teams?.map(({ slug }: { slug: string }) => slug);

  console.log("===> getLastPost:", slugs);

  const { posts } = (await fetcher({
    query: getLastPostsQuery,
    parameters: { slugs },
  })) as Data;

  return posts as Post[];
});

export default getLastPosts;
