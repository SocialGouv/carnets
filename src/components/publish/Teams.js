import React from "react";
import { Field } from "formik";

const Teams = ({ teams, errors, touched }) => (
  <Field
    name="team_slug"
    as="select"
    className={`custom-select ${errors &&
      touched &&
      errors.team_slug &&
      touched.team_slug &&
      "is-invalid"}`}
  >
    <option value="">Equipe</option>
    {teams &&
      teams.map((team, index) => (
        <option key={index} value={team.slug}>
          {team.slug}
        </option>
      ))}
  </Field>
);

export default Teams;
