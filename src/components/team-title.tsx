import Image from "next/image";
import { Button } from "@codegouvfr/react-dsfr/Button";

export default function TeamTitle({
  team,
  slug,
  isAuthorized,
}: {
  team?: Team;
  slug: string;
  isAuthorized: boolean;
}) {
  return (
    <div className="team-title">
      <Image
        width={128}
        height={128}
        alt="Picture of the team"
        src={team?.avatarUrl || ""}
      />
      <div className="name-description">
        <h2>{team?.name}</h2>
        <div>{team?.description}</div>
        <div className="members">
          {team?.members.nodes.map(({ name, avatarUrl, login }) => (
            <Image
              width={42}
              height={42}
              key={login}
              src={avatarUrl}
              title={name}
              className="rounded-full"
              alt={`avatar de ${name}`}
            />
          ))}
        </div>
      </div>
      {isAuthorized && (
        <div className="actions">
          <Button
            iconId="ri-add-fill"
            priority="tertiary no outline"
            linkProps={{ href: `/posts/${slug}/publish` }}
          >
            Nouvelle publication
          </Button>
        </div>
      )}
    </div>
  );
}
