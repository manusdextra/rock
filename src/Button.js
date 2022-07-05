import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        value={this.props.choice}
        onClick={this.props.onClick}
        className="h-full w-full rounded-lg bg-gray-400 text-xl font-bold hover:border-2 hover:border-slate-700"
      >
        {this.props.choice}
      </button>
    );
  }
}

export default Button;
