import React from "react"
import { Field, FieldArray } from "formik"

import Team from "./Team"
import Mood from "./Mood"
import KPIs from "./KPIs"
import Textfield from "./Textfield"

const Body = () => (
  <div className="body">
    <div>
      <div className="team-mood">
        <Field name="team_slug" component={Team} />
        <Field name="mood" component={Mood} />
      </div>
      <FieldArray name="kpis" component={KPIs} />
      <Field name="priorities" label="Priorités" component={Textfield} />
    </div>
    <div>
      <Field name="term" label="Evénements / Echéances" component={Textfield} />
      <Field name="needs" label="Besoins" component={Textfield} />
    </div>
  </div>
)

export default Body
