import React, { Component } from 'react'
import './Header.css'
import logo from '../../assets/logotype.svg'
import line from '../../assets/line.svg'

class Header extends Component {

  render(){
    return(
      <div className="header">
        <img src={logo} alt="Lonefront" className="logotype"/>
        <img src={line} alt="line"></img>
        <div className="bar"></div>
      </div>
    )
  }
}
export default Header;