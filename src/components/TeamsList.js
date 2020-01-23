import React from "react";
import teams from "../lib/teams";
import TeamLink from "./TeamLink";

const TeamsList = () => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {teams &&
          teams.map &&
          teams.map(team => (
            <li className="list-group-item" key={team.id}>
              <TeamLink id={team.id} name={team.name} />
            </li>
          ))}
      </ul>
      <style jsx>{`
        .list-group {
          margin: 40px 0 20px 0;
        }
      `}</style>
    </>
  );
};

export default TeamsList;
