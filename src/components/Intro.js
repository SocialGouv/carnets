import React from "react"
import { TeamsContext } from "../lib/teams"

const Intro = ({ slug }) => (
  <TeamsContext.Consumer>
    {teams =>
      teams.map(
        (team, i) =>
          team.slug === slug && (
            <div key={i} className="intro">
              <div
                className="avatar"
                style={{ backgroundImage: `url(${team.avatarUrl})` }}
              ></div>
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

export default Intro