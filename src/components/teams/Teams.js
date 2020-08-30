import { useTeams } from "@lib/teams"
import React from "react"

import Team from "./Team"

const Teams = ({ slug }) => {
  const teams = useTeams() || []

  return (
    <ul className="teams">
      {teams.map((team, i) => (
        <Team key={i} team={team} selected={!!(team.slug === slug)} />
      ))}
    </ul>
  )
}
export default Teams
