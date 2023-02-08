import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"

const Team = ({ team }: { team: Team }) => {
  const { query } = useRouter()
  const [session] = useSession()

  const isAuthorized =
    session &&
    session.user &&
    (session.user.teams.includes("core-team") ||
      session.user.teams.includes(String(query.slug)))

  return (
    <section className="team">
      <div>
        {team?.avatarUrl && (
          <Image
            width={72}
            height={72}
            src={team?.avatarUrl}
            alt="Picture of the team"
          />
        )}
      </div>
      <div className="name-description">
        <h2>{team?.name}</h2>
        <div className="description">{team?.description}</div>
      </div>
      {isAuthorized && (
        <Link
          passHref
          className="btn primary"
          href={`/team/${query.slug}/post`}
        >
          <i className="ri-add-fill ri-lg" />
          Nouvelle publication
        </Link>
      )}
    </section>
  )
}

export default Team
