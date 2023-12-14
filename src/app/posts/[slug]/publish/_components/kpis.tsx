import KPIsEditor from "@/components/common/kpis-editor";

export interface KPI {
  id?: string;
  name: string;
  value: string;
}

export default function Kpis({
  value,
  visible,
  onChange,
}: {
  value: KPI[];
  visible?: boolean;
  onChange: (name: string, value: string | KPI[]) => void;
}) {
  return (
    // <div className={`step ${visible ? "" : "hidden"}`}>
    <div className="step">
      <KPIsEditor name="kpis" kpis={value} onChange={onChange} />
    </div>
  );
}
