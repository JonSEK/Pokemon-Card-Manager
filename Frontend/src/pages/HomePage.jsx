import React from "react";
import SearchBar from "../components/searchBar.jsx";

export default function HomePage() {
  return (
    <>
      <div className="search-container">
        <h1 className="title">Pokemon Card Manager</h1>
        <SearchBar />
      </div>
    </>
  );
}
