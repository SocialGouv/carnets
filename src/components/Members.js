import { TeamsContext } from "@lib/teams"
import React from "react"

const Members = ({ slug }) => (
  <TeamsContext.Consumer>
    {(teams) =>
      teams.map(
        (team, i) =>
          team.slug === slug && (
            <div key={i} className="members">
              <div
                className="avatar"
                style={{ backgroundImage: `url(${team.avatarUrl})` }}
              />
              <div className="details">
                <h2>
                  {team.name}
                  <small>{team.description}</small>
                </h2>
              </div>
            </div>
          )
      )
    }
  </TeamsContext.Consumer>
)

export default Members
