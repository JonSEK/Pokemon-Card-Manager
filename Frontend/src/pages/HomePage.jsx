import React from "react";
import NavBar from "../components/NavBar.jsx";
import SearchBar from "../components/searchBar.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar isHomePage={true} />
      <div className="search-container">
        <h1 className="title">Pokemon Card Manager</h1>
        <SearchBar />
      </div>
    </>
  );
};

export default HomePage;
