import React from "react";

import Layout from "../src/components/Layout";
import FormPublish from "../src/components/FormPublish";
import { useFetchUser } from "../src/lib/user";

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

const onPublish = () => publish({ date: new Date(), hello: "world" });

export default function Home() {
  const { user, loading } = useFetchUser();
  const onSubmit = data => {
    publish({
      ...data,
      date: new Date()
    });
  };
  return (
    <Layout user={user} loading={loading}>
      <h1>Publier une nouvelle</h1>
      <p>Faites le point sur la semaine qui vient de s'écouler, en 5 minutes</p>
      <p>&nbsp;</p>
      {loading && <p>Loading login info...</p>}

      {user && (
        <div>
          <FormPublish onSubmit={onSubmit} />
        </div>
      )}
    </Layout>
  );
}
