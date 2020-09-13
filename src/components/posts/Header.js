import { useTeams } from "@lib/teams"
import { useUser } from "@lib/user"
import React from "react"

import Delete from "./Delete"
import Edit from "./Edit"

const Header = ({ post }) => {
  const { team_slug } = post
  const user = useUser() || {}
  const teams = useTeams() || {}
  const team = teams.find((team) => team.slug === post.team_slug)
  const isAllowed = team && (user.isAdmin || user.teams?.includes(team_slug))

  return (
    <div className="header">
      <div className="mood">{post.mood}</div>
      <h3>{team?.name || team_slug}</h3>
      {isAllowed && (
        <>
          <Edit post={post} />
          <Delete post={post} />
        </>
      )}
    </div>
  )
}

export default Header
