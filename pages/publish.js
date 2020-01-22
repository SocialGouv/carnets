import React from "react";
import Link from "next/link";
import { useFetchUser } from "../src/lib/user";
import Layout from "../src/components/Layout";
import FormPublish from "../src/components/FormPublish";

const publish = data =>
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

export default function Home() {
  const { user, loading } = useFetchUser();
  const onSubmit = data =>
    publish({
      ...data,
      date: new Date()
    });

  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <div className="card text-center bg-light">
          <div className="card-body">
            <h4 className="card-title">Pour poster une nouvelle</h4>
            <Link href="/api/login" passHref>
              <a className="btn btn-primary">connectez-vous</a>
            </Link>
          </div>
        </div>
      )}

      {!loading && user && (
        <div className="card">
          <div className="card-header">
            <h4>
              <div>Publier une nouvelle</div>
              <small className="text-muted">
                Faites le point sur la semaine qui vient de s&apos;écouler, en 5
                minutes.
              </small>
            </h4>
          </div>
          <div className="card-body">
            <FormPublish onSubmit={onSubmit} />
          </div>
        </div>
      )}
      <style jsx>{`
        .card {
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
}
