import { useState } from 'react';
import Game from '../Game';
import Header from '../Header';

function App() {
  const [singleCountry, setsingleCountry] = useState("");
  return (
    <div className="wrapper">
      <Header setsingleCountry={setsingleCountry} singleCountry={singleCountry}/>

      <div className="game-wrapper">
        <Game setsingleCountry={setsingleCountry} singleCountry={singleCountry}/>
      </div>
    </div>
  );
}

export default App;
