import { useUser } from "@lib/user"
import { Form, Formik } from "formik"
import Router from "next/router"
import React, { useState } from "react"

import Body from "./body/Body"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"
import Message from "./Message"

const Publish = ({ post }) => {
  const user = useUser() || {}
  const { teams = [] } = user
  const [team = ""] = teams
  const [message, setMessage] = useState()

  const submit = (values) => {
    const { id } = values
    const options = {
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
      method: id ? "PUT" : "POST",
    }
    return fetch(`/api/posts${id ? `/${id}` : ""}`, options)
  }

  const initialValues = post || {
    kpis: [{ name: "", value: "" }],
    mood: "😐",
    needs: "",
    priorities: "",
    team_slug: team,
    term: "",
  }

  const validate = (values) => {
    const errors = {}
    if (!values.team_slug) {
      errors.team_slug = "Required"
    }
    if (!values.priorities) {
      errors.priorities = "Required"
    }
    if (!values.kpis[0].name) {
      if (!errors.kpis) errors.kpis = [{}]
      errors.kpis[0].name = "KPI name required"
    }
    if (!values.kpis[0].value) {
      if (!errors.kpis) errors.kpis = [{}]
      errors.kpis[0].value = "KPI value required"
    }
    return errors
  }

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await submit(values)
    if (response.status === 200) {
      Router.push(`/team/${values.team_slug}`)
    } else {
      setMessage(response.statusText)
      console.error("ERROR:", response.statusText)
    }
    setSubmitting(false)
  }

  return (
    <div className="publish">
      <Formik
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {({ isSubmitting }) => (
          <Form>
            <Header />
            <Body />
            <Footer isSubmitting={isSubmitting} />
            {isSubmitting && <Loader loading={isSubmitting} />}
            {message && <Message message={message} />}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Publish
