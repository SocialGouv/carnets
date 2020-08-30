import { useTeams } from "@lib/teams"
import React from "react"

const Team = ({ field, form: { touched, errors }, ...props }) => {
  const teams = useTeams() || []

  return (
    <select
      {...field}
      {...props}
      className={touched[field.name] && errors[field.name] ? "error" : ""}
    >
      <option value="">Equipe*</option>
      {teams.map((team, i) => (
        <option key={i} value={team.slug}>
          {team.name}
        </option>
      ))}
    </select>
  )
}

export default Team
