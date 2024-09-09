import React, { useEffect, useRef, useState } from "react";
import Toast from "../Toast/Toast";
function UserInput({
  numbersCategories,
  gameStatus,
  setgameStatus,
  guessCollectionHandler,
}) {
  const [inputVal, setValInput] = useState("");
  const [ErrorToast, setErrorToast] = useState(false);
  const inputRef = useRef();

  const submitInputHandler = (event) => {
    event.preventDefault();
    if (inputVal?.length < maxLetters) {
      setErrorToast(true);
    }

    if (inputVal?.length < maxLetters) {
      return;
    } else {
      setValInput("");
      guessCollectionHandler(inputVal);
    }
  };

  useEffect(() => {
    if (gameStatus == "lost") {
      guessCollectionHandler(inputVal);
      console.log("lost");
    }
  }, [gameStatus]);

  useEffect(() => {
    inputRef?.current.focus();
  }, []);
  const maxLetters = numbersCategories[0]?.length;
  // console.log(maxLetters);

  return (
    <div>
      {
        <div className="">
          <Toast
            message={`You need ${maxLetters} letters alphabets in the input!`}
            show={ErrorToast}
            onClose={() => setErrorToast(false)}
          />
        </div>
      }
      <form className="guess-input-wrapper" onSubmit={submitInputHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          ref={inputRef}
          className={`${gameStatus !== "running" ? "blur" : null}`}
          required
          disabled={gameStatus !== "running"}
          id="guess-input"
          type="text"
          maxLength={maxLetters}
          value={inputVal}
          onChange={(event) =>
            setValInput(event.target.value.trim().toUpperCase())
          }
        />
      </form>
    </div>
  );
}

export default UserInput;
