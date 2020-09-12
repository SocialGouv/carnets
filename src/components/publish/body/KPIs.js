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
  const add = () => kpis.length < 4 && push({ ...defaultKpi })

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
        KPIs* <span>(1 minimum, 4 maximum)</span>
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
            <div className="control">
              {!index ? (
                <div
                  tabIndex="0"
                  role="button"
                  className="button no-text"
                  onClick={() => add()}
                  onKeyPress={() => add()}
                >
                  <Plus size={12} />
                </div>
              ) : (
                <div
                  tabIndex="0"
                  role="button"
                  className="button important no-text"
                  onClick={() => remove(index)}
                  onKeyPress={() => remove(index)}
                >
                  <Minus size={12} />
                </div>
              )}
            </div>
          </div>
        ))}
      </label>
    </div>
  )
}

export default KPIs
