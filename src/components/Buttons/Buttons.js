import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {

  render(){
    return(
      <>
        <div id={this.props.up ? 'btn-up-on' : 'btn-up-off'} className="button"></div>
        <div id={this.props.down ? 'btn-down-on' : 'btn-down-off'} className="button"></div>
        <div id={this.props.left ? 'btn-left-on' : 'btn-left-off'} className="button"></div>
        <div id={this.props.right ? 'btn-right-on' : 'btn-right-off'} className="button"></div>
      </>
    )
  }
}
export default Buttons;