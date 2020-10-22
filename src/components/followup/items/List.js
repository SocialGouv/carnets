import { Field, FieldArray } from "formik"
import React from "react"
import { Minus, Plus } from "react-feather"

const Write = ({ item }) => (
  <FieldArray
    name={`${item.fieldIndex}.list`}
    render={(arrayHelpers) => (
      <>
        <div className="label">
          {item.label}
          <button
            type="button"
            className="button no-text"
            onClick={() => arrayHelpers.push("")}
          >
            <Plus size={12} />
          </button>
        </div>
        <div className="entries">
          {item.list.map((entry, i) => (
            <div key={i} className="entry">
              <Field type="text" name={`${item.fieldIndex}.list.${i}`} />
              <button
                type="button"
                className="button important no-text"
                onClick={() => arrayHelpers.remove(i)}
              >
                <Minus size={12} />
              </button>
            </div>
          ))}
        </div>
      </>
    )}
  />
)

const Read = ({ item }) => (
  <>
    <div className="label">{item.label}</div>
    <ul className="list">
      {item.list.map((entry, i) => (
        <li key={i} className="entry">
          {entry}
        </li>
      ))}
    </ul>
  </>
)

const List = ({ item, edit }) => (
  <div className={`item list ${edit ? "edit" : ""}`}>
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default List
