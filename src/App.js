import React, {Component} from 'react'
import Button from './Button'

class App extends Component {
  render() {
    const choices = ['rock', 'paper', 'scissors']
    const buttons = choices.map(choice => {
      return (
        <Button choice={choice} />
      )
    })

    return (
      <div className="App">
        {buttons}
      </div>
    )
  }
}

export default App
