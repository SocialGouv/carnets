import React from "react"

import Edit from "./Edit"
import Delete from "./Delete"
import { UserContext } from "@lib/user"
import { TeamsContext } from "@lib/teams"
import { AdminsContext } from "@lib/admins"

const Header = ({ post }) => (
  <div className="header">
    <div className="mood">{post.mood}</div>
    <TeamsContext.Consumer>
      {(teams) => {
        const team = teams.find((team) => team.slug === post.team_slug)
        let {
          members: { nodes: members },
        } = team
        members = members.map((member) => member.login)
        return (
          team && (
            <AdminsContext.Consumer>
              {(admins) => (
                <>
                  <h3>{team.name}</h3>
                  <UserContext.Consumer>
                    {(user) =>
                      [...admins, ...members].includes(user?.nickname) && (
                        <>
                          <Edit post={post} />
                          <Delete post={post} />
                        </>
                      )
                    }
                  </UserContext.Consumer>
                </>
              )}
            </AdminsContext.Consumer>
          )
        )
      }}
    </TeamsContext.Consumer>
  </div>
)

export default Header
