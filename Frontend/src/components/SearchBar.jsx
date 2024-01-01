import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getPokemonCards } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ inHeader }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await getPokemonCards(searchTerm);
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`, {
      state: { results: data },
    });
  };

  const handleAdvanced = () => {
    // Add your logic for the advanced button click event here
  };

  return (
    <form onSubmit={handleSearch} className="search-input-group">
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search for cards..."
          value={searchTerm}
          onChange={handleChange}
          className="search-bar"
        />
      </div>
      <div className={`button-row ${inHeader ? "display-none" : ""}`}>
        <button className="search-button" type="submit">
          Search
        </button>
        <button
          className="advanced-button"
          type="button"
          onClick={handleAdvanced}
        >
          Advanced
        </button>
      </div>
    </form>
  );
}
