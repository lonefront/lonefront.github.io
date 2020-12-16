import React, { Component } from 'react'
import './Red.css'
import Buttons from '../Buttons/Buttons'

class Red extends Component {

  render(){
    return(
      <>
        <div id="red" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        <Buttons click={(e)=>this.props.click(e, 'red')} hover={this.props.hover}></Buttons>        
        </div>
      </>
    )
  }
}
export default Red;