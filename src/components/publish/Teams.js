import React from "react";
import { Field } from "formik";

const Teams = ({ teams, errors, touched }) => (
  <Field
    name="team"
    as="select"
    className={`custom-select ${errors &&
      touched &&
      errors.team &&
      touched.team &&
      "is-invalid"}`}
  >
    <option value="">Equipe</option>
    {teams &&
      teams.map(({ node: team }, index) => (
        <option key={index} value={JSON.stringify(team)}>
          {team.name}
        </option>
      ))}
  </Field>
);

export default Teams;
