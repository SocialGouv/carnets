import { Field } from "formik"
import React from "react"
import { Minus, Plus } from "react-feather"

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
                name={`kpis.${index}.${field}`}
                className={checkError(index, field)}
                placeholder={field === "name" ? "KPI" : "description"}
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
