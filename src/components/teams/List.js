import React from "react";
import Link from "./Link";
import styled from "styled-components";

const TeamsList = ({ teams, className }) => (
  <ul className={`list-group list-group-flush ${className}`}>
    <li className="list-group-item">
      <h4 className="text-muted">Produits</h4>
    </li>
    {teams &&
      teams.map &&
      teams.map(team => (
        <li
          key={team.slug}
          className="list-group-item d-flex align-items-center"
        >
          <div
            className="avatar"
            style={{ backgroundImage: `url(${team.avatarUrl})` }}
          ></div>
          <Link slug={team.slug} name={team.name} />
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

  .avatar {
    width: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }

  h4 {
    margin: 0;
  }

  a {
    overflow: hidden;
    margin-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default StyledTeamsList;
