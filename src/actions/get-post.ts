import { cache } from "react";
import fetcher from "@/utils/graphql-fetcher";
import { getPost as getPostQuery } from "@/queries/index";

type Data = Record<"posts", []>;

const getPost = cache(async (id?: string) => {
  if (id) {
    const { posts: [data] = [{}] } = (await fetcher({
      query: getPostQuery,
      parameters: { id },
    })) as Data;

    return data as Post;
  }

  return undefined;
});

export default getPost;
