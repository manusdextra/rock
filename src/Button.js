import React, {Component} from 'react'

class Button extends Component {
  render() {
    return (
      <button
        value={this.props.choice}
        onClick={(event) => this.props.onClick(event)}
      >
          {this.props.choice}
      </button>
    )
  }
}

export default Button
