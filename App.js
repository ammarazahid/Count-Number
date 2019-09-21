import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.changeNumber = this.changeNumber.bind(this);


    this.state = {
      numb: 4,
      isStarted: false
    }
  }
  
  start() {
    this.setState({
      isStarted: true
    })
  }
  
  stop() {
    this.setState({
      isStarted: false
    });
  }

  changeNumber() {
    setInterval(() => {
    this.setState({
      numb: parseInt(Math.random() * 10)
    })

  }, 1000)
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.numb}</h1>
        {
          this.state.isStarted === false ? <button onClick={this.start}>Start</button> : <button onClick={this.stop}>Stop</button>
        }
        <button onClick={this.changeNumber}>Change number</button>
      </div>
    );
  }

}

export default App;