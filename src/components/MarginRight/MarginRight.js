import React from 'react'
import './MarginRight.css'

function MarginRight(props) {
  return (
    <>
      <div id="info-box">
        <div id="info-wrapper">          
          TO NAVIGATE:
          <ul id="info-box-list">
            <li>ARROW KEYS &#8593;&#8595;</li>
            <li>SCROLL</li>
            <li>CLICK BUTTONS</li>
          </ul>
        </div>  
      </div>
      <div id="scanner">
      <ul id="scanner-list">
        <li onClick={(e)=>props.jump('p00')}>Main</li>
        <li>&#183;</li>
        <li>&#183;</li>
        <li onClick={(e)=>props.jump('p01')}>Charts</li>
        <li>&#183;</li>
        <li>&#183;</li>
        <li onClick={(e)=>props.jump('p02')}>Art-01</li>
        <li>&#183;</li>
        <li>&#183;</li>
        <li onClick={(e)=>props.jump('p03')}>Bio</li>
        <li>&#183;</li>
        <li>&#183;</li>
        <li onClick={(e)=>props.jump('p04')}>Art-02</li>
        <li>&#183;</li>
        <li>&#183;</li>
        <li onClick={(e)=>props.jump('p05')}>Art-03</li>
      </ul>
    </div>
  </>
)
}

export default MarginRight