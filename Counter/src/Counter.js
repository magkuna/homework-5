import React, { Component } from 'react';



class Counter extends Component {
  state = {
    number: JSON.parse(localStorage.getItem('counter')) || this.props.number,
  }


  inc1 = () => {
    this.setState({ number: this.state.number + 1 })
  }
  dec1 = () => {
    this.setState({ number: this.state.number - 1 })
  }
  inc2 = () => {
    this.setState({ number: this.state.number + 5 })
  }
  dec2 = () => {
    this.setState({ number: this.state.number - 5 })
  }

  reset = () => {
    this.setState({ number: this.props.number })
  }

  saveNumber(){
    localStorage.setItem('counter', JSON.stringify(this.state.number))
  }

  render() {
    this.saveNumber()
    return (
      <div>
        <div>
          <h1>
            {this.state.number}
          </h1>
        </div>
        <div>
          <button
            onClick={this.inc1}>
            +1
        </button>
        </div>
        <div>
          <button
            onClick={this.dec1}>
            -1
        </button>
        </div>
        <div>
          <button
            onClick={this.inc2}>
            +5
        </button>
        </div>
        <div>
          <button
            onClick={this.dec2}>
            -5
        </button>
        </div>
        <div>
          <button
            onClick={this.reset}>
            RESET
        </button>
        </div>
      </div>
    );
  }
}



export default Counter;
