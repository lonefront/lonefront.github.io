import React, {Component} from 'react';
import './App.css';


class App extends Component {

  state = {
    red: '-100%',
    ylw: '-100%',
    blk: '-100%'
  }

  turn = e => {
    // q targets div element name to 'turn page'
    let q = e.target.id
    switch (q) {
      case 'blue':
        this.setState({
          red: '0%'
        });
        break;
      case 'red':
        this.setState({
          ylw: '0%'
        });
        break;
      case 'yellow':
        this.setState({
          blk: '0%'
        });
        break;
      default:
        this.setState({
          red: '-100%',
          ylw: '-100%',
          blk: '-100%'      
        })
        break;
    };
  }

  render() {
    return (
      <>
        <div id="blue" className="screen" onClick={this.turn}></div>
        <div id="red" className="screen" style={{bottom: this.state.red}} onClick={this.turn}></div>
        <div id="yellow" className="screen" style={{bottom: this.state.ylw}} onClick={this.turn}></div>
        <div id="black" className="screen" style={{bottom: this.state.blk}} onClick={this.turn}></div>
      </>
      );  
  }
}

export default App;
