import Image from "next/image";

export default function TeamTitle({ team }: { team?: Team }) {
  return (
    <div className="team-title">
      <Image
        width={200}
        height={200}
        alt="Picture of the team"
        src={team?.avatarUrl || ""}
      />
      <div className="name-description">
        <h2>{team?.name}</h2>
        <div>{team?.description}</div>
        <div className="members">
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
