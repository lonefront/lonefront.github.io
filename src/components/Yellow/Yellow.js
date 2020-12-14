import React, { Component } from 'react'
import './Yellow.css'

class Blue extends Component {
  render(){
    return(
      <>
        <div id="yellow" className="screen" onWheel={this.props.scroll} style={this.props.style}></div>
      </>
    )
  }
}
export default Blue;