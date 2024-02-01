import fetcher from "@/utils/graphql-fetcher";
import { updatePost as updatePostQuery } from "@/queries";

export default async function updatePost(post: Post, id: string) {
  const { mood, needs, priorities, term } = post;

  const kpis = post.kpis
    ?.filter((kpi: KPI) => kpi.name && kpi.name.length)
    .map(({ name, value }: KPI) => ({ name, value, post_id: id }));

  await fetcher({
    query: updatePostQuery,
    includeCookie: true,
    parameters: {
      id,
      kpis,
      post: { mood, needs, priorities, term },
    },
  });
}
