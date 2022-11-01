import KPIsEditor from "@/components/common/kpis-editor"

const Kpis = ({
  value,
  onChange,
}: {
  value: KPI[]
  onChange: (name: string, value: string | KPI[]) => void
}) => (
  <div className="step">
    <KPIsEditor name="kpis" kpis={value} onChange={onChange} />
  </div>
)

export default Kpis
