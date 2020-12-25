import React, { Component } from 'react'
import './Black.css'
// import Buttons from '../Buttons/Buttons'
import donut from '../../assets/splash.mov'

class Black extends Component {
  render(){
    return(
      <>
        <div id="black" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        <video controls autoPlay muted loop className="splash">  
            <source src={donut} type="video/mp4"/>
          </video>
        </div>
      </>
    )
  }
}
export default Black;