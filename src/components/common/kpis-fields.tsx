import Input from "@codegouvfr/react-dsfr/Input";
import Button from "@codegouvfr/react-dsfr/Button";

export default function KpisFields({
  kpi,
  index,
  handleChange,
}: {
  kpi: KPI;
  index: number;
  handleChange: (name: "name" | "value", value: string, index: number) => void;
}) {
  return (
    <div className="fields">
      <div className="label">{`Indicateur #${index + 1}`}</div>
      <div className="inputs">
        <Input
          hideLabel={true}
          label="nom de l'indicateur"
          nativeInputProps={{
            name: "name",
            type: "text",
            value: kpi?.name,
            className: kpi ? "" : " disabled",
            placeholder: "Intitulé de l'indicateur",
            onChange: (e) => handleChange("name", e.target.value, index),
          }}
        />
        <Input
          hideLabel={true}
          label="valeur de l'indicateur"
          nativeInputProps={{
            name: "value",
            placeholder: "Valeur de l'indicateur",
            value: kpi?.value,
            onChange: (e) => handleChange("value", e.target.value, index),
          }}
        />
      </div>
    </div>
  );
}
