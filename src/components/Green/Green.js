import React, { Component } from 'react'
import './Green.css'

class Blue extends Component {
  render(){
    return(
      <>
        <div id="green" className="screen" onWheel={this.props.scroll} style={this.props.style}></div>
      </>
    )
  }
}
export default Blue;