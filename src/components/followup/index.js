import Autosave from "@components/Autosave"
import { Form, Formik } from "formik"
import React, { useEffect, useState } from "react"

import Controls from "./controls"
import Items from "./items"
import Template from "./Template"

const Followup = ({ followup = {}, slug }) => {
  console.log("FOLLOWUP::create")
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState()

  const submit = (values) => {
    console.log("SAVE", values)
    const options = {
      body: JSON.stringify({ data: values.data }),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    }
    return fetch(`/api/teams/${slug}/followup`, options)
  }

  const onSubmit = async (values, { resetForm }) => {
    console.log("FOLLOWUP::submit start")
    console.log(
      "Schema d'architecture technique:",
      values.data[0].items[1].status
    )
    console.log("Matrice des flux:", values.data[0].items[2].status)
    const result = await submit(values)
    const followup = await result.json()
    console.log("FOLLOWUP::submit end")
    console.log(
      "Schema d'architecture technique:",
      followup.data[0].items[1].status
    )
    console.log("Matrice des flux:", followup.data[0].items[2].status)
    // resetForm(followup)
    setData(followup)
    // return Promise.resolve()
    return true
  }

  const toggle = () => setEdit(!edit)

  useEffect(() => {
    console.log("FOLLOWUP::render")
  }, [])
  useEffect(
    () =>
      console.log("FOLLOWUP::change") || setData({ ...Template, ...followup }),
    [followup]
  )

  return (
    <div className="followup">
      <Controls toggle={toggle} edit={edit} data={data} slug={slug} />
      <Formik
        onSubmit={onSubmit}
        initialValues={data}
        enableReinitialize={true}
      >
        {({ dirty, values }) => (
          <Form>
            {values &&
              values.data.map((section, i) => (
                <div key={i} className="section">
                  <div key={i} className="section-wrapper">
                    <h4>{section.title}</h4>
                    <Items items={section.items} edit={edit} />
                  </div>
                </div>
              ))}
            {edit && <Autosave debounceMs={2000} />}
            {edit && dirty && <button type="submit">SAVE</button>}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Followup
