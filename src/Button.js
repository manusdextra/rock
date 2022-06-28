import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        value={this.props.choice}
        onClick={(event) => this.props.onClick(event)}
        className="rounded-lg hover:border-2 hover:border-slate-700 font-bold text-xl h-12 w-full bg-gray-400"
      >
        {this.props.choice}
      </button>
    );
  }
}

export default Button;
