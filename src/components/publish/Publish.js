import Header from "./Header"
import Footer from "./Footer"
import Body from "./body/Body"
import React, { useState } from "react"

const Publish = ({ post }) => {
  const [values, setValues] = useState(post || {})
  const [errors, setErrors] = useState({})

  const submit = values => {
    const options = {
      method: values.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, created_at: new Date() })
    }

    return fetch("/api/publish", options)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const errors = {
      kpis: [
        {
          name: !values.kpis || !values.kpis[0].name,
          value: !values.kpis || !values.kpis[0].value
        }
      ],
      team_slug: !values.team_slug,
      priorities: !values.priorities
    }

    if (
      errors.team_slug ||
      errors.priorities ||
      errors.kpis[0].name ||
      errors.kpis[0].value
    ) {
      setErrors(errors)
    } else {
      console.log("handleSubmit", values)
      submit(values).then(whatever => console.log("then:", whatever))
    }
  }

  const handleChange = event => {
    values[event.target.name] = event.target.value

    const errors = {
      kpis: [
        {
          name:
            Object.prototype.hasOwnProperty.call(values, "kpis") &&
            Object.prototype.hasOwnProperty.call(values.kpis[0], "name") &&
            !values.kpis[0].name,
          value:
            Object.prototype.hasOwnProperty.call(values, "kpis") &&
            Object.prototype.hasOwnProperty.call(values.kpis[0], "value") &&
            !values.kpis[0].value
        }
      ],
      team_slug:
        Object.prototype.hasOwnProperty.call(values, "team_slug") &&
        !values.team_slug.length,
      priorities:
        Object.prototype.hasOwnProperty.call(values, "priorities") &&
        !values.priorities.length
    }

    setValues({ ...values })
    setErrors(errors)
  }

  return (
    <div className="publish">
      <form onSubmit={handleSubmit}>
        <Header />
        <Body handleChange={handleChange} values={values} errors={errors} />
        <Footer />
      </form>
    </div>
  )
}
export default Publish
