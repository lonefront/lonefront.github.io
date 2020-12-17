import React, { Component } from 'react'
import './Blue.css'
import Buttons from '../Buttons/Buttons'

class Blue extends Component {

  render(){
    return(
      <>
        <div id="blue" className="screen" onWheel={this.props.scroll}>
        <Buttons up={this.props.up} down={this.props.down} left={this.props.left} right={this.props.right}></Buttons>        
        </div>
      </>
    )
  }
}
export default Blue;