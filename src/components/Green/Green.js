import React, { Component } from 'react'
import './Green.css'
// import Buttons from '../Buttons/Buttons'

class Green extends Component {
  render(){
    return(
      <>
        <div id="green" className="screen" onWheel={this.props.scroll} style={this.props.style}>
        {/* <Buttons page={this.props.page} click={(e)=>this.props.click(e, 'green')} hover={this.props.hover}></Buttons> */}
        </div>
        
      </>
    )
  }
}
export default Green;