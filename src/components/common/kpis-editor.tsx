import { Kpi } from "./kpis"

const Fields = ({
  kpi,
  index,
  handleChange,
}: {
  kpi: KPI
  index: number
  handleChange: (name: "name" | "value", value: string, index: number) => void
}) => (
  <div className="fields">
    <input
      type="text"
      name="value"
      placeholder="42"
      value={kpi?.value}
      className={kpi ? "" : " disabled"}
      onChange={(e) => handleChange("value", e.target.value, index)}
    />
    <input
      name="name"
      type="text"
      value={kpi?.name}
      placeholder="My product KPI"
      className={kpi ? "" : " disabled"}
      onChange={(e) => handleChange("name", e.target.value, index)}
    />
  </div>
)

const KPIsEditor = ({
  name,
  kpis,
  handleChange,
}: {
  name: string
  kpis: KPI[]
  handleChange: (name: string, value: string | KPI[]) => void
}) => {
  const handleKpiChange = (
    name: "name" | "value",
    value: string,
    index: number
  ) => {
    if (!kpis[index]) kpis[index] = { name: "", value: "" }
    kpis[index][name] = value
    handleChange("kpis", [...kpis])
  }
  return (
    <div className="kpis-editor">
      {kpis.map((kpi, i) => (
        <div key={i} className="kpi-editor">
          <Fields kpi={kpi} handleChange={handleKpiChange} index={i} />
          <Kpi kpi={kpi} />
        </div>
      ))}
      <div className="controls">
        {kpis.length > 1 && (
          <button
            className="remove"
            onClick={(e) => {
              e.preventDefault()
              kpis.pop()
              handleChange("kpis", [...kpis])
            }}
          >
            -
          </button>
        )}
        {kpis.length < 3 && (
          <button
            className="add"
            onClick={(e) => {
              e.preventDefault()
              kpis.push({ name: "", value: "" })
              handleChange("kpis", [...kpis])
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  )
}

export default KPIsEditor
