import React, {useEffect, useState, useRef} from 'react';
import debounce from 'lodash/debounce'
import './App.css';
import './Header.css'

import logo from './assets/logotype.svg'
import line from './assets/line.svg'
import sigil from './assets/sigil.svg'
import tab from './assets/tab.svg'
import disc from './assets/disc.svg'

import donut from './assets/blue-donut.mp4'
import greenMachine from './assets/donut-24.mp4'

function App() {

  useEffect(() => {
    document.addEventListener('keydown', press);

    return () => {
      document.removeEventListener('keydown', press);
    }
  })


  const [p01, setP01] = useState('-100%');
  const [p02, setP02] = useState('-100%');
  const [p03, setP03] = useState('-100%');
  const [p04, setP04] = useState('-100%');
  const [p05, setP05] = useState('-100%');
  const [activePg, setActivepg] = useState('p00');
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const turn = (pg, dir) => {
    ///- p00 page -\\\
    if (pg === 'p00' && dir === 'bottom'){
      // nav to p02, scroll down
      setP02('0%');
      setActivepg('p02');
      setDown(true);
      setTimeout(turnOff, 200);  
    }
    else if (pg === 'p02' && dir === 'bottom'){
      // nav to p04, scroll down
      setP04('0%');
      setActivepg('p04');
      setDown(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p04' && dir === 'bottom'){
      // nav to p05
      setP05('0%');
      setActivepg('p05');
      setDown(true);
      setTimeout(turnOff, 200);
    }
    else if (pg === 'p05' && dir === 'bottom'){
      // nav back to p00
      setP02('-100%');
      setP04('-100%');
      setP05('-100%');
      setActivepg('p00');
      setDown(true);
      setTimeout(turnOff, 200); 
    }
    ///- p02 page -\\\
    else if (pg === 'p02' && dir === 'top'){
      // nav back to p00
      setP02('-100%');
      setActivepg('p00');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    ///- p04 page -\\\
    else if (pg === 'p04' && dir === 'top'){
      // nav back to p02
      setP04('-100%');
      setActivepg('p02');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    ///- p05 page -\\\
    else if (pg === 'p05' && dir === 'top'){
      // nav back to p04
      setP05('-100%');
      setActivepg('p04');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    ///- p01 page -\\\
    else if (pg === 'p00' && dir === 'left'){
      // nav to p01
      setP01('0%');
      setActivepg('p01');
      setLeft(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p01' && dir === 'right'){
      // nav back to p00
      setP01('-100%');
      setActivepg('p00');
      setRight(true);
      setTimeout(turnOff, 200); 
    }
    ///- p03 page -\\\
    else if (pg === 'p02' && dir === 'right'){
      // nav to p03
      setP03('-0%');
      setActivepg('p03');
      setRight(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p03' && dir === 'left'){
      // nav back to p02
      setP03('-100%');
      setActivepg('p02');
      setLeft(true);
      setTimeout(turnOff, 200);
    }        
  }

  const scroll = useRef(debounce(e => {
    console.log('scrolling', e.target.id);
    velocity(e);
  }, 47, {
    leading: true,
    trailing: false
  })).current;
  

  const velocity = e => {
    // console.log('in velocity', 'y:', e.deltaY, 'x:', e.deltaX);
    if (e.deltaY >= 1 && e.deltaX >= -1){
      turn(e.target.id, 'bottom');
    } else if (e.deltaY <= -1 && e.deltaX <= 1){
      turn(e.target.id, 'top');
    } if (e.deltaX >= 1 && e.deltaY >= -1){
      turn(e.target.id, 'right');
    } else if (e.deltaX <= -1 && e.deltaY <= 1){
      turn(e.target.id, 'left');
    }
  }
  
  const press = e => {
    e = e || window.event;
    if (e.keyCode === 38) {
      if (activePg === 'p02' || activePg === 'p04' || activePg === 'p05'){
        turn(activePg, 'top');
      }
    } else if (e.keyCode === 40) {
        if (activePg === 'p00' || activePg === 'p02' || activePg === 'p04' || activePg === 'p05'){
          turn(activePg, 'bottom');
      }
    } else if (e.keyCode === 37) {
        if (activePg === 'p00' || activePg === 'p03'){
          turn(activePg, 'left');
      }
    } else if (e.keyCode === 39) {
        if (activePg === 'p01' || activePg === 'p02'){
          turn(activePg, 'right');
      }
    }
  }
  

  const turnOff = () => {
    setUp(false);
    setDown(false);
    setLeft(false);
    setRight(false);
  }

  // const handleClick = (e) => {
  //   let el = e.target.offsetParent.childNodes[2].id;
  //   document.getElementById(el).style.bottom = '0%';
  //   console.log('top button clicked', document.getElementById(el));
  // }

  
    return (
      <div id="container">
        <div className="header">
          <img src={logo} alt="Lonefront" className="logotype"/>
          <img src={sigil} alt="Logo" className="sigil"/>
          <main className="header-tags">
            <div>
              <img src={tab} alt="tab" className="tag"/>
              SLIDETYPE:[{activePg}]
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
          <img src={disc} alt="center" className="disc"/>
        </div>
        <div className="margin"></div>
        <div id="container-center" className="screen">
          <div id="p00" className="screen" onWheel={scroll}>
            <video className="anim" autoPlay muted loop>  
              <source src={donut} type="video/mp4"/>
            </video>
          </div>
          <div id="p01" className="screen" onWheel={scroll} style={{left: p01}}>
          </div>
          <div id="p02" className="screen" onWheel={scroll} style={{bottom: p02}}>
          </div>
          <div id="p03" className="screen" onWheel={scroll} style={{right: p03}}>
          </div>
          <div id="p04" className="screen" onWheel={scroll} style={{bottom: p04}}>
          </div>
          <div id="p05" className="screen" onWheel={scroll} style={{bottom: p05}}>
            <video id="green-machine" autoPlay muted loop className="anim">  
              <source src={greenMachine} type="video/mp4"/>
            </video>
          </div>
          <div id="btn-up" className={up ? 'btn-on' : 'btn-off'}>&#8593;</div>
          <div id="btn-down" className={down ? 'btn-on' : 'btn-off'}>&#8595;</div>
          <div id="btn-left" className={left ? 'btn-on' : 'btn-off'}>&#8592;</div>
          <div id="btn-right" className={right ? 'btn-on' : 'btn-off'}>&#8594;</div>
        </div>
      </div>
      );
  }

export default App;
