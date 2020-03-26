import Header from "./Header"
import Footer from "./Footer"
import Loader from "./Loader"
import Body from "./body/Body"
import Router from "next/router"
import React, { useState } from "react"

const Publish = ({ post }) => {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState(post || {})

  const checkErrors = () =>
    !values.kpis ||
    !values.kpis[0].name ||
    !values.kpis ||
    !values.kpis[0].value ||
    !values.team_slug ||
    !values.priorities

  const trackErrors = () => {
    setErrors({
      kpis: [
        {
          name: !values.kpis || !values.kpis[0].name,
          value: !values.kpis || !values.kpis[0].value
        }
      ],
      team_slug: !values.team_slug,
      priorities: !values.priorities
    })
  }

  const submit = values => {
    const options = {
      method: values.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, created_at: new Date() })
    }

    return fetch("/api/publish", options)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    if (checkErrors()) {
      trackErrors()
      setLoading(false)
    } else {
      const response = await submit(values)
      if (response.status === 200) {
        Router.push(`/team/${values.team_slug}`)
      } else {
        console.error("ERROR:", response.statusText)
      }
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
        {loading && <Loader loading={loading} />}
      </form>
    </div>
  )
}
export default Publish
