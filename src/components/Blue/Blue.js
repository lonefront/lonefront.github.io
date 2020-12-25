import React, { Component } from 'react'
import './Blue.css'
// import Buttons from '../Buttons/Buttons'
import donut from '../../assets/splash.mov'

class Blue extends Component {

  render(){
    return(
      <>
        <div id="blue" className="screen" onWheel={this.props.scroll}>
          <video controls autoPlay muted loop className="splash">  
            <source src={donut} type="video/mp4"/>
          </video>
        </div>
      </>
    )
  }
}
export default Blue;