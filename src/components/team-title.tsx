import Image from "next/image";

export default function TeamTitle({ team }: { team?: Team }) {
  return (
    <div className="team-title">
      <Image
        width={100}
        height={100}
        alt="Picture of the team"
        src={team?.avatarUrl || ""}
      />
      <div className="name-description">
        <h2 className="text-3xl">{team?.name}</h2>
        <div>{team?.description}</div>
        <div className="members" style={{ marginTop: '0.25rem' }}>
          {team?.members?.nodes.map(({ name, avatarUrl, login }) => (
            <Image
              width={32}
              height={32}
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
