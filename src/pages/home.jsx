import React from 'react'
import BannerHome from '../Components/BannerHome/BannerHome'

const home = () => {
  return (
    <div>
        <BannerHome />
        <section className='home-container'>
          <div className='home-text'>
            <h2 className='home-title'>Fundación Axio</h2>
            <p>Es una organización sin fines de lucro fundada en 2013 que agrupa a
              <span class="home-distinction"> académicos</span>,<span class="home-distinction"> investigadores</span>,
              <span class="home-distinction"> líderes de opinión</span> y<span class="home-distinction"> personas comprometidas </span>
              en coadyuvar en la creación de una mejor sociedad, libre de violencia,
              corrupción, desigualdad y discriminación.</p>
          </div>
        </section>
        <section className='home-container'>
          <div className='home-text'>
            <p>Para cumplir con nuestro objetivo hemos desarrollado diversos instrumentos, 
              recursos formativos, metodologías de gestión y certificaciones que permiten hacer 
              vida los valores en la cotidianidad.</p>
          </div>
        </section>
        <section className="view-home-container">
          <h3>¡Conoce lo que Axio puede hacer por ti y por tu organización!</h3>
        </section>
    </div>
  )
}

export default home
