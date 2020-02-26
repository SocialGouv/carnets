import React from "react";
import Head from "next/head";

import Nav from "./Nav";

import { UserProvider } from "../lib/user";

const CI_COMMIT_BEFORE_SHA = process.env.CI_COMMIT_BEFORE_SHA;
const CI_COMMIT_REF_SLUG = process.env.CI_COMMIT_REF_SLUG;
const CI_COMMIT_REF_NAME = process.env.CI_COMMIT_REF_NAME;
const CI_COMMIT_SHORT_SHA = process.env.CI_COMMIT_SHORT_SHA;
const CI_COMMIT_SHA = process.env.CI_COMMIT_SHA;

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>@SocialGouv/carnets</title>
    </Head>

    <Nav />

    <div className="container" style={{ paddingTop: 40 }}>
      {children}
    </div>
    <div>
      <div>CI_COMMIT_BEFORE_SHA: {CI_COMMIT_BEFORE_SHA}</div>
      <div>CI_COMMIT_REF_SLUG: {CI_COMMIT_REF_SLUG}</div>
      <div>CI_COMMIT_REF_NAME: {CI_COMMIT_REF_NAME}</div>
      <div>CI_COMMIT_SHORT_SHA: {CI_COMMIT_SHORT_SHA}</div>
      <div>CI_COMMIT_SHA: {CI_COMMIT_SHA}</div>
    </div>
  </UserProvider>
);

export default Layout;
