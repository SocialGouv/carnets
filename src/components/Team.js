import React from "react"
import Link from "next/link"

const Team = ({ team }) => (
  <li>
    <Link href="/teams/[slug]" as={`/teams/${team.slug}`}>
      <a>{team.name}</a>
    </Link>
  </li>
)

export default Team
