import { Field, FieldArray } from "formik"
import React from "react"

import KPIs from "./KPIs"
import Mood from "./Mood"
import Team from "./Team"
import Textfield from "./Textfield"

const Body = () => (
  <div className="body">
    <div className="team-mood">
      <Field name="team_slug" component={Team} />
      <Field name="mood" component={Mood} />
    </div>
    <FieldArray name="kpis" component={KPIs} />
    <Field name="priorities" label="Priorités*" component={Textfield} />
    <Field name="term" label="Evénements / Echéances" component={Textfield} />
    <Field name="needs" label="Besoins" component={Textfield} />
  </div>
)

export default Body
