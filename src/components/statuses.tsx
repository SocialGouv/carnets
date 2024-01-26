import { ReactNode } from "react";
import { format } from "date-fns";
import { Table } from "@codegouvfr/react-dsfr/Table";
import type { TeamsStatus } from "@/actions/get-stats";

export default function Statuses({ statuses }: { statuses?: TeamsStatus[] }) {
  console.log("statuses", statuses?.length);

  const headers = [
    "Produit",
    "État d'esprit",
    "Dernière publication",
    "Nombre de KPIs",
  ];

  const data = statuses?.map(({ kpis_count, last_post, mood, team_slug }) => [
    team_slug,
    mood,
    format(new Date(last_post), "dd-MM-yyyy"),
    kpis_count,
  ]) as ReactNode[][];

  return <Table fixed data={data} headers={headers} noCaption />;
}
