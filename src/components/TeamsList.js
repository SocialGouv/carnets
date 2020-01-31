import React from "react";
import teams from "../lib/teams";
import TeamLink from "./TeamLink";
import styled from "styled-components";

const TeamsList = ({ className }) => (
  <ul className={`list-group list-group-flush ${className}`}>
    <li className="list-group-item">
      <h4 className="text-muted">Produits</h4>
    </li>
    {teams &&
      teams.map &&
      teams.map(team => (
        <li className="list-group-item" key={team.id}>
          <TeamLink id={team.id} name={team.name} />
        </li>
      ))}
  </ul>
);

const StyledTeamsList = styled(TeamsList)`
  margin: 0px 0 20px 0;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  li:first-child {
    background-color: #f8f9fa !important;
  }

  h4 {
    margin: 0;
  }
`;

export default StyledTeamsList;
