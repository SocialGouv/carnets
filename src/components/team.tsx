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
    <section className="team flex items-center pb-5">
      <div>
        {team?.avatarUrl && (
          <Image
            width={96}
            height={96}
            src={team?.avatarUrl}
            alt="Picture of the team"
          />
        )}
      </div>
      <div className="flex-1 px-5">
        <h2>{team?.name}</h2>
        <div className="font-spectral">{team?.description}</div>
      </div>
      {isAuthorized && (
        <Link href={`/team/${query.slug}/post`}>
          <a className="btn primary">
            <i className="ri-add-fill ri-lg" />
            Publier
          </a>
        </Link>
      )}
    </section>
  )
}

export default Team
