import Header from "./Header"
import Footer from "./Footer"
import Loader from "./Loader"
import Body from "./body/Body"
import Message from "./Message"
import Router from "next/router"
import React, { useState } from "react"
import { Formik, Form } from "formik"

const Publish = ({ post }) => {
  const [message, setMessage] = useState()

  const submit = values => {
    const options = {
      method: values.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, created_at: new Date() })
    }
    return fetch("/api/publish", options)
  }

  const initialValues = post || {
    term: "",
    needs: "",
    mood: "😐",
    team_slug: "",
    priorities: "",
    kpis: [{ name: "", value: "" }]
  }

  const validate = values => {
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
