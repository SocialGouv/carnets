import { Field } from "formik"
import React from "react"

const Write = ({ item }) =>
  console.log("item", item) || (
    <>
      <div>{item.label}</div>
      <Field name={`${item.fieldIndex}.value`} />
    </>
  )

const Read = ({ item }) => (
  <>
    <div className="label">{item.label}</div>
    <div className="text">{item.value}</div>
  </>
)

const Value = ({ item, edit }) => (
  <div className="item value">
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default Value
