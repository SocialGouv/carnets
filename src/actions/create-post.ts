import fetcher from "@/utils/graphql-fetcher";
import { createPost as createPostQuery } from "@/queries";

export default async function createPost(
  post: Post,
  slug: string,
  author: string,
) {
  const kpis = {
    data: post.kpis?.filter((kpi: KPI) => kpi.name && kpi.name.length),
  };

  await fetcher({
    query: createPostQuery,
    includeCookie: true,
    parameters: {
      post: { ...post, kpis, team_slug: slug, author },
    },
  });
}
