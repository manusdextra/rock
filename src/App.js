import React, { Component } from "react";
import Buttons from "./Buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ["rock", "paper", "scissors"],
      playerChoice: null,
      computerChoice: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(() => ({
      playerChoice: event.target.value,
    }));
    setTimeout(this.computerChoose(), 3000);
  }

  computerChoose() {
    const index = Math.floor(Math.random() * this.state.choices.length)
    this.setState(() => ({
      computerChoice: this.state.choices[index]
    }));
  }

  render() {
    const playerChoice = this.state.playerChoice;
    const computerChoice = this.state.computerChoice;

    return (
      <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
        <div
          className="
          rounded-lg p-6
          my-2
          bg-slate-400
          col-start-2 row-start-1
          text-center text-3xl
        "
        >
          Your choice:
          <br />
          {playerChoice ? playerChoice : ""}
        </div>
        <div
          className="
          rounded-lg p-6
          my-2
          bg-slate-200
          col-start-2 row-start-2
          text-center text-3xl
        "
        >
          Computer's choice:
          <br />
          {computerChoice ? computerChoice : ""}
        </div>
        <Buttons
          choices={this.state.choices}
          onClick={(event) => this.handleClick(event)}
        />
      </div>
    );
  }
}

export default App;
