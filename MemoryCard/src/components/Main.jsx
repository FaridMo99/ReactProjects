import { useState, useEffect } from "react";
import Card from "./Card";
import useFetchPokemons from "./useFetchPokemons";

function Main({ cardAmount, click, rerender }) {
  const [pokemons, setPokemons] = useState([]);
  const allPokemons = useFetchPokemons();

  useEffect(() => {
    if (allPokemons.length > 0) {
      const randomPokemons = [];
      for (let i = 0; i < cardAmount; i++) {
        const randomInteger = Math.floor(Math.random() * allPokemons.length);
        randomPokemons.push(allPokemons[randomInteger].name);
      }
      setPokemons(randomPokemons);
    }
  }, [cardAmount, rerender, allPokemons]);

  return (
    <main className="w-full customGrid">
      {pokemons.map((pokemonName) => (
        <Card name={pokemonName} key={crypto.randomUUID()} click={click} />
      ))}
    </main>
  );
}

export default Main;
