import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function UserGuess({ numbersLength, value, singleCountry }) {
 
  const guessHandler = checkGuess(value, singleCountry)


  return (
    <div className="guess-results">
      <p className="guess">
        {range(numbersLength)?.map((singleLetter, idx) => (
          
          <span className={`cell ${guessHandler ? guessHandler[singleLetter].status: null }`} key={idx}>{guessHandler ? guessHandler[singleLetter].letter : undefined}</span>
        ))}
      </p>
    </div>
  );
}

export default UserGuess;
