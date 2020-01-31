import React from "react";
import styled from "styled-components";
import Layout from "../../src/components/Layout";
import NewsCard from "../../src/components/NewsCard";
import TeamsList from "../../src/components/TeamsList";

const NoContent = ({ className }) => (
  <div className={`card text-center bg-light ${className}`}>
    <div className="card-body">
      <h6 className="card-title text-muted">
        Auncune nouvelle publiée pour le moment.
      </h6>
    </div>
  </div>
);

const StyledNoContent = styled(NoContent)`
  border: none;
  border-radius: 0;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;
`;

const Page = ({ data, team }) => (
  <Layout>
    <div className="row">
      <dd className="col-sm-4 col-md-3">
        <TeamsList />
      </dd>
      <dd className="col-sm-8 col-md-9">
        {data && !data.success && <StyledNoContent />}
        {data &&
          data.success &&
          data.map((d, i) => <NewsCard data={d} key={team + i} />)}
      </dd>
    </div>
  </Layout>
);

Page.getInitialProps = async ({ req, query }) => {
  const team = query.team.toLowerCase();
  let url = `/api/fetchTeamPosts?team=${team}`;

  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    url = `${protocol}://${req.headers.host}${url}`;
  }

  const payload = await fetch(url);
  const data = await payload.json();

  data &&
    data.success &&
    data.sort(
      (a, b) =>
        new Date(b.content.date).getTime() - new Date(a.content.date).getTime()
    );

  return { data, team: team };
};

export default Page;
