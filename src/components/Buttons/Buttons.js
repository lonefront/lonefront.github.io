import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {

  // componentDidMount(){
  //   console.log(this.props.page);
  // }

  componentDidUpdate(){
    console.log(this.props.page);
  }

  render(){
    return(
      <>
        <div id="btn-up" className="btn-ud" onClick={this.props.click} onMouseOver={this.props.hover}></div>
        <div id="btn-down" className="btn-ud" onClick={this.props.click} onMouseOver={this.props.hover}></div>
        <div id="btn-left" className="btn-lr" onClick={this.props.click} onMouseOver={this.props.hover}></div>
        <div id="btn-right" className="btn-lr" onClick={this.props.click} onMouseOver={this.props.hover}></div>
      </>
    )
  }
}
export default Buttons;