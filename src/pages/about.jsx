import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'
import ImgQuiens from '../assets/images/quienes-1.jpg'
import ImgMission from '../assets/images/ImgMision.jpg'
import ImgVision from '../assets/images/ImgVision.jpg'

const about = () => {
  return (
    <div>
      <BannerComp title={"¿Quíenes Somos?"} image={ImgQuiens} />
      <section className='mission'>        
        <div className="txt-container-a">
          <h2>Misión</h2>
          <p>Nuestra misión es impulsar una agenda de ética y valores en el gobierno, la empresa privada 
           y la educación que coadyuve a prevenir el fenómeno de la corrupción, la injustica, la delincuencia, 
           la violencia y todos aquellos males que lastiman a la sociedad.</p>
        </div>
        <img src={ImgMission} alt="" />
      </section>
      <section className='vision'>
        <img src={ImgVision} alt="" />
        <div className="txt-container-b">
          <h2>Visión</h2>
          <p>Para 2030 lograremos implementar nuestro ecosistema Axio, nuestra metodología de gestión basada en 
           la integridad y nuestros diagnósticos de cultura de integridad en más de cinco países de Latinoamérica</p>
        </div>
      </section>
      <section className='values'>
        <h2>Nuestros Valores</h2>
        <div className="cards-container"></div>
      </section>
    </div>
  )
}

export default about
