import React from "react";
import Link from "next/link";

import { useUser } from "../lib/user";

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
          Carnet de bord de la startup
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
            {!loading &&
              (user ? (
                <Link href="/publish" passHref>
                  <a className="nav-link">Publier</a>
                </Link>
              ) : (
                <Link href="/api/login" passHref>
                  <a className="nav-link">Login</a>
                </Link>
              ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
