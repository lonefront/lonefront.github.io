import React from 'react'
import './Header.css'

import logo from '../../assets/svg/logotype.svg'
import sigil from '../../assets/svg/sigil.svg'
import tab from '../../assets/svg/tab-0.svg'
import disc from '../../assets/svg/disc.svg'

function Header(props) {

  const array = ['phrase one', 'phrase two', 'phrase three', 'etc', 'and more', 'there much'];
  const pageIndex = ['000', '001', '010', '011', '100', '101'];

  return (
    <div id="header-wrapper">
    <div className="header">
      <div className="header-content">
      <img src={logo} alt="Lonefront" className="logotype"/>
        <img src={sigil} alt="Logo" className="sigil"/>
          <main className="header-tags">
            <div>
              <img src={tab} alt="tab" className="tag"/>
              INDEX:[{pageIndex[props.activePg[2]]}]
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
          <hr className="line"/>
      </div>
      <img src={disc} alt="center" className="disc"/>
    <div id="background"></div>
  </div>   
    </div>
);
}

export default Header