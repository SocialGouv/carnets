import React from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";
import Form from "../src/components/publish/Form";

const publish = async (values, { setSubmitting }) => {
  setSubmitting(true);
  // ugly as ****
  values.team = JSON.parse(values.team);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, date: new Date() })
  };

  try {
    const response = await fetch("/api/posts/publish", options);
    if (response.status < 400) {
      Router.push("/teams/[team]", `/teams/${values.team.slug}`);
    } else {
      console.error(response.statusText);
    }
  } catch (e) {
    console.log(e);
  }
};

const CardWrapper = styled.div`
  border: none;
  max-width: 600px;
  margin: 0 auto 20px;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  h4 {
    margin: 0;
    color: rgba(28, 28, 28, 0.5);
  }

  small {
    font-size: 0.6em;
  }
`;

const Message = () => (
  <CardWrapper className="card text-center bg-light">
    <div className="card-body">
      <h4 className="card-title">Pour poster une nouvelle</h4>
      <br />
      <Link href="/api/login" as="/api/login">
        <a className="btn btn-primary">connectez-vous</a>
      </Link>
    </div>
  </CardWrapper>
);

const Content = ({ teams }) => (
  <CardWrapper className="card">
    <div className="card-header">
      <h4>
        <div className="text-muted">Publier une nouvelle</div>
        <small className="text-muted">
          Faites le point sur la semaine qui vient de s&apos;écouler, en 5
          minutes.
        </small>
      </h4>
    </div>
    <div className="card-body">
      <Form onSubmit={publish} teams={teams} />
    </div>
  </CardWrapper>
);

const Page = ({ teams }) => {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      {loading ? (
        <p>Chargement...</p>
      ) : user ? (
        <Content teams={teams} />
      ) : (
        <Message />
      )}
    </Layout>
  );
};

const fetchData = async (url, req) => {
  if (req) {
    console.log("PORT 2", req.socket.localPort);
    console.log("PORT 4", req.socket.address());
    // const protocol = req.headers["x-forwarded-proto"] || "http";
    // url = `${protocol}://localhost:${req.socket.localPort}${url}`;
    url = `http://localhost:${req.socket.localPort}${url}`;
    // const protocol = req.headers["x-forwarded-proto"] || "http";
    // url = `${protocol}://${req.headers.host}${url}`;
  }
  const payload = await fetch(url);
  return await payload.json();
};

Page.getInitialProps = async ({ req }) => {
  const teams = await fetchData("/api/teams", req);
  return { teams };
};

export default Page;
