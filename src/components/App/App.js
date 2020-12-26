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


  componentDidMount(){
    document.addEventListener('keydown', this.press);
    // this.checkKey();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.press);
  }

  state = {
    red: '-100%',
    yellow: '-100%',
    black: '-100%',
    green: '-100%',
    orange: '100%',
    axis: 'null',
    activePg: 'blue',
    opacity: '0%',
    up: false,
    down: false,
    left: false,
    right: false,
    timeout: 247
  }

  turn = pg => {
    // where pg is pANEL PAgE
    // axis becomes shorthand for axis state
    let axis = this.state.axis
    ///- blue page -\\\
    if (pg === 'blue' && axis === 'bottom'){
      // nav to red, scroll down
      this.setState({red: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'red'});
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }
    else if (pg === 'red' && axis === 'bottom'){
      // nav to yellow, scroll down
      this.setState({yellow: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'yellow'});
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout); 
    }
    else if (pg === 'yellow' && axis === 'bottom'){
      // nav to black
      this.setState({black:'0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'black'});
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    else if (pg === 'black' && axis === 'bottom'){
      // nav back to blue
      this.setState({red: '-100%', yellow: '-100%', black: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'blue'}); 
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout); 
    } 
    ///- red page -\\\
    else if (pg === 'red' && axis === 'top'){
      // nav back to blue
      this.setState({red:'-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'blue'});
      this.setState({up: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- yellow page -\\\
    else if (pg === 'yellow' && axis === 'top'){
      // nav back to red
      this.setState({yellow: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'red'});
      this.setState({up: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- black page -\\\
    else if (pg === 'black' && axis === 'top'){
      // nav back to yellow
      this.setState({black: '-100%'});
      this.setState({axis: 'null'}); 
      this.setState({activePg: 'yellow'});
      this.setState({up: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- green page -\\\
    else if (pg === 'blue' && axis === 'left'){
      // nav to green
      this.setState({green: '0%'});
      this.setState({opacity: '50%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'green'});
      this.setState({left: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }
    else if (pg === 'green' && axis === 'right'){
      // nav back to blue
      this.setState({green: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'blue'});
      this.setState({right: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- orange page -\\\
    else if (pg === 'red' && axis === 'right'){
      // nav to orange
      this.setState({orange: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'orange'});
      this.setState({right: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }
    else if (pg === 'orange' && axis === 'left'){
      // nav back to red
      this.setState({orange: '100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'red'});
      this.setState({left: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }         
  }
  
  scroll = e => {
    // console.log('scrolling', e, 'COUNT:', count);
    // 'div' targets div element name to 'turn page'
    let div = e.target.id
    switch (div) {
      case 'blue':
        this.axis(e);
        this.turn(div);
        // return;
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
    console.log('hit axis func:', e);
    // vel is animation velocity
    const vel = 5;
    const nVel = -5;
    // v is vertical axis
    let v = e.deltaY
    // h is horizontal axis
    let h = e.deltaX
    // console.log('AXIS VELOCITY X:', v, 'AND Y:', h);
    // vertical axis check
    // if (v > vel && v < 20){
    //   this.setState({axis:'bottom'});
    //   // console.log('axis is:', this.state.axis);
    // } else if (v < nVel && v < 0){
    //   this.setState({axis:'top'});
    //   // console.log('axis is:', this.state.axis);
    // }
    // // horizontal axis check
    // if (h > vel){
    //   this.setState({axis:'right'});
    //   // console.log('axis is:', this.state.axis);
    // } else if (h < nVel && h < 0){
    //   this.setState({axis:'left'})
    //   // console.log('axis is:', this.state.axis);
    // } else {
    //   return 0;
    // }
    if (v > vel && v < 20){
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


  // hoverSet = (e) => {
  //   let axis = e.target.id;
  //   if (axis === 'btn-down'){
  //     this.setState({axis: 'bottom'});
  //   } else if (axis === 'btn-up'){
  //     this.setState({axis: 'top'});
  //   } else if (axis === 'btn-left'){
  //     this.setState({axis: 'left'});
  //   } else if (axis === 'btn-right'){
  //     this.setState({axis: 'right'});
  //   } else {
  //     return 0;
  //   }
  // }
  
  press = (e) => {
    // console.log(e.key, 'pressed');
    e = e || window.event;
    let a = this.state.activePg;
    if (e.keyCode === 38) {
      if (a === 'red' || a === 'yellow' || a === 'black'){
        this.setState({axis: 'top'})
        this.turn(this.state.activePg);
      } else {
        // do nothing
      }
    }
    else if (e.keyCode === 40) {
      if (a === 'blue' || a === 'red' || a === 'yellow' || a === 'black'){
        this.setState({axis: 'bottom'});
        this.turn(this.state.activePg);
      } else {
        // fugghetaboutit
      }
    }
    else if (e.keyCode === 37) {
      if (a === 'blue' || a === 'orange'){
        this.setState({axis: 'left'});
        this.turn(this.state.activePg);
      } else {
        // nada
      }
    } else if (e.keyCode === 39) {
        if (a === 'green' || a === 'red'){
          this.setState({axis: 'right'});
          this.turn(this.state.activePg);
          }
        } else {
          }
        }

  turnOff = (e) => {
    this.setState({up: false});
    this.setState({down: false});
    this.setState({left: false});
    this.setState({right: false});
  }
  render() {
    return (
      <div id="container">
        <Header state={this.state.activePg}/>
        <div className="margin"></div>
        <div id="container-center" className="screen">
          <Blue page={this.state.activePg} up={this.state.up} down={this.state.down} left={this.state.left} right={this.state.right} scroll={this.scroll}/>
          <Green page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{left: this.state.green}}/>
          <Red page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.red}}/>
          <Orange page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{left: this.state.orange}}/>
          <Yellow page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.yellow}}/>
          <Black page={this.state.activePg} scroll={this.scroll} click={this.handleClick} hover={this.hoverSet} style={{bottom: this.state.black}}/>
          <div id="btn-up" className={this.state.up ? 'btn-on' : 'btn-off'}>&#8593;</div>
          <div id="btn-down" className={this.state.down ? 'btn-on' : 'btn-off'}>&#8595;</div>
          <div id="btn-left" className={this.state.left ? 'btn-on' : 'btn-off'}>&#8592;</div>
          <div id="btn-right" className={this.state.right ? 'btn-on' : 'btn-off'}>&#8594;</div>
        </div>
      </div>
      );  
  }
}

export default App;
