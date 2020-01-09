import React from "react";
import fetch from "isomorphic-unfetch";

import Layout from "../src/components/Layout";
import { useFetchUser, useUser } from "../src/lib/user";

export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>

      {loading && <p>Loading login info...</p>}
    </Layout>
  );
}

Home.getInitialProps = async (req, res) => {
  console.log("req, res", req, res);
  fetch(`/api/fetch?year=2020&month=01`).then(r => r.json());
};
