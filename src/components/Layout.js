import React from "react";
import Head from "next/head";

import Nav from "./Nav";

import { UserProvider } from "../lib/user";

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>@SocialGouv/carnets</title>
    </Head>

    <Nav />

    <div className="container" style={{ paddingTop: 40 }}>
      {children}
    </div>
  </UserProvider>
);

export default Layout;
