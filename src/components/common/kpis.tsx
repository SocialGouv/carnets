export interface KPI {
  id?: string;
  name: string;
  value: string;
}

export const Kpi = ({ kpi }: { kpi: KPI }) => (
  <div className="kpi">
    <div className="value">{kpi?.value}</div>
    <div className="name">{kpi?.name}</div>
  </div>
);

const KPIs = ({ kpis }: { kpis: KPI[] }) => (
  <div className="kpis">
    {kpis.map((kpi, i: number) => (
      <Kpi key={i} kpi={kpi} />
    ))}
  </div>
);

export default KPIs;
