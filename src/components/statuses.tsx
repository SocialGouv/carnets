import useStat from "@/hooks/use-stats"
import { format } from "date-fns"

const Statuses = () => {
  const [{ teams_status: data }] = useStat()

  return (
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th>État d&apos;esprit</th>
          <th>Dernière publication</th>
          <th>Nombre de KPIs</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(
            ({ team_slug: slug, mood, last_post, kpis_count }, i: number) => (
              <tr key={i}>
                <td>{slug}</td>
                <td>{mood}</td>
                <td className="text-right">
                  {format(new Date(last_post), "dd-MM-yyyy")}
                </td>
                <td className="text-right">{kpis_count}</td>
              </tr>
            )
          )}
      </tbody>
    </table>
  )
}

export default Statuses
