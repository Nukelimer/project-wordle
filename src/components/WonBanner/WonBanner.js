import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numberOfGuess }) {
  return (
    <Banner status={"happy"}>
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numberOfGuess === 1
              ? "1 attempt"
              : "after " + numberOfGuess + " guesses"}
          </strong>
          .
        </p>
      </div>
    </Banner>
  );
}

export default WonBanner;
