import React, {Component} from 'react';
import './App.css';
import Blue from '../Blue/Blue'
import Red from '../Red/Red'
import Yellow from '../Yellow/Yellow'
import Green from '../Green/Green'
import Black from '../Black/Black'
import Orange from '../Orange/Orange'
// import Buttons from '../Buttons/Buttons'

class App extends Component {

  componentDidMount(){
    this.setState({activePg: 'blue'});
  }

  state = {
    red: '-100%',
    yellow: '-100%',
    black: '-100%',
    green: '-100%',
    orange: '-100%',
    axis: 'null',
    activePg: ''
  }

  turn = (pg) => {
    // where pg is pANEL PAgE
    // axis becomes shorthand for axis state
    let axis = this.state.axis
    console.log('turning', pg, 'page from', this.state.activePg);
    ///- blue page -\\\
    if (pg === 'blue' && axis === 'bottom'){
      // nav to red, scroll down
      this.setState({red: '0%'});
      this.setState({axis: 'null'});
    }
    ///- red page -\\\
    else if (pg === 'red' && axis === 'top'){
      // nav back to blue
      this.setState({red:'-100%'});
      this.setState({axis: 'null'});
    } 
    else if (pg === 'red' && axis === 'bottom'){
      // nav to yellow, scroll down
      this.setState({yellow: '0%'});
      this.setState({axis: 'null'});
    }
    ///- yellow page -\\\
    else if (pg === 'yellow' && axis === 'top'){
      // nav back to red
      this.setState({yellow: '-100%', activePg: 'red'});
      this.setState({axis: 'null'});
    }
    else if (pg === 'yellow' && axis === 'bottom'){
      // nav to black
      this.setState({black:'0%', activePg: 'black'});
      this.setState({axis: 'null'});
    }
    ///- green page -\\\
    else if (pg === 'blue' && axis === 'left'){
      // nav to green
      this.setState({green: '0%', activePg: 'green'});
      this.setState({axis: 'null'});
    }
    else if (pg === 'green' && axis === 'right'){
      // nav back to blue
      this.setState({green: '-100%'});
      this.setState({axis: 'null'});
    }
    ///- orange page -\\\
    else if (pg === 'red' && axis === 'right'){
      // nav to orange
      this.setState({orange: '0%'});
      this.setState({axis: 'null'});
    }
    else if (pg === 'orange' && axis === 'left'){
      // nav back to prev
      this.setState({orange: '-100%'});
      this.setState({axis: 'null'});
    } 
    ///- black page -\\\
    else if (pg === 'black' && axis === 'top'){
      // nav back to yellow
      this.setState({black: '-100%'});
      this.setState({axis: 'null'});   
    }
    else if (pg === 'black' && axis === 'bottom'){
      // nav back to blue
      this.setState({red: '-100%',yellow: '-100%',black: '-100%'});
      this.setState({axis: 'null'});  
    }      
  }

  scroll = e => {
    // 'div' targets div element name to 'turn page'
    let div = e.target.id
    switch (div) {
      case 'blue':
        this.axis(e);
        this.turn(div);
        break;
      case 'red':
        this.axis(e);
        this.turn(div);
        break;
      case 'green':
        this.axis(e);
        this.turn(div);
        break; 
      case 'orange':
        this.axis(e);
        this.turn(div);
        break;   
      case 'yellow':
        this.axis(e);
        this.turn(div);
        break;
      case 'black':
        this.axis(e);
        this.turn(div);
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

  handleClick = (e, str) => {
    this.turn(str);
  }

  hoverSet = (e) => {
    let axis = e.target.id;
    if (axis === 'btn-down'){
      this.setState({axis: 'bottom'});
    } else if (axis === 'btn-up'){
      this.setState({axis: 'top'});
    } else if (axis === 'btn-left'){
      this.setState({axis: 'left'});
    } else if (axis === 'btn-right'){
      this.setState({axis: 'right'});
    } else {
      console.log('hovering', e.target.id);
    }
    // console.log('expecting parent div:', e.parent.id)
  }

  // setPanelState = (e) => {
  //   console.log(e.target.id);
  // }

  render() {
    return (
      <>
        <Blue scroll={this.scroll} click={this.handleClick} hover={this.hoverSet}/>
        <Green scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{left: this.state.green}}/>
        <Red scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.red}}/>
        <Orange scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{right: this.state.orange}}/>
        <Yellow scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.yellow}}/>
        <Black scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.black}}/>
      </>
      );  
  }
}

export default App;
