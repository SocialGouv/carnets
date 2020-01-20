import React from "react";
import Link from "next/link";
import { useFetchUser } from "../src/lib/user";
import Layout from "../src/components/Layout";
import FormPublish from "../src/components/FormPublish";

const publish = data => {
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
};

export default function Home() {
  const { user, loading } = useFetchUser();
  const onSubmit = data => {
    console.log("onSubmit", data);
    publish({
      ...data,
      date: new Date()
    });
  };
  return (
    <Layout user={user} loading={loading}>
      <h3>Publier une nouvelle</h3>
      <p>
        Faites le point sur la semaine qui vient de s&apos;écouler, en 5
        minutes.
      </p>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <div className="card text-center bg-light">
          <div className="card-body">
            <h5 className="card-title">Pour poster une nouvelle</h5>
            <Link href="/api/login" passHref>
              <a className="btn btn-primary">connectez-vous</a>
            </Link>
          </div>
        </div>
      )}

      {!loading && user && (
        <div>
          <FormPublish onSubmit={onSubmit} />
        </div>
      )}
    </Layout>
  );
}
