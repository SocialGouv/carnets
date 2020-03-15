import React from "react"
import Link from "next/link"

const Team = ({ team, selected }) => (
  <li className={selected ? "selected" : ""}>
    <Link href="/team/[slug]" as={`/team/${team.slug}`}>
      <a>{team.name}</a>
    </Link>
  </li>
)

export default Team
