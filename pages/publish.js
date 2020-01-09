import React from "react";

import Layout from "../src/components/Layout";
import { useFetchUser, useUser } from "../src/lib/user";

const publish = data => {
  fetch("/api/publish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
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
      <h1>Publier une nouvelle</h1>

      {loading && <p>Loading login info...</p>}

      {user && (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => publish({ hello: "world" })}
          >
            Publier
          </button>
        </div>
      )}
    </Layout>
  );
}
