import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'

const about = () => {
  return (
    <div>
      <BannerComp title={"¿Quíenes Somos?"} image={"../src/assets/images/quienes-1.jpg"} />
      <section className='mission'>
        <div className="txt-container">
          <h2>Misión</h2>
          <p>Nuestra misión es impulsar una agenda de ética y valores en el gobierno, la empresa privada 
           y la educación que coadyuve a prevenir el fenómeno de la corrupción, la injustica, la delincuencia, 
           la violencia y todos aquellos males que lastiman a la sociedad.</p>
        </div>
      </section>
      <section className='vision'>
        <div className="txt-container">
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
