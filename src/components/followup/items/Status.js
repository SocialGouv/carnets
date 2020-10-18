import { Field } from "formik"
import React from "react"
import { CheckCircle, XCircle } from "react-feather"

const Status = ({ status }) => (
  <>
    {status === false && <XCircle color="crimson" size={16} />}
    {status === true && <CheckCircle color="green" size={16} />}
    {/* {status === null && <CheckCircle color="#dfe2e5" size={16} />} */}
  </>
)

const Write = ({ item }) => (
  <>
    <div>{item.label}</div>
    <Field type="checkbox" name={`${item.fieldIndex}.status`} />
  </>
)

const Read = ({ item }) => (
  <>
    <div className="label">{item.label}</div>
    <Status status={item.status} />
  </>
)

const StatusItem = ({ item, edit }) => (
  <div className={`item status ${item.status === null ? "disabled" : ""}`}>
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default StatusItem
