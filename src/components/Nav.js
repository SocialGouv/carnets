import React from "react";
import Link from "next/link";
import { useUser } from "../lib/user";
import styled from "styled-components";

const Nav = ({ className }) => {
  const { user, loading } = useUser();

  return (
    <nav
      className={`navbar sgb-navbar-marianne navbar-expand-lg navbar-light bg-light ${className}`}
    >
      <div className="sgb-marianne"></div>
      <div className="navbar-brand">
        <Link href="/" passHref>
          <a>@SocialGouv/carnets</a>
        </Link>
        <div className="navbar-baseline" href="#">
          Carnets de bord des produits
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/publish" passHref>
              <a className="btn btn-outline-primary" href="#">
                Publier
              </a>
            </Link>
          </li>
          {!loading && user && (
            <li className="nav-item">
              <Link href="/api/logout" passHref>
                <a className="btn btn-outline-danger" href="#">
                  Logout
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const StyledNav = styled(Nav)`
  padding: 1em !important;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  .navbar-brand {
    flex: auto;
  }

  .sgb-marianne {
    background-color: transparent;
  }

  .btn-outline-danger {
    margin-left: 20px;
  }
`;

export default StyledNav;
