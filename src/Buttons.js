import React, {Component} from 'react'
import Button from './Button'

class Buttons extends Component {
  render() {
    const {choices} = this.props
    const buttons = choices.map(choice => {
      return (
        <Button choice={choice} />
      )
    })

    return (
      <div className="buttons">{buttons}</div>
    )
  }
}

export default Buttons
