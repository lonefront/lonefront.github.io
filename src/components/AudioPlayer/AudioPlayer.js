import React, { useEffect } from 'react'
import './AudioPlayer.css'

function AudioPlayer() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "//widget.mixcloud.com/media/js/widgetApi.js";
    script.type = "text/javascript"
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <iframe width="100%" height="120" className="embed-player" title="player" src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Flonefront%2F2019-mixtape%2F`} frameBorder="0" ></iframe>
    </>
  )
}

export default AudioPlayer