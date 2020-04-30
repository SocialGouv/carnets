import React from "react"
import moment from "moment"

moment.locale("fr")

const Teams = ({ data, teams }) => {
  teams = teams.map((team) => {
    const status = data.find((item) => item.team_slug === team.slug)
    return { ...team, ...status }
  })

  return (
    <div className="teams">
      <h2>Statut par équipe</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col" width="50px">
              #
            </th>
            <th scope="col">Produit</th>
            <th scope="col">Dernière publication</th>
            <th scope="col" width="100px">
              Nombre de KPIs
            </th>
            <th scope="col" width="100px">
              État d&#39;esprit
            </th>
          </tr>
        </thead>
        <tbody>
          {teams &&
            teams.map((team, i) => (
              <tr key={i}>
                <th scope="row" width="50px">
                  {i + 1}
                </th>
                <td>{team.name}</td>
                <td>{team.last_post && moment(team.last_post).fromNow()}</td>
                <td width="100px" style={{ textAlign: "center" }}>
                  {team.kpis_count || 0}
                </td>
                <td width="100px" style={{ textAlign: "center" }}>
                  {team.mood}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Teams
