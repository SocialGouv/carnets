import { cache } from "react";
import fetcher from "@/utils/graphql-fetcher";
import { getTeamPosts as getTeamPostsQuery } from "@/queries/index";

type Data = Record<"posts", []>;

const getTeamPosts = cache(async (slug: string) => {
  console.log("===> getTeamPosts:", slug);
  const { posts } = (await fetcher({
    query: getTeamPostsQuery,
    parameters: { slug },
  })) as Data;

  return posts as Post[];
});

export default getTeamPosts;
