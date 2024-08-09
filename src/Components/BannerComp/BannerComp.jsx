import React from 'react'
import './BannerComp.css'

const BannerComp = ({title, image}) => {
  return (
    <div className="banner-comp" style={{ backgroundImage: `url(${image})` }}>
        <h1 className="banner-title">{title}</h1>
    </div>
  )
}

export default BannerComp
