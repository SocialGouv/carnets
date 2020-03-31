import React from "react"
import { Field, FieldArray } from "formik"

import Team from "./Team"
import Term from "./Term"
import Mood from "./Mood"
import KPIs from "./KPIs"
import Needs from "./Needs"
import Priorities from "./Priorities"

const Body = () => (
  <div className="body">
    <div>
      <div className="team-mood">
        <Field name="team_slug" component={Team} />
        <Field name="mood" component={Mood} />
      </div>
      <FieldArray name="kpis" component={KPIs} />
      <Field name="priorities" component={Priorities} />
    </div>
    <div>
      <Field name="term" as={Term} />
      <Field name="needs" as={Needs} />
    </div>
  </div>
)

export default Body
