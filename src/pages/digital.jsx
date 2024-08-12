import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'
import ImgDigital1 from '../assets/images/eco.jpg'

const digital = () => {
  return (
    <div>
      <BannerComp title={"Ecosistema Digital"} image={ImgDigital1} />
      <section className="digital-section-a">
        <p>El <span className="distinction-blue"> Ecosistema digital Axio </span> es un conjunto de recursos y estrategias que permiten la formación en:</p>
        <div className="card-digital-container">
          <card className="card-a">Ética</card>
          <card className="card-b">Valores</card>
          <card className="card-c">Habilidades Socioemocionales</card>
        </div>
        <div className="digital-container-a">
          <p>Consta de una <span class="distinction-blue"> aplicación para dispositivos móviles </span> con 
            múltiples recursos formativos en valores para <span className="distinction-green"> alumnos</span>, 
            <span className="distinction-green"> padres de familia</span>, <span className="distinction-green"> docentes </span>, 
            <span className="distinction-green"> servidores públicos </span> y <span className="distinction-green"> trabajadores </span> 
            de la empresa privada. </p>
        </div>
        <div className="digital-container-b">
          <p>Así como de una<span className="distinction-blue"> plataforma </span>que permite la 
          implementación de un modelo de gestión basado en valores y así obtener la 
          <span className="distinction-green"> certificación </span>en la norma correspondiente.</p>
        </div>
        <div className="digital-container-c">
          <h2>Aplicación Axio</h2>
          <p>En nuestra App encontrarás:</p>
          <div className="img-list-contain-a">
            <ul>
              <li>Breves y significativas lecciones que favorecen la reflexión y el análisis en casos prácticos.</li>
              <li>Mensajes cotidianos que favorecen la reflexión y guían la acción para hacer vida los valores.</li>
              <li>Contenido de interés que se renueva constantemente a través de blog y noticias.</li>
              <li>Un diccionario pedagógico de valores que nos permite conocer más acerca de un valor y de la 
                forma de llevarlo a la práctica cotidiana.</li>
            </ul>
          </div>
        </div>
        <div className="digital-container-d">
          <h2>Plataforma de gestión En valores</h2>
          <p>En nuestra plataforma encontrarás:</p>
          <div className="img-list-contain-b">
            <ul>
              <li>Un instrumento que te permitirá diagnosticar el desarrollo ético de tu institución.</li>
              <li>Acompañamiento para el desarrollo de una<span className="distinction-green"> misión</span>,
                <span className="distinction-green"> visión</span>, <span className="distinction-green"> declaración de valores </span> y 
                <span className="distinction-green"> códigos de ética</span>.</li>
              <li>Instrumentos para orientar las políticas de recursos humanos hacia el comportamiento ético de sus miembros.</li>
              <li>Acompañamiento para la implementación de un modelo de gestión que hace vida los valores en la cotidianidad.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  )
}

export default digital
