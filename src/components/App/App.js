import React, {Component} from 'react';
import './App.css';
import Blue from '../Blue/Blue'
import Red from '../Red/Red'
import Yellow from '../Yellow/Yellow'
import Green from '../Green/Green'
import Black from '../Black/Black'

class App extends Component {

  state = {
    red: '-100%',
    yellow: '-100%',
    black: '-100%',
    green: '-100%',
    axis: 'null'
  }

  turn = (pg) => {
    // where pg is pANEL PAgE
    // q becomes shorthand for axis state
    let q = this.state.axis
    console.log('turning', q);
    ///- blue page -\\\
    if (pg === 'blue' && q === 'bottom'){
      // nav to red, scroll down
      this.setState({red: '0%'});
      this.setState({axis: 'null'})
    }
    ///- red page -\\\
    else if (pg === 'red' && q === 'top'){
      // nav back to blue
      this.setState({red:'-100%'});
      this.setState({axis: 'null'});
    } 
    else if (pg === 'red' && q === 'bottom'){
      // nav to yellow, scroll down
      this.setState({yellow: '0%'});
      this.setState({axis: 'null'});
    }
    ///- yellow page -\\\
    else if (pg === 'yellow' && q === 'top'){
      // nav back to red
      this.setState({yellow: '-100%'});
      this.setState({axis: 'null'});
    }
    else if (pg === 'yellow' && q === 'bottom'){
      // nav to black
      this.setState({black:'0%'});
      this.setState({axis: 'null'});
    }
    ///- green page -\\\
    else if (pg === 'blue' && q === 'left'){
      // nav to green
      this.setState({green: '0%'});
      this.setState({axis: 'null'});
    }
    else if (pg === 'green' && q === 'right'){
      // nav back to blue
      this.setState({green: '-100%'});
      this.setState({axis: 'null'});
    } 
    ///- black page -\\\
    else if (pg === 'black' && q === 'top'){
      // nav back to yellow
      this.setState({black: '-100%'});
      this.setState({axis: 'null'});   
    }
    else if (pg === 'black' && q === 'bottom'){
      // nav back to blue
      this.setState({red: '-100%',yellow: '-100%',black: '-100%'});
      this.setState({axis: 'null'});  
    }      
  }

  scroll = e => {
    // q targets div element name to 'turn page'
    let q = e.target.id
    console.log(q);
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
      this.setState({axis:'bottom'});
      console.log(this.state.axis, v);
    } else if (v < nVel){
      this.setState({axis:'top'});
      console.log(this.state.axis, v);
    }
    // horizontal axis check
    if (h > vel){
      this.setState({axis:'right'});
      // console.log(this.state.axis, h);
    } else if (h < nVel){
      this.setState({axis:'left'})
      // console.log(this.state.axis, h);
    } else {
      console.log('default case');
    }
  }

  render() {
    return (
      <>
        <Blue scroll={this.scroll}/>
        <Red scroll={this.scroll} style={{bottom: this.state.red}}/>
        <Yellow scroll={this.scroll} style={{bottom: this.state.yellow}}/>
        <Black scroll={this.scroll} style={{bottom: this.state.black}}/>
        <Green scroll={this.scroll} style={{left: this.state.green}}/>        
      </>
      );  
  }
}

export default App;
