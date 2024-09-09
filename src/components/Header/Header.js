import React, { useEffect, useState } from "react";

function Header({ singleCountry }) {
  const [hint, setHint] = useState("");

  function getCountryHint(countryName) {
    const countryArray = [...countryName];
    const indexesToReplace = getRandomIndexes(countryArray.length);

    const countryHint = countryArray.map((letter, index) =>
      indexesToReplace.includes(index) ? "*" : letter
    );

    return countryHint.join("");
  }

  function getRandomIndexes(length) {
    const indexes = [];
    
    // Ensure that the divisor is never 0
    // const divisor = Math.max(1, Math.floor(Math.random() * 3));
    
    const numberOfIndexesToReplace = Math.floor(length / 2);

    while (indexes.length < numberOfIndexesToReplace) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }

    return indexes;
  }

  useEffect(() => {
    if (singleCountry) {
      const countryHint = getCountryHint(singleCountry);
      setHint(countryHint);
    }
    // Ensure that singleCountry is not being updated within this effect
  }, [singleCountry]);

  return (
    <header className="flex_column">
      <h1>Countridle Game</h1>
      <p>
        HINT: <span>{hint}</span>
      </p>
    </header>
  );
}

export default Header;
