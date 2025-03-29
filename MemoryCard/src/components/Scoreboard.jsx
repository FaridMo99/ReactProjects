function Scoreboard({ score = 0, highscore = 0 }) {
  return (
    <h2 className="font-bold flex flex-col justify-evenly">
      <span>Your Score:{score}</span>
      <span>Highscore:{highscore}</span>
    </h2>
  );
}

export default Scoreboard;
