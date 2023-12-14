import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";

import getTeams from "@/actions/get-teams";

export default async function Teams({
  selectedTeamSlug,
}: {
  selectedTeamSlug?: string;
}) {
  const teams = await getTeams();

  const items = teams.map(({ name, slug }) => ({
    text: name,
    isActive: slug === selectedTeamSlug,
    linkProps: { href: `/posts/${slug}` },
  }));

  return (
    <SideMenu
      align="left"
      items={items}
      sticky={true}
      title="Les startups de la Fabrique"
      burgerMenuButtonText="Liste des startups"
    />
  );
}
