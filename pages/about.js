import React from "react";

import Layout from "../src/components/Layout";
import { useFetchUser, useUser } from "../src/lib/user";

const publish = data => {
  fetch("/api/publish", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .then(console.log)
    .catch(console.log);
};

export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>

      {loading && <p>Loading login info...</p>}
    </Layout>
  );
}
