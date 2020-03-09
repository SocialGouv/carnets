import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";
import PostsStat from "../src/components/stat/PostsStat";
import TeamsStatus from "../src/components/stat/TeamsStatus";

const Page = ({ postsStat, teamsStatus, teams }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      {loading ? (
        <p>Loading login info...</p>
      ) : (
        <>
          <PostsStat data={postsStat} />
          <TeamsStatus teams={teams} data={teamsStatus} />
        </>
      )}
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

Page.getInitialProps = async ({ req }) => {
  const teams = await fetchData("/api/teams", req);
  const { postsStat, teamsStatus } = await fetchData("/api/stat", req);
  return { postsStat, teamsStatus, teams };
};

export default Page;
