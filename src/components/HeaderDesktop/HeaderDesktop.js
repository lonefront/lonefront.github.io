import React from 'react'
import './Header.css'

import logo from '../../assets/svg/logotype.svg'
import line from '../../assets/svg/line.svg'
import sigil from '../../assets/svg/sigil.svg'
import tab from '../../assets/svg/tab-0.svg'
import disc from '../../assets/svg/disc.svg'

function Header(props) {

  const array = ['phrase one', 'phrase two', 'phrase three', 'etc', 'and more'];

  return (
    <div className="header">
      <img src={logo} alt="Lonefront" className="logotype"/>
        <img src={sigil} alt="Logo" className="sigil"/>
          <main className="header-tags">
            <div>
              <img src={tab} alt="tab" className="tag"/>
              INDEX:[{props.activePg[1]}{props.activePg[2]}]
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
              [{array[props.activePg[2]]}]
            </div>
          </main>
        <img src={line} alt="line" className="line"/>
      <img src={disc} alt="center" className="disc"/>
    <div id="header-container"></div>
  </div>   
);
}

export default Header