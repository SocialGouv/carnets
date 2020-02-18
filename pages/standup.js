import React from "react";
import styled from "styled-components";
import Post from "../src/components/Post";

const NoContentWrapper = styled.div`
  border: none;
  border-radius: 0;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;
`;

const NoContent = () => (
  <NoContentWrapper className="card text-center bg-light">
    <div className="card-body">
      <h6 className="card-title text-muted">
        Aucune nouvelle publiée pour le moment.
      </h6>
    </div>
  </NoContentWrapper>
);

const Page = ({ posts }) => (
  <div
    style={{
      top: "50%",
      left: "50%",
      width: "95%",
      margin: "auto",
      position: "absolute",
      transform: "translate(-50%, -50%)"
    }}
  >
    {posts && !posts.length ? <NoContent /> : <Post post={posts[0]} />}
  </div>
);

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

Page.getInitialProps = async ({ req, query }) => {
  const posts = await fetchData(`/api/posts/team?slug=${query.team}`, req);
  return { posts };
};

export default Page;
