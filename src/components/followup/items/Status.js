import { Field } from "formik"
import React, { useEffect, useState } from "react"
import { CheckCircle, Circle, XCircle } from "react-feather"

const statuses = [
  { color: "green", icon: CheckCircle, value: "ok" },
  { color: "crimson", icon: XCircle, value: "ko" },
  { color: "grey", icon: Circle, value: "na" },
]

const Status = ({ status: currentStatus }) => (
  <>
    {statuses.map((status, i) => (
      <React.Fragment key={i}>
        {status.value === currentStatus && (
          <status.icon color={status.color} size={16} />
        )}
      </React.Fragment>
    ))}
  </>
)

const StatusField = ({ field: { name, value }, form: { setFieldValue } }) => {
  const [currentValue, setCurrentValue] = useState(value)

  const next = (currentValue) => {
    const currentIndex = statuses.findIndex(
      (status) => status.value === currentValue
    )
    const currentStatus =
      statuses[currentIndex < statuses.length - 1 ? currentIndex + 1 : 0]

    setCurrentValue(currentStatus.value)
  }

  useEffect(() => {
    setFieldValue(name, currentValue)
  }, [currentValue, name, setFieldValue])

  return (
    <button type="button" onClick={() => next(currentValue)}>
      <Status status={currentValue} />
    </button>
  )
}

const Write = ({ item }) => (
  <>
    <div>{item.label}</div>
    <Field name={`${item.fieldIndex}.status`} component={StatusField} />
  </>
)

const Read = ({ item }) => (
  <>
    <div className={`label ${item.status}`}>{item.label}</div>
    <Status status={item.status} />
  </>
)

const StatusItem = ({ item, edit }) => (
  <div className={`item status ${item.status === null ? "disabled" : ""}`}>
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default StatusItem
