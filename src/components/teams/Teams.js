import React from "react"
import Team from "./Team"

import { TeamsContext } from "../../lib/teams"

const Teams = ({ slug }) => (
  <ul className="teams">
    <TeamsContext.Consumer>
      {teams =>
        teams.map((team, i) => (
          <Team key={i} team={team} selected={!!(team.slug === slug)} />
        ))
      }
    </TeamsContext.Consumer>
  </ul>
)

export default Teams
