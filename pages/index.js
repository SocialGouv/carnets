import React from "react";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import Post from "../src/components/Post";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";
import Teams from "../src/components/teams/List";

const ContentWrapper = styled.div`
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

const Content = ({ posts, teams }) => (
  <ContentWrapper className="row">
    <dd className="col-md-3 col-sm-4">
      <Teams teams={teams} />
    </dd>
    <dd className="col-md-9 col-sm-8">
      {posts &&
        posts.map &&
        posts.map(post => <Post post={post} key={post.name} />)}
    </dd>
  </ContentWrapper>
);

const Page = ({ posts, teams }) => {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      {loading ? <p>Chargement...</p> : <Content posts={posts} teams={teams} />}
    </Layout>
  );
};

const fetchData = async (url, req) => {
  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    url = `${protocol}://${req.headers.host}${url}`;
  }
  const payload = await fetch(url);
  return await payload.json();
};

Page.getInitialProps = async ({ req }) => {
  const posts = await fetchData("/api/posts/latest", req);
  const teams = await fetchData("/api/teams", req);
  return { posts, teams };
};

export default Page;
