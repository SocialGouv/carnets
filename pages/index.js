import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";

function getWeekNumber(dt) {
  dt = new Date(dt);
  var tdt = new Date(dt.valueOf());
  var dayn = (dt.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  var firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

export default function Home({ data }) {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Chargement....</p>}

      {!loading &&
        data &&
        data.map &&
        data.map(d => (
          <div className="card" key={d.file.name}>
            <div className="card-header">
              <span>Semaine {getWeekNumber(d.content.date)}</span>
              <span> - </span>
              <span>{d.content.mood}</span>
              <span>{d.content.team}</span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <dl className="row">
                  <dt className="col-sm-3">Priorités:</dt>
                  <dd className="col-sm-9">{d.content.priorities}</dd>
                </dl>
              </li>
              <li className="list-group-item">
                <dl className="row">
                  <dt className="col-sm-3">KPIs / OKR:</dt>
                  <dd className="col-sm-9">{d.content.kpis}</dd>
                </dl>
              </li>
              <li className="list-group-item">
                <dl className="row">
                  <dt className="col-sm-3">Échéances:</dt>
                  <dd className="col-sm-9">{d.content.needs}</dd>
                </dl>
              </li>
              <li className="list-group-item">
                <dl className="row">
                  <dt className="col-sm-3">Besoins:</dt>
                  <dd className="col-sm-9">{d.content.term}</dd>
                </dl>
              </li>
            </ul>
          </div>
        ))}
      <style jsx>{`
        .card {
          margin-bottom: 40px;
        }
      `}</style>
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  // fetch data for given month
  const now = new Date();
  const { year = now.getFullYear(), month = now.getMonth() + 1 } =
    (req && req.query) || {};

  let url = `/api/fetchPosts?year=${year}&month=${month}`;

  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    url = `${protocol}://${req.headers.host}${url}`;
  }

  const payload = await fetch(url);
  const data = await payload.json();

  return { data };
};
