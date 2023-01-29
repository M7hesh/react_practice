import React, { useState } from "react";
import Die from "./Die.js";
import "./RollDice.css";

const RollDice = () => {
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);

  const SIDES = ["one", "two", "three", "four", "five", "six"];
  const handleBtn = rolling ? "RollDice-rolling" : "";

  const handleRolling = () => {
    setDie1(SIDES[Math.floor(Math.random() * SIDES.length)]);
    setDie2(SIDES[Math.floor(Math.random() * SIDES.length)]);
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button className={handleBtn} disabled={rolling} onClick={handleRolling}>
        {rolling ? "Rolling" : "Roll Dice!"}
      </button>
    </div>
  );
};

export default RollDice;
