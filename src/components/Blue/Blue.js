import React, { Component } from 'react'
import './Blue.css'
import Buttons from '../Buttons/Buttons'

class Blue extends Component {

  render(){
    return(
      <>
        <div id="blue" className="screen" onWheel={this.props.scroll}>
        <Buttons page={this.props.page} click={(e)=>this.props.click(e, 'blue')} hover={this.props.hover}></Buttons>        
        </div>
      </>
    )
  }
}
export default Blue;