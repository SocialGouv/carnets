import React from "react";
import Link from "next/link";
import { useUser } from "../lib/user";
// import styled from "styled-components";

// const NavWrapper = styled.nav`
//   padding: 1em !important;
// `;
//
// const LogoWrapper = styled.div`
//   background-color: transparent;
// `;
//
// const BrandWrapper = styled.div`
//   flex: auto;
// `;

const Nav = () => {
  const { user, loading } = useUser();

  return (
    <nav className="navbar sgb-navbar-marianne navbar-expand-lg navbar-light bg-light">
      <div className="sgb-marianne"></div>
      <div className="navbar-brand">
        <Link href="/" passHref>
          <a>@SocialGouv/carnets</a>
        </Link>
        <div className="navbar-baseline" href="#">
          Carnet de bord des produits
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
              <a className="nav-link">Publier</a>
            </Link>
          </li>
          {!loading && user && (
            <li className="nav-item">
              <Link href="/api/logout" passHref>
                <a className="nav-link">Logout</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <style jsx>{`
        .navbar-brand {
          flex: auto;
        }
        .sgb-marianne {
          background-color: transparent;
        }
        .navbar.sgb-navbar-marianne {
          padding: 1em;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
