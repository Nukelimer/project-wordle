import React, { useEffect, useState } from "react";

import { sample } from "../../utils";

import { SelectCategories } from "../NumbersOfWordLength/NumbersOfWordLength";
import UserInput from "../UserInput/UserInput";
import GuessCollection from "../GuessCollection/GuessCollection";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

function Game({ singleCountry, setsingleCountry }) {
  const [numbersCategories, setnumbersCategories] = useState([]);
  const [toggleNumbersSelection, settoggleNumbersSelection] = useState(true);
  const [guessCollections, setguessCollections] = useState([]);
  const [numbersLength, setnumbersLength] = useState("");
  const [gameStatus, setgameStatus] = useState("running");

console.log({singleCountry});


  const guessCollectionHandler = (guesses) => {
    const nextGuessCollection = [...guessCollections, guesses];
    setguessCollections(nextGuessCollection);

    if (guesses === singleCountry) {
      setgameStatus("won");
    } else if (nextGuessCollection.length >= numbersLength) {
      setgameStatus("lost");
    } else {
      setgameStatus("running");
    }
  };

  useEffect(() => {
    const answer = sample(numbersCategories);
    setsingleCountry(answer);
  }, [numbersCategories]);

  return (
    <div>
      {gameStatus}
      {toggleNumbersSelection ? (
        <SelectCategories
          numbersLength={numbersLength}
          setnumbersLength={setnumbersLength}
          numbersCategories={numbersCategories}
          setnumbersCategories={setnumbersCategories}
          settoggleNumbersSelection={settoggleNumbersSelection}
          toggleNumbersSelection={toggleNumbersSelection}
        />
      ) : (
        <>
          <div className="game_height">
            <GuessCollection
              guessCollections={guessCollections}
              numbersLength={numbersLength}
              singleCountry={singleCountry}
            />
          </div>
          <UserInput
            gameStatus={gameStatus}
            setgameStatus={setgameStatus}
            numbersCategories={numbersCategories}
            guessCollections={guessCollections}
            setguessCollections={setguessCollections}
            guessCollectionHandler={guessCollectionHandler}
            />
            
            {gameStatus === 'won'&& <WonBanner numberOfGuess={guessCollections.length}/>}
            {gameStatus === 'lost'&& <LostBanner answer={singleCountry}/>}
        </>
      )}
    </div>
  );
}

export default Game;
