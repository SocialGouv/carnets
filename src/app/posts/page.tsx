import Posts from "@/components/posts";
import Teams from "@/components/teams";

import "./styles.css";
import getLastPosts from "@/actions/get-last-posts";

export default async function Page() {
  const posts = await getLastPosts();
  return (
    <>
      <aside className="flex-initial w-80">
        <Teams />
      </aside>
      <main className="flex-1">
        <Posts posts={posts} />
      </main>
    </>
  );
}
