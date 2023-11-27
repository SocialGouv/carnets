// import Link from "next/link";
// import Image from "next/image";

import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
// import { useRouter } from "next/router";

import fetcher from "@/utils/fetcher";
import { getTeams } from "@/queries/index";

export interface Team {
  name: string;
  slug: string;
  avatarUrl: string;
  description: string;
}

type Data = Record<
  "github_data",
  Record<"admins_and_teams", Record<"teams", Team[]>>[]
>;

export async function fetchTeams() {
  const data = (await fetcher(getTeams)) as Data;
  // console.log("data", data);
  return Array.isArray(data)
    ? (data as Team[])
    : data?.github_data[0]?.admins_and_teams.teams;
}

export default async function Teams({
  selectedTeamSlug,
}: {
  selectedTeamSlug?: string;
}) {
  console.log({ selectedTeamSlug });

  const teams = await fetchTeams();
  // console.log("teams", teams);

  const items = teams.map(({ name, slug }) => ({
    text: name,
    isActive: slug === selectedTeamSlug,
    linkProps: { href: `/posts/${slug}` },
  }));

  return (
    // <ul className="teams">
    <SideMenu
      align="left"
      items={items}
      sticky={true}
      // sticky="full-height"
      title="Les startups de la Fabrique"
      burgerMenuButtonText="Liste des startups"
    />
    // {/* {teams.map(({ avatarUrl, name, slug }, i) => (
    //   // <li key={i} className={slug === query.slug ? "selected" : ""}>
    //   <li key={i}>
    //     <Image
    //       width={30}
    //       height={30}
    //       src={avatarUrl}
    //       alt={`logo de la startup ${name}`}
    //     />
    //     <Link
    //       shallow={true}
    //       href={{ query: { slug }, pathname: "/team/[slug]" }}
    //     >
    //       {name}
    //     </Link>
    //   </li>
    // ))} */}
    // </ul>
  );
}
