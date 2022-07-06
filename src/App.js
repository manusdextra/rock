import React, { useState } from "react";
import Buttons from "./Buttons";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  function handleClick(e) {
    setPlayerChoice(e.target.value);
    let index = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[index]);
  }

  return (
    <div className="grid h-screen w-screen grid-cols-3 grid-rows-3">
      <div
        className="
        col-start-2 row-start-1
        my-2
        rounded-lg
        bg-slate-400 p-6
        text-center text-3xl
      "
      >
        Your choice:
        <br />
        {playerChoice ? playerChoice : ""}
      </div>

      <div
        className="
        col-start-2 row-start-2
        my-2
        rounded-lg
        bg-slate-200 p-6
        text-center text-3xl
      "
      >
        Computer's choice:
        <br />
        {computerChoice ? computerChoice : ""}
      </div>

      <Buttons
        choices={choices}
        onClick={handleClick}
      />
    </div>
  );
}
