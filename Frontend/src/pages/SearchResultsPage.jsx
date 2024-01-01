import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPokemonCards } from "../services/api";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

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
      <div className="card-container">
        {results.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.images.small} alt={card.name} />
          </div>
        ))}
      </div>
      {selectedCard && (
        <div className="selected-card">
          <img
            src={selectedCard.images.large}
            alt={selectedCard.name}
            onClick={() => setSelectedCard(null)}
          />
        </div>
      )}
    </div>
  );
}
