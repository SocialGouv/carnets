import { getServerSession } from "next-auth/next";
import Teams from "@/components/teams";
import Posts from "@/components/posts";
import TeamTitle from "@/components/team-title";
import { getTeamBySlug } from "@/actions/get-teams";
import authOptions, {
  type GithubUser,
} from "../../../app/api/auth/[...nextauth]/options";

import "../styles.css";
import getTeamPosts from "@/actions/get-team-posts";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user as GithubUser;
  const team = await getTeamBySlug(slug);
  const isAuthorized = user?.teams.includes(slug);
  const posts = await getTeamPosts(slug);

  return (
    <>
      <aside className="flex-initial w-80">
        <Teams selectedTeamSlug={slug} />
      </aside>
      <main className="flex-1 flex flex-col gap-y-6">
        <TeamTitle team={team} slug={slug} isAuthorized={isAuthorized} />
        <Posts posts={posts} editable={isAuthorized} />
      </main>
    </>
  );
}
