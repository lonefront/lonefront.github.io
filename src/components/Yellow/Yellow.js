import React, { Component } from 'react'
import './Yellow.css'
// import Buttons from '../Buttons/Buttons'

class Yellow extends Component {
  render(){
    return(
      <>
        <div id="yellow" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        {/* <Buttons page={this.props.page} click={(e)=>this.props.click(e, 'yellow')} hover={this.props.hover}></Buttons>         */}
        </div>
      </>
    )
  }
}
export default Yellow;