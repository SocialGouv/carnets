const KPIs = ({ kpis }: { kpis: KPI[] }) => (
  <div className="kpis">
    {kpis.map((kpi, i: number) => (
      <div key={i} className="kpi">
        <div className="value">{kpi.value}</div>
        <div className="name">{kpi.name}</div>
      </div>
    ))}
  </div>
)

export default KPIs
