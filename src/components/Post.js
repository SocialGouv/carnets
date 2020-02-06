import React from "react";
import TeamLink from "./teams/Link";
import styled from "styled-components";

const Post = ({ post, className }) => {
  const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

  const formatDate = date => {
    date = new Date(date);
    return `${pad(date.getDate())}/${pad(
      date.getMonth() + 1
    )}/${date.getFullYear()}`;
  };

  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <div style={{ display: "flex" }}>
          <span className="mood">{post.content.mood || "😁"}</span>
          <TeamLink slug={post.content.team} name={post.content.team} />
        </div>
        <span className="text-muted">{formatDate(post.content.date)}</span>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <dl className="row">
            <dt className="col-md-2 col-sm-3">Priorités:</dt>
            <dd className="col-md-10 col-sm-9">{post.content.priorities}</dd>
          </dl>
        </li>
        <li className="list-group-item">
          <dl className="row">
            <dt className="col-md-2 col-sm-3">KPIs / OKR:</dt>
            {/*<dd className="col-md-10 col-sm-9">{post.content.kpis}</dd>*/}
          </dl>
        </li>
        <li className="list-group-item">
          <dl className="row">
            <dt className="col-md-2 col-sm-3">Échéances:</dt>
            <dd className="col-md-10 col-sm-9">{post.content.term}</dd>
          </dl>
        </li>
        <li className="list-group-item">
          <dl className="row">
            <dt className="col-md-2 col-sm-3">Besoins:</dt>
            <dd className="col-md-10 col-sm-9">{post.content.needs}</dd>
          </dl>
        </li>
      </ul>
    </div>
  );
};

const StyledPost = styled(Post)`
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  .card-header {
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    line-height: 28px;
  }
  .mood {
    margin-right: 4px;
  }
  dt {
    white-space: nowrap;
  }
  .text-muted {
    font-size: 16px;
  }
  .team {
    font-size: 24px;
  }
`;

export default StyledPost;
