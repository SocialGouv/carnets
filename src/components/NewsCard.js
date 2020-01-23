import React from "react";
import TeamLink from "./TeamLink";
import styled from "styled-components";

const NewsCard = ({ data }) => {
  const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

  const formatDate = date => {
    date = new Date(date);
    return `${pad(date.getDate())}/${pad(
      date.getMonth() + 1
    )}/${date.getFullYear()}`;
  };

  return (
    <>
      <CardWrapper className="card" key={data.file.name}>
        <div className="card-header">
          <div>
            <span className="mood">{data.content.mood || "😁"}</span>
            <TeamLink id={data.content.team} />
          </div>
          <span className="text-muted">{formatDate(data.content.date)}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <dl className="row">
              <dt className="col-sm-2">Priorités:</dt>
              <dd className="col-sm-10">{data.content.priorities}</dd>
            </dl>
          </li>
          <li className="list-group-item">
            <dl className="row">
              <dt className="col-sm-2">KPIs / OKR:</dt>
              <dd className="col-sm-10">{data.content.kpis}</dd>
            </dl>
          </li>
          <li className="list-group-item">
            <dl className="row">
              <dt className="col-sm-2">Échéances:</dt>
              <dd className="col-sm-10">{data.content.needs}</dd>
            </dl>
          </li>
          <li className="list-group-item">
            <dl className="row">
              <dt className="col-sm-2">Besoins:</dt>
              <dd className="col-sm-10">{data.content.term}</dd>
            </dl>
          </li>
        </ul>
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  margin-top: 40px;

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .mood {
    margin-right: 4px;
  }
`;

export default NewsCard;
