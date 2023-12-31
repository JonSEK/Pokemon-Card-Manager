import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPokemonCards } from "../services/api";
import NavBar from "../components/NavBar";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPokemonCards(searchTerm);
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavBar isHomePage={false} />
      <div className="card-container">
        {results.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.images.small} alt={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
