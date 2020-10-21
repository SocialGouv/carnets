import Autosave from "@components/Autosave"
import { Form, Formik } from "formik"
import React, { useState } from "react"

import Controls from "./controls"
import Items from "./items"
import Template from "./Template"

const Followup = ({ followup, slug }) => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState({ ...Template, ...followup })

  const submit = (values) => {
    const options = {
      body: JSON.stringify({ data: values.data }),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    }
    return fetch(`/api/teams/${slug}/followup`, options)
  }

  const onSubmit = async (data) => {
    setData(data)
    await submit(data)
  }

  const toggle = () => setEdit(!edit)

  return (
    <div className="followup">
      <Controls toggle={toggle} edit={edit} data={data} />
      <Formik onSubmit={onSubmit} initialValues={data}>
        {({ values }) => (
          <Form>
            {values.data.map((section, i) => (
              <div key={i} className="section">
                <div key={i} className="section-wrapper">
                  <h4>{section.title}</h4>
                  <Items items={section.items} edit={edit} />
                </div>
              </div>
            ))}
            <Autosave debounceMs={500} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Followup
