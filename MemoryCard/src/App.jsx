import Card from "./Card";
import Header from "./components/Header";
import Main from "./components/Main";
import Rules from "./components/Rules";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <>
      <Header>
        <Rules
          rule1="You get Points by clicking cards you didnt click yet"
          rule2="You lose after clicking same Card twice"
        />
        <Scoreboard />
      </Header>
      <Main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Main>
    </>
  );
}

export default App;
