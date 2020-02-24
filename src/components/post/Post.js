import React from "react";
import KPIs from "./KPIs";
import Tabs from "./Tabs";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;
`;

const Post = ({ post, className }) => (
  <Wrapper className={`card ${className}`}>
    <Header post={post} />
    <div className="card-body">
      <KPIs kpis={post.kpis} />
      <Tabs post={post} />
    </div>
    <Footer post={post} />
  </Wrapper>
);

export default Post;
