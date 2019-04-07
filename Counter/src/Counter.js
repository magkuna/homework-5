import React, { Component } from 'react';
import Button from '@material-ui/core/Button'



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

  saveNumber() {
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
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={this.inc1}
            >
            +1
        </Button>
          <Button
            variant={'contained'} 
            color={'secondary'}
            onClick={this.dec1}
            >
            -1
        </Button>
        </div>
        <div>
          <Button
            variant={'contained'} 
            color={'primary'}
            onClick={this.inc2}
            >
            +5
        </Button>
          <Button
          variant={'contained'} 
          color={'secondary'}
            onClick={this.dec2}
            >
            -5
        </Button>
        </div>
        
          <Button
            variant={'contained'}
            onClick={this.reset}
            >
            RESET
        </Button>
       
      </div>
    );
  }
}



export default Counter;
