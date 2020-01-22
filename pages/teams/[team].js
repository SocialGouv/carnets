import React from "react";
import teams from "../../src/lib/teams";
import Layout from "../../src/components/Layout";
import NewsCard from "../../src/components/NewsCard";
import TeamsList from "../../src/components/TeamsList";

const Page = ({ data, team }) => (
  <Layout>
    <div className="row">
      <dd className="col-sm-3">
        <h5>Produits</h5>
        <TeamsList />
      </dd>
      <dd className="col-sm-9">
        <h5>{(teams.getById(team) || {}).name || ""}</h5>
        {data &&
          data.map &&
          data.map((d, i) => <NewsCard data={d} key={team + i} />)}
      </dd>
    </div>
  </Layout>
);

Page.getInitialProps = async ({ req, query }) => {
  let url = `/api/fetchTeamPosts?team=${query.team}`;

  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    url = `${protocol}://${req.headers.host}${url}`;
  }

  const payload = await fetch(url);
  const data = await payload.json();
  data.sort(
    (a, b) =>
      new Date(b.content.date).getTime() - new Date(a.content.date).getTime()
  );

  return { data, team: query.team };
};

export default Page;
