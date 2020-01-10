import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";

export default function Home({ data }) {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <h3>Carnet de bord des startups @SocialGouv</h3>

      {loading && <p>Chargement....</p>}

      {!loading && !user && (
        <React.Fragment>
          <p>
            Pour poster une nouvelle,{" "}
            <Link href="/api/login" passHref>
              <a>connectez-vous</a>
            </Link>
          </p>
        </React.Fragment>
      )}
      {data.map(d => (
        <div key={d.file.name}>{d.file.name}</div>
      ))}
    </Layout>
  );
}

Home.getInitialProps = async ({ err, req, res }) => {
  // fetch data for given month
  const now = new Date();
  const { year = now.getFullYear(), month = now.getMonth() + 1 } =
    (req && req.query) || {};

  const { protocol, host } = absoluteUrl(req);
  const url = `http://${host}/api/fetchPosts?year=${year}&month=${month}`;

  const payload = await fetch(url);
  const data = await payload.json();
  return { data };
};
