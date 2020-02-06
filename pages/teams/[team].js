import React from "react";
import styled from "styled-components";
import Post from "../../src/components/Post";
import Layout from "../../src/components/Layout";
import Teams from "../../src/components/teams/List";

const NoContentWrapper = styled.div`
  border: none;
  border-radius: 0;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;
`;

const NoContent = () => (
  <NoContentWrapper className="card text-center bg-light">
    <div className="card-body">
      <h6 className="card-title text-muted">
        Auncune nouvelle publiée pour le moment.
      </h6>
    </div>
  </NoContentWrapper>
);

const ContentWrapper = styled.div`
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }

  .posts h4 > div {
    margin: 12px 0;
  }

  .posts h4 > small {
    font-size: 0.6em;
    line-height: 2em;
    margin-bottom: 20px;
    display: inline-block;
  }
`;

const Content = ({ posts, teams, team }) => (
  <ContentWrapper className="row">
    <dd className="col-sm-4 col-md-3">
      <Teams teams={teams} />
    </dd>
    <dd className="posts col-sm-8 col-md-9">
      <h4>
        <div className="text-muted">{team.name}</div>
        <small className="text-muted">{team.description}</small>
      </h4>
      {posts && !posts.length && <NoContent />}
      {posts && posts.map((post, i) => <Post post={post} key={i} />)}
    </dd>
  </ContentWrapper>
);

const Page = ({ posts, teams, team }) => (
  <Layout>
    <Content posts={posts} teams={teams} team={team} />
  </Layout>
);

const fetchData = async (url, req) => {
  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    url = `${protocol}://${req.headers.host}${url}`;
  }
  const payload = await fetch(url);
  return await payload.json();
};

Page.getInitialProps = async ({ req, query }) => {
  const teams = await fetchData("/api/teams", req);
  const posts = await fetchData(`/api/posts/team?slug=${query.team}`, req);
  const { node: team } = teams.find(team => team.node.slug === query.team);
  return { posts, teams, team };
};

export default Page;
