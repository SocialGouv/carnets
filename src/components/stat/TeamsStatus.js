import React from "react";
import moment from "moment";
import styled from "styled-components";

moment.locale("fr");

const TeamsStatus = ({ data, teams }) => {
  teams = teams.map(team => {
    const status = data.find(item => item.team_slug === team.slug);
    return { ...team, ...status };
  });

  return (
    <Wrapper>
      <h4>Statuts des publications</h4>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Produit</th>
            <th scope="col">Dernière publication</th>
            <th scope="col">Nombre de KPIs</th>
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
              </tr>
            ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;

  h4 {
    margin-bottom: 20px;
  }
`;

export default TeamsStatus;
