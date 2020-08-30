import Members from "@components/Members"
import { useTeams } from "@lib/teams"
import React from "react"

const Intro = ({ slug }) => {
  const teams = useTeams() || []
  const team = teams.find((team) => team.slug === slug) || {}
  const members = team ? team.members.nodes : []

  return (
    <div className="intro">
      <div
        className="team-avatar"
        style={{ backgroundImage: `url(${team.avatarUrl})` }}
      />
      <div className="details">
        <h2>
          {team.name}
          <small>{team.description}</small>
        </h2>
        <Members members={members} />
      </div>
    </div>
  )
}

export default Intro
