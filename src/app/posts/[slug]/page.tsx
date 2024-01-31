import { getServerSession } from "next-auth/next";
import Teams from "@/components/teams";
import Posts from "@/components/posts";
import TeamTitle from "@/components/team-title";
import { getTeamBySlug } from "@/actions/get-teams";
import authOptions, {
  type GithubUser,
} from "../../../app/api/auth/[...nextauth]/options";
import { Button } from "@codegouvfr/react-dsfr/Button";
import getTeamPosts from "@/actions/get-team-posts";

import "../styles.css";

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
        <div className="flex flex-col xl:flex-row gap-x-6">
          <TeamTitle team={team} />
          {isAuthorized && (
            <div className="actions flex flex-col items-center justify-center">
              <Button
                iconId="fr-icon-add-line"
                priority="tertiary"
                linkProps={{ href: `/posts/${slug}/publish` }}
              >
                Nouvelle publication
              </Button>
            </div>
          )}
        </div>
        <Posts posts={posts} editable={isAuthorized} hideLogos={true} />
      </main>
    </>
  );
}
