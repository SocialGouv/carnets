import { cache } from "react";
import fetcher from "@/utils/graphql-fetcher";
import { getTeamPosts as getTeamPostsQuery } from "@/queries/index";

interface Data {
  posts: Post[];
  posts_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

const getTeamPosts = cache(async (slug: string, offset: number) => {
  const {
    posts,
    posts_aggregate: {
      aggregate: { count },
    },
  } = (await fetcher({
    query: getTeamPostsQuery,
    parameters: { slug, offset },
  })) as Data;

  return { posts, count };
});

export default getTeamPosts;
