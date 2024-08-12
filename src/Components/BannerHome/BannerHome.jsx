import React from 'react'
import './BannerHome.css'
import { Lottieanimacion } from '../LottieComp/LottieAnimation'
import animacion1 from '../LottieComp/animations/animation1.json'

const BannerHome = () => {

  return (
    <section className='banner-home'>
      <div className="banner-home-content">
        <h1>¡Bienvenido!</h1>
        <p>Explora y descubre nuestras certificaciones</p>
        <button className="banner-home-btn">Descubrir</button>
      </div>
      <div>
        <Lottieanimacion animacion={animacion1} ancho={"612.2px"} alto={"407.72px"} />
      </div>
    </section>
  )
}

export default BannerHome
