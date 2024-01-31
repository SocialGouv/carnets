import { Kpi } from "./kpis";
import KpisFields from "./kpis-fields";
import Button from "@codegouvfr/react-dsfr/Button";

const KPIsEditor = ({
  name,
  kpis,
  onChange,
}: {
  name: string;
  kpis: KPI[];
  onChange: (name: string, value: string | KPI[]) => void;
}) => {
  function handleKpiChange(
    name: "name" | "value",
    value: string,
    index: number,
  ) {
    if (!kpis[index]) kpis[index] = { name: "", value: "" };
    kpis[index][name] = value;
    onChange("kpis", [...kpis]);
  }

  function handleKpiAdd() {
    kpis.push({ name: "", value: "" });
    onChange("kpis", [...kpis]);
  }

  function handleKpiDeletion(index: number) {
    kpis.splice(index, 1);
    onChange("kpis", [...kpis]);
  }

  return (
    <div className="kpis-editor">
      <div className="kpi-editor">
        {kpis &&
          kpis.map((kpi, i) => (
            <div className="editor" key={`fields-${i}`}>
              <KpisFields kpi={kpi} index={i} handleChange={handleKpiChange} />
              <Button
                type="button"
                iconId="fr-icon-delete-line"
                title="Supprimer l'indicateur"
                priority="tertiary no outline"
                onClick={() => handleKpiDeletion(i)}
                className={`${kpis.length > 1 ? "" : "invisible"}`}
              />
            </div>
          ))}
        <div className="controls">
          {kpis && kpis.length < 3 && (
            <Button
              type="button"
              onClick={handleKpiAdd}
              iconId="fr-icon-add-line"
              priority="tertiary no outline"
            >
              Ajouter un indicateur
            </Button>
          )}
        </div>
      </div>
      <div className="preview">
        {kpis && kpis.map((kpi, i) => <Kpi key={`preview-${i}`} kpi={kpi} />)}
      </div>
    </div>
  );
};

export default KPIsEditor;
