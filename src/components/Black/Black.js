import React, { Component } from 'react'
import './Black.css'
// import Buttons from '../Buttons/Buttons'
import donut from '../../assets/donut-24.mp4'

class Black extends Component {
  render(){
    return(
      <>
        <div id="black" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        <video id="anim" autoPlay muted loop className="green-machine">  
            <source src={donut} type="video/mp4"/>
          </video>
        </div>
      </>
    )
  }
}
export default Black;