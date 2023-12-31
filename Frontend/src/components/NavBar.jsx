import React from "react";
import SearchBar from "./searchBar";
import SignInButton from "./SignInButton";

const NavBar = ({ isHomePage }) => {
  return (
    <nav className="navbar">
      <div>
        <p>Pokemon Card Manager</p>
        {!isHomePage && <SearchBar inNavBar={true} />}
      </div>
      <ul>
        <li>About</li>
        <li>Expansions</li>
        <li>Collections</li>
        <SignInButton />
      </ul>
    </nav>
  );
};

export default NavBar;
