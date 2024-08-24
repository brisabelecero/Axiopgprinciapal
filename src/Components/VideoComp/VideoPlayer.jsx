import React from 'react'

const VideoPlayer = ({videoSrc, autoplay = true, loop = true}) => {
  return (
    <video src={videoSrc} autoPlay={autoplay} loop className="video-player">
    </video>
  )
}

export default VideoPlayer
