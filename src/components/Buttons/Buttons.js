import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {


  // componentDidMount(){
  //   // console.log(this.props.page);
  //   document.onkeydown = checkKey;
  //   function checkKey(e) {
  //     // console.log(this.state.red)
  //     // this.props.press(e);
  //     // console.log(e.keyCode);
  //     let key = e || window.event;
  //     let i = key.keyCode;
  //     if (i === 38) {
  //       // this.setState({axis: 'top'})
  //       console.log(i);
  //     }
  //     else if (i === 40) {
  //       // this.setState({axis: 'bottom'});
  //       console.log(i);
  //     }
  //     else if (i === 37) {
  //       // this.setState({axis: 'left'})
  //       console.log(i);
  //     }
  //     else if (i === 39) {
  //       // this.setState({axis: 'right'})
  //       console.log(i);
  //     }  
  //   }
  // }

  // componentDidUpdate(){
  //   console.log(this.props.page);
  // }

  render(){
    return(
      <>
        <div id="btn-up" className={this.props.up ? 'btn-up-on' : 'btn-up-off'}></div>
        <div id="btn-down" className={this.props.down ? 'btn-down-on' : 'btn-down-off'}></div>
        <div id="btn-left" className={this.props.left ? 'btn-left-on' : 'btn-left-off'}></div>
        <div id="btn-right" className={this.props.right ? 'btn-right-on' : 'btn-right-off'}></div>
      </>
    )
  }
}
export default Buttons;