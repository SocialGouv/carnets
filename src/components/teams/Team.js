import React from "react"
import Link from "next/link"

const Team = ({ team, selected }) => (
  <li className={`team ${selected ? "selected" : ""}`}>
    <div
      className="avatar"
      style={{ backgroundImage: `url(${team.avatarUrl})` }}
    ></div>
    <Link href="/team/[slug]" as={`/team/${team.slug}`}>
      <a>{team.name}</a>
    </Link>
  </li>
)

export default Team
