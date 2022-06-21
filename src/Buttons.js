import React, {Component} from 'react'
import Button from './Button'

class Buttons extends Component {
  render() {
    const choices = this.props.choices;

    return (
      <div className="buttons">
        {choices.map(choice => 
          <Button 
            choice={choice}
            onClick={(event) => this.props.onClick(event)}
          />
        )}
      </div>
    )
  }
}

export default Buttons
