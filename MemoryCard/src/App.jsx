import Header from "./components/Header";
import Main from "./components/Main";
import Rules from "./components/Rules";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const amountOfCards = 20;
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [rerender, setRerender] = useState(false);

  const clickHandler = (e) => {
    const clickedPokemon = e.currentTarget.id;

    if (clickedPokemons.includes(clickedPokemon)) {
      setScore(0);
      setClickedPokemons([]);
    } else {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > highscore) {
          setHighscore(newScore);
        }
        return newScore;
      });

      setClickedPokemons((prevClicked) => [...prevClicked, clickedPokemon]);
      setRerender((pre) => !pre);
    }
  };

  return (
    <>
      <Header>
        <Rules
          rule1="You get Points by clicking cards you didn't click yet"
          rule2="You lose after clicking the same Card twice"
        />
        <Scoreboard score={score} highscore={highscore} />
      </Header>
      <Main
        cardAmount={amountOfCards}
        rerender={rerender}
        click={clickHandler}
      />
      <Footer />
    </>
  );
}

export default App;
