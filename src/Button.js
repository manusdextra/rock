import React, {Component} from 'react'

class Button extends Component {
  render() {
    const {choice}=this.props
    return (
      <button id={choice}>
        <span className="button-text">{choice}</span>
      </button>
    )
  }
}

export default Button
