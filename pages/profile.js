import React from "react";

import auth0 from "../src/lib/auth0";
import { fetchUser } from "../src/lib/user";
import Layout from "../src/components/Layout";
import withAuth from "../src/lib/withAuth";

const Profile = ({ user }) => (
  <Layout user={user}>
    <h1>Profile</h1>

    <div>
      <h3>Profile (server rendered)</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  </Layout>
);

export default withAuth(Profile);
