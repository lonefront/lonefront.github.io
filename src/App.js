import React, {Component} from 'react';
import debounce from 'lodash/debounce'
import './App.css';
import './Header.css'

import logo from './assets/logotype.svg'
import line from './assets/line.svg'
import sigil from './assets/sigil.svg'
import tab from './assets/tab.svg'

import donut from './assets/blue-donut.mp4'
import greenMachine from './assets/donut-24.mp4'

class App extends Component {

  componentDidMount(){
    document.addEventListener('keydown', this.press);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.press);
  }
  state = {
    p02: '-100%',
    p04: '-100%',
    p05: '-100%',
    p01: '-100%',
    p03: '100%',
    axis: 'null',
    activePg: 'p00',
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
    ///- p00 page -\\\
    if (pg === 'p00' && axis === 'bottom'){
      // nav to p02, scroll down
      this.setState({p02: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p02'});
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }
    else if (pg === 'p02' && axis === 'bottom'){
      // nav to p04, scroll down
      this.setState({p04: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p04'});
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout); 
    }
    else if (pg === 'p04' && axis === 'bottom'){
      // nav to p05
      this.setState({p05:'0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p05'});
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    else if (pg === 'p05' && axis === 'bottom'){
      // nav back to p00
      this.setState({p02: '-100%', p04: '-100%', p05: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p00'}); 
      this.setState({down: true});
      setTimeout(this.turnOff, this.state.timeout); 
    }
    ///- p02 page -\\\
    else if (pg === 'p02' && axis === 'top'){
      // nav back to p00
      this.setState({p02:'-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p00'});
      this.setState({up: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- p04 page -\\\
    else if (pg === 'p04' && axis === 'top'){
      // nav back to p02
      this.setState({p04: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p02'});
      this.setState({up: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- p05 page -\\\
    else if (pg === 'p05' && axis === 'top'){
      // nav back to p04
      this.setState({p05: '-100%'});
      this.setState({axis: 'null'}); 
      this.setState({activePg: 'p04'});
      this.setState({up: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- p01 page -\\\
    else if (pg === 'p00' && axis === 'left'){
      // nav to p01
      this.setState({p01: '0%'});
      this.setState({opacity: '50%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p01'});
      this.setState({left: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }
    else if (pg === 'p01' && axis === 'right'){
      // nav back to p00
      this.setState({p01: '-100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p00'});
      this.setState({right: true});
      setTimeout(this.turnOff, this.state.timeout);
    }
    ///- p03 page -\\\
    else if (pg === 'p02' && axis === 'right'){
      // nav to p03
      this.setState({p03: '0%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p03'});
      this.setState({right: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }
    else if (pg === 'p03' && axis === 'left'){
      // nav back to p02
      this.setState({p03: '100%'});
      this.setState({axis: 'null'});
      this.setState({activePg: 'p02'});
      this.setState({left: true});
      setTimeout(this.turnOff, this.state.timeout);  
    }        
  }

  scroll = debounce(e => {
    console.log('scrolling', e.target.id);
    // 'div' targets div element name to 'turn page'
    // let div = e.target.id
    this.axis(e);
    // this.turn(e.target.id);
  }, 47);

  axis = e => {
    // vel is animation velocity
    // const vel = 5;
    // const nVel = -5;
    // v is vertical axis
    let v = e.deltaY
    // h is horizontal axis
    let h = e.deltaX
    // console.log('AXIS VELOCITY X:', v, 'AND Y:', h);
    // vertical axis check
    // if (v > vel && v < 20){
    //   this.setState({axis:'bottom'});
    // } else if (v < nVel && v < 0){
    //   this.setState({axis:'top'});
    // }
    // // horizontal axis check
    // if (h > vel){
    //   this.setState({axis:'right'});
    // } else if (h < nVel && h < 0){
    //   this.setState({axis:'left'})
    // }
    if (v === 1 && h === 0){
      this.setState({axis:'bottom'});
      this.turn(e.target.id);
    } else if (v === -1 && h === 0){
      this.setState({axis:'top'});
      this.turn(e.target.id);
    }
    // horizontal axis check
    if (h === 1 && v === 0){
      this.setState({axis:'right'});
      this.turn(e.target.id);
    } else if (h === -1 && v === 0){
      this.setState({axis:'left'})
      this.turn(e.target.id);
    }
  }
  
  press = (e) => {
    // console.log(e.key, 'pressed');
    e = e || window.event;
    let a = this.state.activePg;
    if (e.keyCode === 38) {
      if (a === 'p02' || a === 'p04' || a === 'p05'){
        this.setState({axis: 'top'})
        this.turn(a);
      }
    } else if (e.keyCode === 40) {
        if (a === 'p00' || a === 'p02' || a === 'p04' || a === 'p05'){
          this.setState({axis: 'bottom'});
          this.turn(a);
      }
    } else if (e.keyCode === 37) {
        if (a === 'p00' || a === 'p03'){
          this.setState({axis: 'left'});
          this.turn(a);
      }
    } else if (e.keyCode === 39) {
        if (a === 'p01' || a === 'p02'){
          this.setState({axis: 'right'});
          this.turn(a);
      }
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
        <div className="header">
          <img src={logo} alt="Lonefront" className="logotype"/>
          <img src={sigil} alt="Logo" className="sigil"/>
            <main className="header-tags">
              <div>
                <img src={tab} alt="tab" className="tag"/>
                SLIDETYPE:[{this.state.activePg}]
              </div>
              <div>
                <img src={tab} alt="tab" className="tag"/>
                INDEX:[]
              </div>
              <div>
                <img src={tab} alt="tab" className="tag"/>
                TIMESTAMP:[]
              </div>
              <div>
                <img src={tab} alt="tab" className="tag"/>
                [INSERT PHRASE VARIABLE]
              </div>
            </main>
          <img src={line} alt="line" className="line"/>
          </div>
          <div className="margin"></div>
            <div id="container-center" className="screen">
              <div id="p00" className="screen" onWheel={this.scroll}>
                <video className="anim" autoPlay muted loop>  
                  <source src={donut} type="video/mp4"/>
                </video>
              </div>
              <div id="p01" className="screen" onWheel={this.scroll} style={{left: this.state.p01}}>
              </div>
              <div id="p02" className="screen" onWheel={this.scroll} style={{bottom: this.state.p02}}>
              </div>
              <div id="p03" className="screen" onWheel={this.scroll} style={{left: this.state.p03}}>
              </div>
              <div id="p04" className="screen" onWheel={this.scroll} style={{bottom: this.state.p04}}>
              </div>
              <div id="p05" className="screen" onWheel={this.scroll} style={{bottom: this.state.p05}}>
                <video id="green-machine" autoPlay muted loop className="anim">  
                  <source src={greenMachine} type="video/mp4"/>
                </video>
              </div>
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
