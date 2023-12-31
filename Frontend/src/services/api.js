import axios from "axios";

export const getPokemonCards = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`,
      {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to get Pokemon cards:", error);
  }
};
