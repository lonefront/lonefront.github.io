import React, {Component} from 'react';
import './App.css';
import Blue from '../Blue/Blue'
import Red from '../Red/Red'
import Yellow from '../Yellow/Yellow'
import Green from '../Green/Green'
import Black from '../Black/Black'
import Orange from '../Orange/Orange'
import Header from '../Header/Header'

class App extends Component {

  // componentDidMount(){
  //   this.setState({activePg: 'blue'});
  // }

  state = {
    red: '-100%',
    yellow: '-100%',
    black: '-100%',
    green: '-100%',
    orange: '-100%',
    axis: 'null',
    activePg: 'blue'
  }

  turn = (pg) => {
    // where pg is pANEL PAgE
    // axis becomes shorthand for axis state
    let axis = this.state.axis
    ///- blue page -\\\
    if (pg === 'blue' && axis === 'bottom'){
      // nav to red, scroll down
      this.setState({red: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'red'});
    }
    ///- red page -\\\
    else if (pg === 'red' && axis === 'top'){
      // nav back to blue
      this.setState({red:'-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'blue'});
    } 
    else if (pg === 'red' && axis === 'bottom'){
      // nav to yellow, scroll down
      this.setState({yellow: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'yellow'});
    }
    ///- yellow page -\\\
    else if (pg === 'yellow' && axis === 'top'){
      // nav back to red
      this.setState({yellow: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'red'});
    }
    else if (pg === 'yellow' && axis === 'bottom'){
      // nav to black
      this.setState({black:'0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'black'});
    }
    ///- green page -\\\
    else if (pg === 'blue' && axis === 'left'){
      // nav to green
      this.setState({green: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'green'});
    }
    else if (pg === 'green' && axis === 'right'){
      // nav back to blue
      this.setState({green: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'blue'});
    }
    ///- orange page -\\\
    else if (pg === 'red' && axis === 'right'){
      // nav to orange
      this.setState({orange: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'orange'});
    }
    else if (pg === 'orange' && axis === 'left'){
      // nav back to red
      this.setState({orange: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'red'});
    } 
    ///- black page -\\\
    else if (pg === 'black' && axis === 'top'){
      // nav back to yellow
      this.setState({black: '-100%'});
      this.setState({axis: 'null'}); 
      this.setState({activePg: 'yellow'});  
    }
    else if (pg === 'black' && axis === 'bottom'){
      // nav back to blue
      this.setState({red: '-100%', yellow: '-100%', black: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'blue'});  
    }      
  }

  scroll = e => {
    this.setState({axis: ''})
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
        // do nothing
    }
  }

  axis = e => {
    // vel is animation velocity
    const vel = 15;
    const nVel = -15;
    // v is vertical axis
    let v = e.deltaY
    // h is horizontal axis
    let h = e.deltaX
    // vertical axis check
    if (v > vel){
      this.setState({axis:'bottom'});
      // console.log('axis is:', this.state.axis);
    } else if (v < nVel && v < 0){
      this.setState({axis:'top'});
      // console.log('axis is:', this.state.axis);
    }
    // horizontal axis check
    if (h > vel){
      this.setState({axis:'right'});
      // console.log('axis is:', this.state.axis);
    } else if (h < nVel && h < 0){
      this.setState({axis:'left'})
      // console.log('axis is:', this.state.axis);
    } else {
      return 0;
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
      return 0;
    }
  }

  render() {
    return (
      <>
        <Header></Header>
        <Blue page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet}/>
        <Green page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{left: this.state.green}}/>
        <Red page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.red}}/>
        <Orange page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{right: this.state.orange}}/>
        <Yellow page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.yellow}}/>
        <Black page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.black}}/>
      </>
      );  
  }
}

export default App;
