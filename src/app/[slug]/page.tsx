import Teams from "@/components/teams";
import Posts from "@/components/posts";
import authOptions, {
  type GithubUser,
} from "../api/auth/[...nextauth]/options";
import TeamTitle from "@/components/team-title";
import { getServerSession } from "next-auth/next";
import { getTeamBySlug } from "@/actions/get-teams";
import getTeamPosts from "@/actions/get-team-posts";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Pagination from "@/components/common/pagination";

import "../styles.css"; // Global styles for this page/layout

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    page: number; // Or string, depending on how Next.js passes it; then parse
  };
}

export default async function Page({
  params: { slug },
  searchParams: { page },
}: PageProps) {
  const session = await getServerSession(authOptions);
  const user = session?.user as GithubUser | undefined; // More type safety
  const team = await getTeamBySlug(slug);
  // Ensure user and user.teams are defined before calling includes
  const isAuthorized = user?.teams?.includes(slug) || false;
  const currentPageNumber = Number(page) || 1;
  const { posts, count } = await getTeamPosts(slug, 5 * (currentPageNumber - 1));

  return (
    <>
      <aside className="hidden md:flex flex-initial w-80 flex-col">
        <Teams selectedTeamSlug={slug} />
      </aside>
      <main className="flex-1 flex flex-col gap-y-6 mb-4 px-4 md:px-0 pt-6 md:pt-0">
        <div className="flex flex-col lg:flex-row gap-x-6">
          <TeamTitle team={team} />
          {isAuthorized && (
            <div className="actions flex flex-col items-center justify-center lg:pt-10">
              <Button
                iconId="fr-icon-add-line"
                priority="tertiary"
                linkProps={{ href: `/${slug}/publish` }}
              >
                Nouvelle publication
              </Button>
            </div>
          )}
        </div>
        <Posts posts={posts} editable={isAuthorized} hideLogos={true} />
        <Pagination
          slug={slug}
          totalPages={Math.ceil(count / 5)}
          currentPage={currentPageNumber}
        />
      </main>
    </>
  );
}
