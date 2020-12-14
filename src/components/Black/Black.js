import React, { Component } from 'react'
import './Black.css'

class Blue extends Component {
  render(){
    return(
      <>
        <div id="black" className="screen" onWheel={this.props.scroll} style={this.props.style}></div>
      </>
    )
  }
}
export default Blue;