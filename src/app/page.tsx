import Posts from "@/components/posts";
import Teams from "@/components/teams";

import "./styles.css";
import getLastPosts from "@/actions/get-last-posts";

export default async function Page() {
  const posts = await getLastPosts();

  return (
    <>
      <aside className="hidden md:flex flex-initial w-80 flex-col">
        <Teams />
      </aside>
      <main className="flex-1 pt-6 md:pt-12 mb-8 px-4 md:px-0">
        <Posts posts={posts} />
      </main>
    </>
  );
}
