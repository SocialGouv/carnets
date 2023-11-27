import Posts from "@/components/posts";
import Teams from "@/components/teams";

export default function Page() {
  return (
    <>
      <aside className="flex-initial w-80">
        <Teams />
      </aside>
      <main className="flex-1">
        <Posts />
      </main>
    </>
  );
}
