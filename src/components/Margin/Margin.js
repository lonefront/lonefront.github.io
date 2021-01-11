import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import './Margin.css'

function Margin() {
  return (
    <div className="margin">
      <div id="info-box">
        <div id="wrapper">          
        TO NAVIGATE:
        <ul>
          <li>ARROW KEYS &#8593;&#8595;</li>
          <li>SCROLL</li>
          <li>CLICK BUTTONS</li>
        </ul>
        </div>
      </div>
      <div id="subscribe">
      <div id="label">Subscribe</div>
      <div id="mailchimp">
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>
      </div>
      </div>
      
    </div>
  )
}

export default Margin