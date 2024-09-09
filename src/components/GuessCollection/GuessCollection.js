import React from "react";
import UserGuess from "../UserGuess/UserGuess";
import { range } from "../../utils";

function GuessCollection({ guessCollections, numbersLength,singleCountry }) {
  return (
    <div className="guess-results">
      {range(numbersLength)?.map((guess, idx) => {
        return <UserGuess numbersLength={numbersLength} value={guessCollections[guess]} key={idx} singleCountry={ singleCountry} />;

      })}
     
    </div>
  );
}

export default GuessCollection;
