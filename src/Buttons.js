import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
  render() {
    const choices = this.props.choices;

    return (
      <div
        className="
          row-start-3 col-start-2 
          text-3xl flex flex-col gap-2
          place-content-center
      "
      >
        {choices.map((choice) => (
          <Button
            choice={choice}
            onClick={(event) => this.props.onClick(event)}
          />
        ))}
      </div>
    );
  }
}

export default Buttons;
