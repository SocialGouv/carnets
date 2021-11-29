import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

const Teams = ({ teams = [] }: { teams: Team[] }) => {
  const { query } = useRouter()

  return (
    <ul className="teams">
      {teams.map(({ avatarUrl, name, slug }, i) => (
        <li key={i} className={slug === query.slug ? "selected" : ""}>
          <Image
            width={30}
            height={30}
            src={avatarUrl}
            alt={`logo de la startup ${name}`}
          />
          <Link
            shallow={true}
            href={{ query: { slug }, pathname: "/team/[slug]" }}
          >
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Teams
