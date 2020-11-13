import Autosave from "@components/Autosave"
import merge from "@lib/merge"
import { Form, Formik } from "formik"
import React, { useEffect, useState } from "react"

import Controls from "./controls"
import Items from "./items"
import Template from "./Template"

const Followup = ({ followup = {}, slug }) => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState()

  const toggle = () => setEdit(!edit)

  const submit = (values) => {
    const options = {
      body: JSON.stringify({ data: values.data }),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    }
    return fetch(`/api/teams/${slug}/followup`, options)
  }

  const onSubmit = async (values) => {
    // console.info("!!! SAVE !!!", values)
    const result = await submit(values)
    const followup = await result.json()
    setData(followup)
    return true
  }

  useEffect(() => setData(merge(Template, followup)), [followup])

  return (
    <div className="followup">
      <Formik
        onSubmit={onSubmit}
        initialValues={data}
        enableReinitialize={true}
      >
        {({ dirty, values, isSubmitting }) => (
          <>
            <Controls
              edit={edit}
              data={data}
              slug={slug}
              toggle={toggle}
              isSubmitting={isSubmitting}
            />
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
              {/* {edit && dirty && <button type="submit">SAVE</button>} */}
            </Form>
          </>
        )}
      </Formik>
    </div>
  )
}

export default Followup
