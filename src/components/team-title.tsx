import Image from "next/image";

export default function TeamTitle({ team }: { team?: Team }) {
  return (
    <div className="team-title">
      <Image
        width={48}
        height={48}
        alt="Picture of the team"
        src={team?.avatarUrl || ""}
        className="w-12 h-12"
      />
      <div className="name-description">
        <h2 className="text-4xl">{team?.name}</h2>
        <div>{team?.description}</div>
        <div className="members mt-2">
          {team?.members?.nodes.map(({ name, avatarUrl, login }) => (
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
    </div>
  );
}
