import React, { Component } from 'react'
import './Header.css'
import logo from '../../assets/logotype.svg'

class Header extends Component {

  render(){
    return(
      <>
        <img src={logo} alt="Lonefront" className="logotype"/>
      </>
    )
  }
}
export default Header;