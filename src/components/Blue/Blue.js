import React, { Component } from 'react'
import './Blue.css'
// import Buttons from '../Buttons/Buttons'
import donut from '../../assets/blue-donut.mp4'

class Blue extends Component {

  render(){
    return(
      <>
        <div id="blue" className="screen" onWheel={this.props.scroll}>
        {/* <div id="blue" className="screen" onWheel={this.props.debounce}> */}
          <video id="anim" autoPlay muted loop className="blue-donut">  
            <source src={donut} type="video/mp4"/>
          </video>
        </div>
      </>
    )
  }
}
export default Blue;