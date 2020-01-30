import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";
import NewsCard from "../src/components/NewsCard";
import StyledTeamsList from "../src/components/TeamsList";

export default function Home({ data }) {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Chargement....</p>}

      {!loading && data && data.map && (
        <div className="row">
          <dd className="col-md-3 col-sm-4">
            <StyledTeamsList />
          </dd>
          <dd className="col-md-9 col-sm-8">
            <h4>Nouvelles</h4>
            {data.map(d => (
              <NewsCard data={d} key={d.content.team} />
            ))}
          </dd>
        </div>
      )}
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  let url = `/api/fetchLatestPosts`;

  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    url = `${protocol}://${req.headers.host}${url}`;
  }

  const payload = await fetch(url);
  const data = await payload.json();

  return { data };
};
