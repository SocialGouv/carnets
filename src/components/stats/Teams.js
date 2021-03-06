import Weather from "@components/Weather"
import moment from "moment/moment"
import Link from "next/link"
import React from "react"

moment.locale("fr")

const getClass = (team) => {
  const date = moment(team.last_post)
  const lastTuesday = moment().day(moment().day() >= 2 ? 2 : -5)
  const twoWeeksAgo = moment(lastTuesday).day(-5)
  const threeWeeksAgo = moment(twoWeeksAgo).day(-5)
  return team.last_post && date.isAfter(twoWeeksAgo)
    ? "ok"
    : team.last_post && date.isAfter(threeWeeksAgo)
    ? "warning"
    : "error"
}

const Labels = () => (
  <div className="labels">
    <div className="label">
      <div className="color valid" />
      <div className="description">A jour</div>
    </div>
    <div className="label">
      <div className="color warning" />
      <div className="description">Mise à jour récemment</div>
    </div>
    <div className="label">
      <div className="color important" />
      <div className="description">Pas de publication récente</div>
    </div>
  </div>
)

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
                <td className={getClass(team)}>
                  <Link href="/team/[slug]" as={`/team/${team.slug}`}>
                    <a>{team.name}</a>
                  </Link>
                </td>
                <td>{team.last_post && moment(team.last_post).fromNow()}</td>
                <td width="100px" style={{ textAlign: "center" }}>
                  {team.kpis_count || 0}
                </td>
                <td width="100px" style={{ textAlign: "center" }}>
                  <Weather status={team.mood} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Labels />
    </div>
  )
}

export default Teams
