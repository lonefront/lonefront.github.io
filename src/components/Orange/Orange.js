import React, { Component } from 'react'
import './Orange.css'
import Buttons from '../Buttons/Buttons'

class Orange extends Component {
  render(){
    return(
      <>
        <div id="orange" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        <Buttons page={this.props.page} click={(e)=>this.props.click(e, 'orange')} hover={this.props.hover}></Buttons>        
        </div>
      </>
    )
  }
}
export default Orange;