import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

// Stylesheet
import "./style.css";

//Components
import Die from "./Die";

const App = () => {
  const [dice, setDice] = useState(diceArray());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allValueSame = dice.every((die) => die.value === firstValue);
    if (allHeld && allValueSame) {
      setTenzies(true);
    }
  }, [dice]);

  function newGame() {
    setDice(diceArray);
    setTenzies(false);
  }

  function diceArray() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }
  function diceHeld(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.floor(Math.random() * 6) + 1 };
      })
    );
  }

  return (
    <>
      <main className="main-container">
        <h1>Tenzies</h1>
        <p className="para-container">
          Roll until all the dices are same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">
          {dice.map((die) => {
            return (
              <Die
                diceHeld={diceHeld}
                key={die.id}
                id={die.id}
                value={die.value}
                isHeld={die.isHeld}
              />
            );
          })}
        </div>
        <button onClick={tenzies ? newGame : rollDice} className="roll-dice">
          {tenzies ? "Reset Game" : "Roll"}
        </button>
        {tenzies && <Confetti />}
      </main>
    </>
  );
};

export default App;
