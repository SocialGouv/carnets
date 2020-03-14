import React from "react"
import Team from "./Team"
import { TeamsContext } from "../lib/teams"

const Teams = () => (
  <ul>
    <TeamsContext.Consumer>
      {teams => teams.map((team, i) => <Team key={i} team={team} />)}
    </TeamsContext.Consumer>
  </ul>
)

export default Teams
