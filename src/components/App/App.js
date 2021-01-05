import React, {useEffect, useState, useRef} from 'react'
import { useMediaQuery } from 'react-responsive'
import debounce from 'lodash/debounce'
import './App.css';

import donut from '../../assets/mp4/blue-donut.mp4'
import greenMachine from '../../assets/mp4/donut-24.mp4'

import nss01 from '../../assets/png/nss-01.png'
import nss02 from '../../assets/png/nss-02.png'
import nss03 from '../../assets/png/nss-03.png'
import arrow from '../../assets/png/tab.png'

import Header from '../HeaderDesktop/HeaderDesktop'

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  useEffect(() => {
    document.addEventListener('keydown', press);
    return () => {
      document.removeEventListener('keydown', press);
    }
  })

  // const array = ['phrase one', 'phrase two', 'phrase three', 'etc', 'and more'];


  const [p01, setP01] = useState('-100%');
  const [p02, setP02] = useState('-100%');
  const [p03, setP03] = useState('-100%');
  const [p04, setP04] = useState('-100%');
  const [p05, setP05] = useState('-100%');
  const [activePg, setActivepg] = useState('p00');
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  const turn = (pg, dir) => {
    if (pg === 'p00' && dir === 'bottom'){
      // nav to p01, scroll down
      setP01('0%');
      setActivepg('p01');
      setDown(true);
      setTimeout(turnOff, 200);  
    }
    else if (pg === 'p01' && dir === 'top'){
      // nav back to p00
      setP01('-100%');
      setActivepg('p00');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p01' && dir === 'bottom'){
      // nav to p02
      setP02('0%');
      setActivepg('p02');
      setDown(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p02' && dir === 'top'){
      // nav back to p01
      setP02('-100%');
      setP01('0%');
      setActivepg('p01');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p02' && dir === 'bottom'){
      // nav to p03, scroll down
      setP03('0%');
      setActivepg('p03');
      setDown(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p03' && dir === 'top'){
      // nav back to p02
      setP03('-100%');
      setP02('0%');
      setActivepg('p02');
      setUp(true);
      setTimeout(turnOff, 200);
    }
    else if (pg === 'p03' && dir === 'bottom'){
      // nav to p04
      setP04('0%');
      setActivepg('p04');
      setDown(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p04' && dir === 'top'){
      // nav back to p03
      setP04('-100%');
      setP03('0%');
      setActivepg('p03');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p04' && dir === 'bottom'){
      // nav to p05
      setP05('0%');
      setActivepg('p05');
      setDown(true);
      setTimeout(turnOff, 200);
    }
    else if (pg === 'p05' && dir === 'top'){
      // nav back to p04
      setP05('-100%');
      setP04('0%');
      setActivepg('p04');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p05' && dir === 'bottom'){
      // nav to p00
      setP01('-100%');
      setP02('-100%');
      setP03('-100%');
      setP04('-100%');
      setP05('-100%');
      setActivepg('p00');
      setDown(true);
      setTimeout(turnOff, 200); 
    }
    else if (pg === 'p00' && dir === 'top'){
      setP05('0%');
      setActivepg('p05');
      setUp(true);
      setTimeout(turnOff, 200); 
    }
  }

  const scroll = useRef(debounce(e => {
    velocity(e);
  }, 47, {
    leading: true,
    trailing: false
  })).current;
  

  const velocity = e => {
    if (e.deltaY >= 1 && e.deltaX >= -1){
      turn(e.target.id, 'bottom');
    } else if (e.deltaY <= -1 && e.deltaX <= 1){
      turn(e.target.id, 'top');
    } 
  }
  
  const press = e => {
    e = e || window.event;
    if (e.keyCode === 38) {
      turn(activePg, 'top');
    } else if (e.keyCode === 40) {
      turn(activePg, 'bottom');
    }
  }
  

  const turnOff = () => {
    setUp(false);
    setDown(false);
  }

  const handleClick = (e) => {
    let y = document.getElementById('audio');
    y.currentTime += 300;
    console.log(y);
    let x = e.target.offsetParent.getAttribute("id");
    if (x === 'btn-up'){
      turn(activePg, 'top');
    } else if (x === 'btn-down'){
      turn(activePg, 'bottom');
    }
  }

  const handlePlay = () => {
    console.log('played');
  }
  
    return (
      <>
        {isDesktopOrLaptop && 
        <div id="container">
          <Header activePg={activePg}/>
          <div className="margin">
              <div id="player">
               <iframe width="10%" title="mixcloud" height="60" src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2Flonefront%2F2019-mixtape%2F`} frameborder="0" ></iframe>
              </div>
            ABCDEFG
          </div>
          <div id="container-center" className="screen">
            <div id="p00" className="screen" onWheel={scroll}>
              <video className="anim" autoPlay muted loop>  
                <source src={donut} type="video/mp4"/>
              </video>
            </div>
            <div id="p01" className="screen" onWheel={scroll} style={{bottom: p01}}>
              <video id="green-machine" autoPlay muted loop className="anim">  
                <source src={greenMachine} type="video/mp4"/>
              </video>
            </div>
            <div id="p02" className="screen" onWheel={scroll} style={{bottom: p02}}>
              <img src={nss01} alt="slide 2" className="slide-01"/>
            </div>
            <div id="p03" className="screen" onWheel={scroll} style={{bottom: p03}}>
            <pre id="textblock">
                  {
`LIFE RINGS OUT            FROM INSIDE AN IMPLODED
GLOSSARY: POPPED      PHENOMENA, DISUSED TECHNOS,
COLONIZED SPACES,  HOLLOWED-OUT COMEDOWNS AND THE
INARTICULABLE          NOISES THEY WITHHOLD. THIS
UNBEARABLE              NOISE  BEYOND THE PALE OF
ARTICULATION        IS GIVING LIFE AFTER BABEL: A
RHYTHMIC AND               TONAL PROGRAM  FOR THE
REANIMATION          OF DEAD MATERIALS, RENDERING
IMMANENT A        SYNTONIC GRAMMAR OF THE SPIRIT.
NODES OPEN ON     THE ONE END TO A BRUTALITY: THE
MONOLITHIC         GRIND OF SILICON  ON CARBON, A
GLACIAL SCREAM,    WAKE OF EXPROPRIATED BLOOD AND
DIRT JAMMING  UP  THE OPTICS. ON THE OTHER END, A
COY ECSTASY:         SELF-TAUGHT PROMETHEANS TWO-
STEPPING IN         THE CHURCH OF HOUSE, SPEAKING
LANGUAGES THEY     THEMSELVES   DON'T UNDERSTAND,
SLIDING THROUGH   TRANSATLANTIC FIBERS TO PULL UP
ON THE STEEL    HUSKS OF SERVER FARMS AND HEX THE
SURVEILLANCE   CHAINS  THEIR DAMN SELVES. BETWEEN
THESE TWIN      VALENCES     LIES THE CULTIVATION
OF A           DEEP MNEMONIC NOD, EVER-FLICKERING
BETWEEN  THE   SPECULATIVE FUTURE OF PROGRESS AND
THE  DRONE OF   DECAY. GET IN TUNE WITH CARCASSES
OF        FACTORIES, A CHORUS OF TONGUES SPOUTING
SILENT MANTRAS,         A SILENT STREAM OF ERROR-
RIDDLED PROGRAM    SCRIPTS:  THE FLUX AND SNAP OF
TRAUMA  INCANTS        THE  NOISE BEYOND LANGUAGE
THAT                          COMPELS   MOVEMENT,
AND            SETS             YOU         FREE.`
                  }
                </pre>
            </div>
            <div id="p04" className="screen" onWheel={scroll} style={{bottom: p04}}>
              <img src={nss02} alt="slide 3" className="slide-02"/>
            </div>
            <div id="p05" className="screen" onWheel={scroll} style={{bottom: p05}}>
              <img src={nss03} alt="slide 4" className="slide-02"/>
            </div>
            <div id="btn-up" className={up ? 'btn-on' : 'btn-off'}>
                <img src={arrow} alt="arrow" onClick={handleClick}/>
            </div>
            <div id="btn-down" className={down ? 'btn-on' : 'btn-off'}>
                <img src={arrow} alt="arrow" onClick={handleClick}/>
            </div>
          </div>
        </div>
      }
      </>
      );
  }

export default App;
