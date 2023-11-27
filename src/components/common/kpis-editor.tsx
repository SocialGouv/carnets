import { Kpi } from "./kpis";

// duplicated
interface KPI {
  id?: string;
  name: string;
  value: string;
}

const Fields = ({
  kpi,
  index,
  handleChange,
}: {
  kpi: KPI;
  index: number;
  handleChange: (name: "name" | "value", value: string, index: number) => void;
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
);

const KPIsEditor = ({
  name,
  kpis,
  onChange,
}: {
  name: string;
  kpis: KPI[];
  onChange: (name: string, value: string | KPI[]) => void;
}) => {
  const handleKpiChange = (
    name: "name" | "value",
    value: string,
    index: number,
  ) => {
    if (!kpis[index]) kpis[index] = { name: "", value: "" };
    kpis[index][name] = value;
    onChange("kpis", [...kpis]);
  };
  return (
    <div className="kpis-editor">
      {kpis &&
        kpis.map((kpi, i) => (
          <div key={i} className="kpi-editor">
            <Fields kpi={kpi} handleChange={handleKpiChange} index={i} />
            <Kpi kpi={kpi} />
          </div>
        ))}
      <div className="controls">
        {kpis && kpis.length > 1 && (
          <button
            className="remove"
            onClick={(e) => {
              e.preventDefault();
              kpis.pop();
              onChange("kpis", [...kpis]);
            }}
          >
            -
          </button>
        )}
        {kpis && kpis.length < 3 && (
          <button
            className="add"
            onClick={(e) => {
              e.preventDefault();
              kpis.push({ name: "", value: "" });
              onChange("kpis", [...kpis]);
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default KPIsEditor;
