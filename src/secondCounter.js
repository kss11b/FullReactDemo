import React, { Component } from 'react';
import './App.css';

export default class Clock extends Component {

  state = {
    time: 0,
  }

componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: this.state.time + 1}), 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

  render(){
    return (
      <div>
      <h1>Timer Demo</h1>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}
