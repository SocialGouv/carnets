import React from "react"
import Team from "./Team"
import Term from "./Term"
import Mood from "./Mood"
import Needs from "./Needs"
import KPIs from "./kpis/KPIs"
import Priorities from "./Priorities"

const Body = ({ handleChange, values, errors }) => (
  <div className="body">
    <div>
      <div className="team-mood">
        <Team
          value={values.team_slug}
          error={errors.team_slug}
          handleChange={handleChange}
        />
        <Mood handleChange={handleChange} value={values.mood} />
      </div>
      <KPIs
        handleChange={handleChange}
        values={values.kpis}
        errors={errors.kpis}
      />
      <Priorities
        value={values.priorities}
        error={errors.priorities}
        handleChange={handleChange}
      />
    </div>
    <div>
      <Term handleChange={handleChange} value={values.term} />
      <Needs handleChange={handleChange} value={values.needs} />
    </div>
  </div>
)

export default Body
