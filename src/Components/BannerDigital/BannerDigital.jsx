import React from 'react'
import '../BannerDigital/BannerDigital.css'
import googlePlayButton from '../../assets/images/ImgPlay.png'

const BannerDigital = ({title, image}) => {
    const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.iwebsapp.axioparents&hl=es_MX'

  return (
    <div className="banner-digital" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="banner-digital-title">{title}</h1>
      <div className="button-container">
        <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
            <img src={googlePlayButton} alt="Disponible en Google Play" />
        </a>
      </div>
    </div>
  )
}

export default BannerDigital
