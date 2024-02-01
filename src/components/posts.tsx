import Post from "@/components/post";

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
          <Post key={i} data={post} editable={editable} hideLogo={hideLogos} />
        ))}
    </section>
  );
}
