import { Button } from "@codegouvfr/react-dsfr/Button";

import Teams from "@/components/teams";
import Posts from "@/components/posts";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <aside className="flex-initial w-80">
        <Teams selectedTeamSlug={params.slug} />
      </aside>
      <main className="flex-1">
        {/* ri-add-fill */}
        <Button
          priority="secondary"
          iconId="fr-icon-add-circle-line"
          linkProps={{ href: `/posts/${params.slug}/publish` }}
        >
          Nouvelle publication
        </Button>
        <Posts slug={params.slug} />
      </main>
    </>
  );
}
