import React, { Component } from 'react'
import './Red.css'

class Blue extends Component {
  render(){
    return(
      <>
        <div id="red" className="screen" onWheel={this.props.scroll} style={this.props.style}></div>
      </>
    )
  }
}
export default Blue;