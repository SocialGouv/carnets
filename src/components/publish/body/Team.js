import React from "react"
import { TeamsContext } from "../../../lib/teams"

const Team = ({ field, form: { touched, errors }, ...props }) => (
  <select
    {...field}
    {...props}
    className={touched[field.name] && errors[field.name] ? "error" : ""}
  >
    <option value="">Equipe*</option>
    <TeamsContext.Consumer>
      {(teams) =>
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
