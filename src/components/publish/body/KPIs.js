import React from "react"
import { Field } from "formik"

const KPIs = ({
  push,
  remove,
  form: {
    errors,
    touched,
    values: { kpis }
  }
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
                &#43;
              </div>
            ) : (
              <div
                tabIndex="0"
                role="button"
                className="icon"
                onClick={() => remove(index)}
                onKeyPress={() => remove(index)}
              >
                &#8722;
              </div>
            )}
          </div>
        ))}
      </label>
    </div>
  )
}

export default KPIs
