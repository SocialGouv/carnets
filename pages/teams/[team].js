import React from "react";
import styled from "styled-components";
import Layout from "../../src/components/Layout";
import { useFetchUser } from "../../src/lib/user";
import Post from "../../src/components/post/Post";
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
        Aucune nouvelle publiée pour le moment.
      </h6>
    </div>
  </NoContentWrapper>
);

const ContentWrapper = styled.div`
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }

  .posts {
    .avatar {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      border-radius: 50%;
      position: absolute;
      display: inline-block;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .name {
      margin-left: 35px;
    }

    .description {
      margin: 10px 0 20px;
    }
  }
`;

const Content = ({ posts, teams, team }) => (
  <ContentWrapper className="row">
    <dd className="col-sm-4 col-md-3">
      <Teams teams={teams} />
    </dd>
    <dd className="posts col-sm-8 col-md-9">
      <h4>
        <span
          className="avatar"
          style={{ backgroundImage: `url(${team.avatarUrl})` }}
        ></span>
        <span className="name">{team.name}</span>
      </h4>
      <div className="description">{team.description}</div>
      {posts && !posts.length ? (
        <NoContent />
      ) : (
        posts.map((post, i) => <Post post={post} key={i} />)
      )}
    </dd>
  </ContentWrapper>
);

const Page = ({ posts, teams, team }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Content posts={posts} teams={teams} team={team} />
    </Layout>
  );
};

const fetchData = async (url, req) => {
  if (req) {
    url = `http://localhost:${req.socket.localPort}${url}`;
  }
  const payload = await fetch(url);
  return await payload.json();
};

Page.getInitialProps = async ({ req, query }) => {
  const teams = await fetchData("/api/teams", req);
  const posts = await fetchData(`/api/posts/team?slug=${query.team}`, req);
  const team = teams.find(team => team.slug === query.team);
  return { posts, teams, team };
};

export default Page;
