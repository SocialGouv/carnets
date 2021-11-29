import Link from "next/link"
import { useRouter } from "next/router"

const Teams = ({ teams = [] }: { teams: Team[] }) => {
  const { query } = useRouter()

  return (
    <ul className="teams">
      {teams.map(({ name, slug }, i) => (
        <li key={i} className={slug === query.slug ? "selected" : ""}>
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
