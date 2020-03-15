import Team from "./Team"
import Term from "./Term"
import Needs from "./Needs"
import Priorities from "./Priorities"
import React, { useState } from "react"

const Publish = ({ post }) => {
  const [values, setValues] = useState(post)

  const handleSubmit = event => {
    event.preventDefault()
    console.log("handleSubmit", values)
  }

  const handleChange = event => {
    values[event.target.name] = event.target.value
    setValues({ ...values })
  }

  return (
    <div className="publish">
      <form onSubmit={handleSubmit}>
        <Team handleChange={handleChange} value={values.team_slug} />
        <Priorities handleChange={handleChange} value={values.priorities} />
        <Term handleChange={handleChange} value={values.term} />
        <Needs handleChange={handleChange} value={values.needs} />
        <input type="submit" value="Publier" />
      </form>
    </div>
  )
}
export default Publish
