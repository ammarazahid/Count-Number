import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);


    this.state = {
      numb: 0,
      isStarted: false
    }
    this.interval = null
  }
  
  start() {
    this.interval = setInterval(() => {
      this.setState({
        numb: parseInt(Math.random() * 10)
      })
  
    }, 1000)
    this.setState({
      isStarted: true
    })
  }
  
  stop() {
    clearInterval(this.interval)
    this.setState({
      
      isStarted: false
    });
  }

  
  render() {
    return (
      <div>
        <h1>{this.state.numb}</h1>
        {
          this.state.isStarted === false ? <button onClick={this.start}>Start</button> : <button onClick={this.stop}>Stop</button>
        }
      </div>
    );
  }

}

export default App;