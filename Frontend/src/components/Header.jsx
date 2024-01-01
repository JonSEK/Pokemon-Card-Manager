import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./searchBar";
import SignInButton from "./SignInButton";

export default function Header() {
  const location = useLocation();
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <p>Pokemon Card Manager</p>
        </Link>
        {location.pathname !== "/" && <SearchBar inHeader={true} />}
      </div>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/expansions">
          <li>Expansions</li>
        </Link>
        <Link to="/collections">
          <li>Collections</li>
        </Link>
        <Link to="/sign-in">
          <SignInButton />
        </Link>
      </ul>
    </nav>
  );
}
