import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'
import ImgContact from '../assets/images/contact.jpg'
import GifWork from '../assets/images/work-progress.gif'

const contact = () => {
  return (
    <div>
      <BannerComp title={"Contacto"} image={ImgContact}/>
      <section className="contact-section-a">
        <h1>En Construcción</h1>
        <img src={GifWork} alt="work in progress" className="work-gif" />
      </section>
    </div>
  )
}

export default contact
