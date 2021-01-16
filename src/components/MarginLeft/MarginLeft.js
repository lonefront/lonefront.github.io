import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import './MarginLeft.css'

function MarginLeft() {
  return (
    <>
      <div id="subscribe">
      <div id="label">Subscribe</div>
      <div id="mailchimp">
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>
      </div>
      </div>  
    </>
  )
}

export default MarginLeft