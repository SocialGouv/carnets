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
      <h1>Next.js and Auth0 Example</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <React.Fragment>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <h4>Rendered user info on the client</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </React.Fragment>
      )}
      <button onClick={() => publish({ pouet: 42 })}>CLICK</button>
    </Layout>
  );
}
