import React from "react"
import moment from "moment"

moment.locale("fr")

const Teams = ({ data, teams }) => {
  teams = teams.map(team => {
    const status = data.find(item => item.team_slug === team.slug)
    return { ...team, ...status }
  })

  return (
    <>
      <h4>Statuts des publications</h4>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Produit</th>
            <th scope="col">Dernière publication</th>
            <th scope="col">Nombre de KPIs</th>
            <th scope="col">État d&#39;esprit</th>
          </tr>
        </thead>
        <tbody>
          {teams &&
            teams.map((team, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{team.name}</td>
                <td>{team.last_post && moment(team.last_post).fromNow()}</td>
                <td>{team.kpis_count || 0}</td>
                <td>{team.mood}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Teams
