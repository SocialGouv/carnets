import React from "react"
import { TeamsContext } from "../../../lib/teams"

const Team = ({ handleChange, value, error }) => (
  <select
    name="team_slug"
    defaultValue={value}
    onBlur={handleChange}
    className={`${error ? "error" : ""}`}
  >
    <option value="">Equipe*</option>
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
