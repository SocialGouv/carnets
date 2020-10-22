import Autosave from "@components/Autosave"
import { Form, Formik } from "formik"
import React, { useEffect, useState } from "react"

import Controls from "./controls"
import Items from "./items"
import Template from "./Template"

const Followup = ({ followup = {}, slug }) => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState()

  const submit = (values) => {
    console.info("SAVE", values)
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

  useEffect(() => setData({ ...Template, ...followup }), [followup])

  return (
    <div className="followup">
      <Controls toggle={toggle} edit={edit} data={data} slug={slug} />
      <Formik
        onSubmit={onSubmit}
        initialValues={data}
        enableReinitialize={true}
      >
        {({ values }) => (
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
            {edit && <Autosave debounceMs={500} />}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Followup
