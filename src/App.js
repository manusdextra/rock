import React, { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";

export default function App() {
  const choices = ["rock", "paper", "scissors"];
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const [playerChoice, setPlayerChoice] = useState(null);
  const yourTurn = useRef(true);
  useEffect(() => {
    if (yourTurn.current) {
      yourTurn.current = false;
    } else {
      computerChoose();
    }
  }, [playerChoice]);

  const [computerChoice, setComputerChoice] = useState(null);
  useEffect(() => {
    if (whoWon() === "player") {setScore( score => ({...score, player: score.player + 1}))};
    if (whoWon() === "computer") {setScore( score => ({...score, computer: score.computer + 1}))};
  }, [computerChoice]);


  function handleClick(e) {
    setPlayerChoice(e.target.value);
  };

  function computerChoose() {
    let index = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[index]);
  };

  function whoWon() {
    if ((playerChoice === "rock" && computerChoice === "scissors")
      || (playerChoice === "paper" && computerChoice === "rock")
      || (playerChoice === "scissors" && computerChoice === "paper")) return "player";
    if ((playerChoice === "rock" && computerChoice === "paper")
      || (playerChoice === "paper" && computerChoice === "scissors")
      || (playerChoice === "scissors" && computerChoice === "rock")) return "computer";
  };

  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_80vw_1fr] grid-rows-3">
      <div
        className="
          col-start-2 row-start-1 my-2
          grid grid-cols-2
          grid-rows-2
          rounded-lg
          bg-slate-400 p-6
          text-center text-3xl
        "
      >
        <div>
          You:
          <br />
          {playerChoice ? playerChoice : ""}
        </div>

        <div>
          Computer:
          <br />
          {computerChoice ? computerChoice : ""}
        </div>
      </div>

      <div
        className="
            col-start-2 row-start-2 my-2
            grid grid-cols-2
            grid-rows-2
            rounded-lg
            bg-slate-200 p-6
            text-center text-3xl
          "
      >
        <div className="col-span-2">Score:</div>
        <div className="col-start-1 col-end-1">You: {score.player}</div>
        <div className="col-start-2 col-end-2">Computer: {score.computer}</div>
      </div>

      <Buttons choices={choices} onClick={handleClick} />
    </div>
  );
}
