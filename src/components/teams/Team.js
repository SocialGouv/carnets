import Link from "next/link"
import React from "react"

const Team = ({ team, selected }) => (
  <li className={`team ${selected ? "selected" : ""}`}>
    <div
      className="avatar"
      style={{ backgroundImage: `url(${team.avatarUrl})` }}
    />
    <Link href="/team/[slug]" as={`/team/${team.slug}`}>
      <a>{team.name}</a>
    </Link>
  </li>
)

export default Team
