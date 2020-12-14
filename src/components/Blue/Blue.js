import React, { Component } from 'react'
import './Blue.css'

class Blue extends Component {
  render(){
    return(
      <>
        <div id="blue" className="screen" onWheel={this.props.scroll}></div>
      </>
    )
  }
}
export default Blue;