import Image from "next/image";

// Define the Team and Member types if not globally available
// This is a common ESLint/TypeScript requirement for props.
// Assuming Team might look like this:
// interface MemberNode {
//   name: string;
//   avatarUrl: string;
//   login: string;
// }
// interface Team {
//   avatarUrl?: string;
//   name?: string;
//   description?: string;
//   members?: {
//     nodes: MemberNode[];
//   };
// }

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
        <div className="members" style={{ marginTop: "0.25rem" }}>
          {team?.members?.nodes.map(({ name, avatarUrl, login }) => (
            <Image
              key={login}
              src={avatarUrl}
              width={32}
              height={32}
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
