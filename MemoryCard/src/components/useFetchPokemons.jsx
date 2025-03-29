import { useState, useEffect } from "react";

function useFetchPokemons() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=60")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  return pokemonList;
}

export default useFetchPokemons;
