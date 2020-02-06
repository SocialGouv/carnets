import React from "react";
import TeamLink from "./teams/Link";
import styled from "styled-components";

const PostWrapper = styled.div`
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

  .card-header .date {
    font-size: 0.6em;
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

  .kpi {
    flex: 1;
    padding: 5px;
    border-radius: 4px;
    margin-right: 10px;
    border: 1px solid #efefef;
  }

  .kpi:last-child {
    margin-right: 0;
  }

  .kpi .name {
    font-size: 0.8em;
    text-align: center;
  }

  .kpi .value {
    font-weight: bold;
  }

  .block {
    padding: 10px;
    margin: 10px 0;
    background-color: #efefef;
  }

  .block:last-child {
    margin: 10px 0 0;
  }

  .block p {
    margin: 0;
    font-size: 0.8em;
  }
`;

const Post = ({ post, className }) => {
  console.log("POST", post);
  const pad = num => (parseInt(num, 10) < 10 ? "0" + parseInt(num, 10) : num);

  const formatDate = date => {
    date = new Date(date);
    return `${pad(date.getDate())}/${pad(
      date.getMonth() + 1
    )}/${date.getFullYear()}`;
  };

  return (
    <PostWrapper className={`card ${className}`}>
      <div className="card-header">
        <div style={{ display: "flex" }}>
          <span className="mood">{post.content.mood || "😁"}</span>
          <TeamLink
            slug={post.content.team.slug}
            name={post.content.team.name}
          />
        </div>
        <span className="date text-muted">{formatDate(post.content.date)}</span>
      </div>
      <div className="card-body">
        <div className="kpis d-flex">
          {post &&
            post.content &&
            post.content.kpis &&
            post.content.kpis.map((kpi, i) => (
              <>
                {kpi.name && kpi.value && (
                  <div key={i} className="kpi d-flex flex-column">
                    <div className="value d-flex flex-fill justify-content-center">
                      {kpi.value}
                    </div>
                    <div className="name d-flex flex-fill justify-content-center">
                      {kpi.name}
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>

        {post.content.priorities && (
          <div className="block">
            <h6 className="text-muted">Priorités:</h6>
            <p>{post.content.priorities}</p>
          </div>
        )}

        {post.content.term && (
          <div className="block">
            <h6 className="text-muted">Échéances:</h6>
            <p>{post.content.term}</p>
          </div>
        )}

        {post.content.needs && (
          <div className="block">
            <h6 className="text-muted">Besoins:</h6>
            <p>{post.content.needs}</p>
          </div>
        )}
      </div>
      {/*<ul className="list-group list-group-flush">
        <li className="list-group-item">
          <dl className="row">
            <dt className="col-md-2 col-sm-3">Priorités:</dt>
            <dd className="col-md-10 col-sm-9">{post.content.priorities}</dd>
          </dl>
        </li>
        <li className="list-group-item">
          <dl className="row">
            <dt className="col-md-2 col-sm-3">KPIs / OKR:</dt>
            <dd className="col-md-10 col-sm-9">{post.content.kpis}</dd>
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
      </ul>*/}
    </PostWrapper>
  );
};

export default Post;
