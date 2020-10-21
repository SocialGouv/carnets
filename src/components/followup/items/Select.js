import { Field } from "formik"
import React, { useState } from "react"

import Items from "."
import Value from "./Value"

const Write = ({ item }) => {
  const [selected, setSelected] = useState(item.selected)

  const onChange = (event) => {
    const value = event.target.value
    const index = item.options.findIndex((option) => option.name === value)
    setSelected((item.selected = index))
  }

  return (
    <>
      <div className="label">
        {item.label}
        <Field
          as="select"
          onChange={onChange}
          name={`${item.fieldIndex}.options.${selected}.name`}
        >
          {item.options.map((option, i) => (
            <option key={i} value={option.name}>
              {option.name}
            </option>
          ))}
        </Field>
      </div>
      <>
        {item.options[selected].items && (
          <Items items={item.options[selected].items} edit={true} />
        )}
      </>
    </>
  )
}

const Read = ({ item }) => (
  <>
    <Value
      item={{ ...item, value: item.options[item.selected].name }}
      edit={false}
    />
    {item.options[item.selected].items && (
      <Items items={item.options[item.selected].items} edit={false} />
    )}
  </>
)

const Select = ({ item, edit }) => (
  <div className={`item select ${edit ? "edit" : ""}`}>
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default Select
