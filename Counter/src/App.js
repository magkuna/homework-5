import React, { Component } from 'react';


class App extends Component {
  state = {
    number1: 10,
    number2: 5
  }

  inc1 = () => {
    this.setState({ number1: this.state.number1 + 1 })
  }
  dec1 = () => {
    this.setState({ number1: this.state.number1 - 1 })
  }
  inc2 = () => {
    this.setState({ number2: this.state.number2 + 5 })
  }
  dec2 = () => {
    this.setState({ number2: this.state.number2 - 5 })
  }




  render() {
    return (
      <div>
        <h1>
          {this.state.number1}
        </h1>
        <button
        onClick ={this.inc1}>
          +
        </button>
        <button
        onClick ={this.dec1}>
          -
        </button>
        <button>
          RESET
        </button>
        <h1>
          {this.state.number2}
        </h1>
        <button
        onClick ={this.inc2}>
          +
        </button>
        <button
        onClick ={this.dec2}>
          -
        </button>
        <button>
          RESET
        </button>
      </div>
    );
  }
}

export default App;
