import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import Layout from "../src/components/Layout";
import { useFetchUser } from "../src/lib/user";
import Form from "../src/components/publish/Form";

const publish = values => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, created_at: new Date() })
  };

  return fetch("/api/posts/publish", options);
};

const CardWrapper = styled.div`
  border: none;
  max-width: 600px;
  margin: 0 auto 20px;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  h4 {
    margin: 0;
  }

  small {
    font-size: 0.6em;
  }
`;

const Message = ({ post }) => (
  <CardWrapper className="card bg-light">
    <div className="card-body">
      <h4 className="card-title">Pour poster une nouvelle</h4>
      <br />
      {post ? (
        <Link href={{ pathname: "/api/login", query: { id: post.id } }}>
          <a className="btn btn-primary">connectez-vous</a>
        </Link>
      ) : (
        <Link href="/api/login" as="/api/login">
          <a className="btn btn-primary">connectez-vous</a>
        </Link>
      )}
    </div>
  </CardWrapper>
);

const Content = ({ teams, post }) => {
  const [unauthorized, setUnauthorized] = useState(false);

  const submit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await publish(values);
      if (response.status < 400) {
        Router.push("/teams/[team]", `/teams/${values.team_slug}`);
      } else {
        console.error("Error:", response.statusText);
        setUnauthorized(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CardWrapper className="card">
      <div className="card-header">
        <h4>
          <div>Publier une nouvelle</div>
          <small>
            Faites le point sur la semaine qui vient de s&apos;écouler, en 5
            minutes.
          </small>
        </h4>
      </div>
      <div className="card-body">
        <Form
          post={post}
          teams={teams}
          onSubmit={submit}
          unauthorized={unauthorized}
        />
      </div>
    </CardWrapper>
  );
};

const Page = ({ teams, post }) => {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      {loading ? (
        <p>Chargement...</p>
      ) : user ? (
        <Content teams={teams} post={post} />
      ) : (
        <Message post={post} />
      )}
    </Layout>
  );
};

const fetchData = async (url, req) => {
  if (req) {
    url = `http://localhost:${req.socket.localPort}${url}`;
  }
  const payload = await fetch(url);
  return await payload.json();
};

Page.getInitialProps = async ({ req, query }) => {
  let post = null;
  const id = query.id;
  const teams = await fetchData("/api/teams", req);

  if (id) {
    [post] = await fetchData(`/api/posts/post?id=${id}`, req);
    console.log("POST:", post);
  }

  return { teams, post };
};

export default Page;
