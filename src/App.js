import React, {Component} from 'react';
import './App.css';


class App extends Component {

  state = {
    red: '-100%',
    grn: '-100%',
    ylw: '-100%',
    blk: '-100%',
    axis: 'null'
  }

  turn = (pg) => {
    // where pg is pANEL PAgE
    console.log('turning', pg);
    // q becomes shorthand for axis state
    let q = this.state.axis
    ///- blue page -\\\
    if (pg === 'blue' && q === 'down'){
      // nav to red
      this.setState({red: '0%'});
    } 
    ///- red page -\\\
    else if (pg === 'red' && q === 'up'){
      // nav back to blue
      this.setState({red:'-100%'});
    } 
    else if (pg === 'red' && q === 'right'){
      // nav to yellow
      this.setState({ylw: '0%'});
    } 
    ///- yellow page -\\\
    else if (pg === 'yellow' && q === 'left'){
      // nav back to red
      this.setState({ylw: '-100%'});
    }
    else if (pg === 'yellow' && q === 'up'){
      // nav to black
      this.setState({blk:'0%'});
    }
    ///- green page -\\\
    else if (pg === 'blue' && q === 'left'){
      // nav to green
      this.setState({grn: '0%'});
    }
    else if (pg === 'green' && q === 'right'){
      // nav back to blue
      this.setState({grn: '-100%'});
    } 
    // black page -\\\
    else if (pg === 'black' && q === 'left'){
      // nav back to blue
      this.setState({
        red: '-100%',
        ylw: '-100%',
        blk: '-100%'   
      });   
    }      
  }

  scroll = e => {
    // q targets div element name to 'turn page'
    let q = e.target.id
    switch (q) {
      case 'blue':
        this.axis(e);
        this.turn(q);
        break;
      case 'red':
        this.axis(e);
        this.turn(q);
        break;
      case 'green':
        this.axis(e);
        this.turn(q);
        break;  
      case 'yellow':
        this.axis(e);
        this.turn(q);
        break;
      case 'black':
        this.axis(e);
        this.turn(q);
        break;
      default:
        console.log('hi :)');
    }
  }

  axis = e => {
    // vel is animation velocity
    const vel = 30;
    const nVel = -30;

    // v is vertical axis
    let v = e.deltaY
    // h is horizontal axis
    let h = e.deltaX
    console.log(v, h);
    // vertical axis check
    if (v > vel){
      this.setState({axis:'down'});
      console.log(this.state.axis, v);
    } else if (v < nVel){
      this.setState({axis:'up'});
      console.log(this.state.axis, v);
    }
    // horizontal axis check
    if (h > vel){
      this.setState({axis:'right'});
      console.log(this.state.axis, h);
    } else if (h < nVel){
      this.setState({axis:'left'})
      console.log(this.state.axis, h);
    } else {
      console.log('default case');
    }
  }

  handleClick = () => {
    console.log('uh ohhhh');
  }
  render() {
    return (
      <>
        <div id="blue" className="screen" onWheel={this.scroll} onClick={this.handleClick}></div>
        <div id="red" className="screen" onWheel={this.scroll} style={{bottom: this.state.red}} ></div>
        <div id="yellow" className="screen" style={{right: this.state.ylw}} onWheel={this.scroll}></div>
        <div id="black" className="screen" style={{top: this.state.blk}} onWheel={this.scroll}></div>
        <div id="green" className="screen" style={{left: this.state.grn}} onWheel={this.scroll}></div>
      </>
      );  
  }
}

export default App;
