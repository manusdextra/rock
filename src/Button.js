import React, {Component} from 'react'

class Button extends Component {
  render() {
    const {choice} = this.props

    return (
      <button className="App">
        <p>{choice}</p>
      </button>
    )
  }
}

export default Button
