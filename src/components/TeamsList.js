import React from "react";
import teams from "../lib/teams";
import TeamLink from "./TeamLink";
import styled from "styled-components";

const TeamsList = () => {
  return (
    <>
      <ListWrapper className="list-group list-group-flush">
        {teams &&
          teams.map &&
          teams.map(team => (
            <li className="list-group-item" key={team.id}>
              <TeamLink id={team.id} name={team.name} />
            </li>
          ))}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.ul`
  margin: 40px 0 20px 0;
`;

export default TeamsList;
