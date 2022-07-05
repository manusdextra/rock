import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
  render() {
    const choices = this.props.choices;

    return (
      <div
        className="
          col-start-2 row-start-3 
          flex flex-col
          place-content-center 
          gap-2 py-2
          text-3xl
      "
      >
        {choices.map((choice) => (
          <Button choice={choice} onClick={this.props.onClick} />
        ))}
      </div>
    );
  }
}

export default Buttons;
