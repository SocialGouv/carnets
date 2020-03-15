import React from "react"
import { TeamsContext } from "../../lib/teams"

const Team = ({ handleChange, value }) => (
  <select name="team_slug" onBlur={handleChange} defaultValue={value}>
    <TeamsContext.Consumer>
      {teams =>
        teams.map((team, i) => (
          <option key={i} value={team.slug}>
            {team.name}
          </option>
        ))
      }
    </TeamsContext.Consumer>
  </select>
)

export default Team
