import React, { Component } from 'react'
import './Header.css'
import logo from '../../assets/logotype.svg'
import line from '../../assets/line.svg'
import sigil from '../../assets/sigil.svg'
// import grid from '../../assets/grid-png.png'
import tab from '../../assets/tab.svg'

class Header extends Component {

  state = {
    slidetype: ''
  }

  componentDidMount(){
    this.setState({slidetype:this.props.state})
  }

  render(){
    return(
      <div className="header">
        <img src={logo} alt="Lonefront" className="logotype"/>
        <img src={sigil} alt="Logo" className="sigil"/>
          <main className="header-tags">
            <div>
              <img src={tab} alt="tab" className="tag"/>
              SLIDETYPE:[{this.props.state}]
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
        {/* <img src={grid} alt="grid pattern" className="grid"/> */}
        <img src={line} alt="line" className="line"/>
        {/* <div className="bar"></div> */}
        </div>
    )
  }
}
export default Header;