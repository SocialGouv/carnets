import React from "react";
import moment from "moment";
import TeamLink from "./teams/Link";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

moment.locale("fr");

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

  .mood {
    margin-right: 4px;
  }

  dt {
    white-space: nowrap;
  }

  .kpi {
    flex: 1;
    padding: 5px;
    border-radius: 4px;
    margin-right: 10px;
    border: 1px solid rgba(28, 28, 28, 0.125);
  }

  .kpi:last-child {
    margin-right: 0;
  }

  .kpi .name {
    font-size: 0.8em;
    text-align: center;
  }

  .kpi .value {
    font-size: 1.6em;
    font-weight: bold;
  }

  .block {
    padding: 10px;
    margin: 10px 0;
    background-color: #f8f9fa;
  }

  .block:last-child {
    margin: 10px 0 0;
  }

  .block .text {
    margin: 0;
    padding: 10px;
    font-size: 0.8em;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px solid rgba(28, 28, 28, 0.1);
  }

  .block .text p:last-child {
    margin-bottom: 0;
  }

  .card-footer {
    text-align: right;
  }
`;

const Post = ({ post, className }) => {
  const lineBreak = str => str.replace(/(?:\r\n|\r|\n)/g, "  \n");

  return (
    <PostWrapper className={`card ${className}`}>
      <div className="card-header">
        <div style={{ display: "flex" }}>
          <span className="mood">{post.mood || "😁"}</span>
          <TeamLink slug={post.team_slug} name={post.team_slug} />
        </div>
      </div>
      <div className="card-body">
        <div className="kpis d-flex">
          {post &&
            post.kpis &&
            post.kpis.map((kpi, i) => (
              <React.Fragment key={i}>
                {kpi.name && kpi.value && (
                  <div className="kpi d-flex flex-column">
                    <div className="value d-flex flex-fill justify-content-center">
                      {kpi.value}
                    </div>
                    <div className="name d-flex flex-fill justify-content-center">
                      {kpi.name}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
        </div>

        {post.priorities && (
          <div className="block">
            <h6 className="text-muted">Priorités:</h6>
            <div className="text">
              <ReactMarkdown source={lineBreak(post.priorities)} />
            </div>
          </div>
        )}

        {post.term && (
          <div className="block">
            <h6 className="text-muted">Échéances / Événements:</h6>
            <div className="text">
              <ReactMarkdown source={lineBreak(post.term)} />
            </div>
          </div>
        )}

        {post.needs && (
          <div className="block">
            <h6 className="text-muted">Besoins:</h6>
            <div className="text">
              <ReactMarkdown source={lineBreak(post.needs)} />
            </div>
          </div>
        )}
      </div>
      <div className="card-footer text-muted">
        <span className="date text-muted">
          {moment(post.created_at).fromNow()}&nbsp;par&nbsp;
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${post.author}`}
        >
          {post.author}
        </a>
      </div>
    </PostWrapper>
  );
};

export default Post;
