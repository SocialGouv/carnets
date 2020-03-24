import React, { useState } from "react"

const KPI = ({ onChange, value, index, error }) => {
  const [kpi, setKpi] = useState(value)

  const handleChange = event => {
    kpi[event.target.name] = event.target.value
    setKpi({ ...kpi })
    onChange(kpi, index)
  }

  return (
    <div className="kpi">
      <div className="index">{index + 1}</div>
      <input
        type="text"
        name="name"
        value={kpi.name || ""}
        placeholder="libellé"
        onChange={handleChange}
        className={`${error && error.name ? "error" : ""}`}
      />
      <input
        type="text"
        name="value"
        value={kpi.value || ""}
        placeholder="valeur"
        onChange={handleChange}
        className={`${error && error.value ? "error" : ""}`}
      />
    </div>
  )
}
export default KPI
