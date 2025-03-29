import { useState, useEffect } from "react";
import Card from "./Card";

function Main({ cardAmount, click }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
      .then((response) => response.json())
      .then((pokemonObject) => {
        const randomPokemons = [];
        for (let i = 0; i < cardAmount; i++) {
          const randomInteger = Math.floor(
            Math.random() * pokemonObject.results.length,
          );
          randomPokemons.push(pokemonObject.results[randomInteger].name);
        }
        setPokemons(randomPokemons);
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, [cardAmount]);

  return (
    <main className="w-full customGrid">
      {pokemons.map((pokemonName) => (
        <Card name={pokemonName} key={pokemonName} click={click}/>
      ))}
    </main>
  );
}

export default Main;
