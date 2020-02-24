import React from "react";
// import Link from "next/link";
import TeamLink from "../teams/Link";
import styled from "styled-components";

const Header = ({ post }) => (
  <Wrapper className="card-header">
    <div style={{ display: "flex" }}>
      <span className="mood">{post.mood || "😁"}</span>
      <TeamLink slug={post.team_slug} name={post.team_slug} />
    </div>
    {/*<ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <Link href={{ pathname: "/publish", query: { id: post.id } }}>
          <a className="btn btn-outline-primary" href="#">
            Edit
          </a>
        </Link>
      </li>
    </ul>*/}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  font-size: 26px;
  line-height: 28px;
  justify-content: space-between;

  .mood {
    margin-right: 4px;
  }

  .btn {
    font-size: 0.9rem;
    line-height: 0.9rem;
  }
`;

export default Header;
