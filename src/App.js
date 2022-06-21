import React, {Component} from 'react'
import Buttons from './Buttons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ['rock', 'paper', 'scissors'],
      playerChoice: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(() => ({
      playerChoice: event.target.value,
    }));
  }

  render() {
    const playerChoice = this.state.playerChoice;

    return (
      <div className="App">
        <div className="choice">
          Your choice:<br />
          {playerChoice ? playerChoice : ''}
        </div>
        <Buttons
          choices={this.state.choices}
          onClick={(event) => this.handleClick(event)}
        />
      </div>
    )
  }
}

export default App
