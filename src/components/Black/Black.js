import React, { Component } from 'react'
import './Black.css'
// import Buttons from '../Buttons/Buttons'

class Black extends Component {
  render(){
    return(
      <>
        <div id="black" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        {/* <Buttons page={this.props.page} click={(e)=>this.props.click(e, 'black')} hover={this.props.hover}></Buttons>         */}
        </div>
      </>
    )
  }
}
export default Black;