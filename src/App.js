import React, {Component} from 'react'
import Buttons from './Buttons'

class App extends Component {
  render() {
    const choices = ['rock', 'paper', 'scissors']

    return (
      <div className="App">
        <Buttons choices={choices} />
      </div>
    )
  }
}

export default App
