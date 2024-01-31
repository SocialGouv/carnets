import Post from "@/components/post";
import fetcher from "@/utils/graphql-fetcher";
import { deletePost as deletePostQuery } from "@/queries";

const deletePost = async (id?: string) => {
  if (id) {
    await fetcher({
      parameters: { id },
      includeCookie: true,
      query: deletePostQuery,
    });
  }
};

export default function Posts({
  posts,
  editable = false,
  hideLogos = false,
}: {
  posts: Post[];
  editable?: boolean;
  hideLogos?: boolean;
}) {
  return (
    <section className="posts">
      {posts &&
        posts.map((post, i) => (
          <Post
            key={i}
            data={post}
            editable={editable}
            hideLogo={hideLogos}
            handlePostDeletion={async () => {
              "use server";
              await deletePost(post.id);
            }}
          />
        ))}
    </section>
  );
}
