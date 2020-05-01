import React from "react"
import { Field } from "formik"
import { Plus, Minus } from "react-feather"

const KPIs = ({
  push,
  remove,
  form: {
    errors,
    touched,
    values: { kpis },
  },
}) => {
  const defaultKpi = { name: "", value: "" }
  const add = () => push({ ...defaultKpi })

  const checkError = (index, field) =>
    touched &&
    touched.kpis &&
    touched.kpis[index] &&
    touched.kpis[index][field] &&
    errors &&
    errors.kpis &&
    errors.kpis[index] &&
    errors.kpis[index][field]
      ? "error"
      : ""

  return (
    <div className="kpis">
      <label>
        KPIs*
        {kpis.map((kpi, index) => (
          <div key={index} className="kpi">
            <div className="index">{index + 1}</div>
            {["name", "value"].map((field, i) => (
              <Field
                key={i}
                value={kpi[field]}
                className={checkError(index, field)}
                name={`kpis.${index}.${field}`}
              />
            ))}
            {!index ? (
              <div
                tabIndex="0"
                role="button"
                className="icon"
                onClick={() => add()}
                onKeyPress={() => add()}
              >
                <Plus color="darkblue" size={18} />
              </div>
            ) : (
              <div
                tabIndex="0"
                role="button"
                className="icon"
                onClick={() => remove(index)}
                onKeyPress={() => remove(index)}
              >
                <Minus color="crimson" size={18} />
              </div>
            )}
          </div>
        ))}
      </label>
    </div>
  )
}

export default KPIs
