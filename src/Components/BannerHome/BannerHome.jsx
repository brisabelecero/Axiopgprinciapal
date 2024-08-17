import React, { useEffect, useState } from 'react'
import './BannerHome.css'
import { LottieAnim } from '../LottieComp/LottieAnim'
import animacion1 from '../LottieComp/animations/animation1.json'

const BannerHome = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [anchoAnim, setAncho] = useState('612.2px')
  const [altoAnim, setAlto] = useState('407.72px')

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 1024){
        setAncho('612.2px')
        setAlto('407.72px')
      }else if (window.innerWidth >= 768){
        setAncho('400px')
        setAlto('300px')
      }else{
        setAncho('120px')
        setAlto('150px')
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='banner-home'>
      <div className="banner-home-content">
        <h1>¡Bienvenido!</h1>
        <p>Explora y descubre nuestras certificaciones</p>
        <button className="banner-home-btn">Descubrir</button>
      </div>
      <div>
        <LottieAnim animacion={animacion1} ancho={anchoAnim} alto={altoAnim} />
      </div>
    </section>
  )
}

export default BannerHome
