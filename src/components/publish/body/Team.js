import { useTeams } from "@lib/teams"
import { useUser } from "@lib/user"
import React from "react"

const Team = ({
  field,
  form,
  form: { touched, errors, initialValues },
  ...props
}) => {
  const user = useUser() || {}
  const allTeams = useTeams() || []
  const teams = user.isAdmin
    ? allTeams
    : allTeams.filter((team) => user.teams?.includes(team.slug))

  return (
    <select
      {...field}
      {...props}
      value={initialValues.team_slug}
      className={touched[field.name] && errors[field.name] ? "error" : ""}
    >
      {teams.map((team, i) => (
        <option key={i} value={team.slug}>
          {team.name}
        </option>
      ))}
    </select>
  )
}

export default Team
