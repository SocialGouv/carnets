import KPI from "./KPI"
import React, { useState } from "react"

const KPIs = ({ handleChange, values, errors }) => {
  const defaultValues = [{}, {}, {}]
  const [kpis, setKpis] = useState(values || defaultValues)

  const onChange = (kpi, index) => {
    kpis[index] = kpi
    setKpis([...kpis])
    handleChange({ target: { name: "kpis", value: kpis } })
  }

  return (
    <div className="kpis">
      <label>
        KPIs*
        {kpis.map((kpi, i) => (
          <KPI
            key={i}
            index={i}
            value={kpi}
            onChange={onChange}
            error={errors && errors[i]}
          />
        ))}
      </label>
    </div>
  )
}
export default KPIs
