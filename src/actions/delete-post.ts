import fetcher from "@/utils/graphql-fetcher";
import { deletePost as deletePostQuery } from "@/queries";

export default async function deletePost(id?: string) {
  if (id) {
    await fetcher({
      parameters: { id },
      includeCookie: true,
      query: deletePostQuery,
    });
  }
}
