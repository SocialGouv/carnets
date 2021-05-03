import Weather from "@components/Weather"
import { useTeams } from "@lib/teams"
import { useUser } from "@lib/user"
import React from "react"

import Delete from "./Delete"
import Edit from "./Edit"

const MAX_EDITABLE_POST_AGE = 1000 * 60 * 60 * 24 * 4 // 4 days
const isOldPost = post => new Date().getTime() - new Date(post.created_at).getTime() > MAX_EDITABLE_POST_AGE;

const Header = ({ post }) => {
  const { team_slug } = post
  const user = useUser() || {}
  const teams = useTeams() || {}
  const team = teams.find((team) => team.slug === post.team_slug)
  const isAllowed = team && !isOldPost(post) && (user.isAdmin || user.teams?.includes(team_slug))

  return (
    <div className="header">
      <Weather status={post.mood} />
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
