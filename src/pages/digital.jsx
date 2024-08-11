import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'

const digital = () => {
  return (
    <div>
      <BannerComp title={"Ecosistema Digital"} image={"assets/images/eco.jpg"} />
      <section className="digital-section-a">
        <p>El <span class="distinction-blue"> Ecosistema digital Axio </span> es un conjunto de recursos y estrategias que permiten la formación en:</p>
        <div className="card-digital-container">
          <card className="card-a">Ética</card>
          <card className="card-b">Valores</card>
          <card className="card-c">Habilidades Socioemocionales</card>
        </div>
        <div className="digital-container-a">
          <p>Consta de una <span class="distinction-blue"> aplicación para dispositivos móviles </span> con 
            múltiples recursos formativos en valores para <span class="distinction-green"> alumnos</span>, 
            <span class="distinction-green"> padres de familia</span>, <span class="distinction-green"> docentes </span>, 
            <span class="distinction-green"> servidores públicos </span> y <span class="distinction-green"> trabajadores </span> 
            de la empresa privada. </p>
        </div>
        <div className="digital-container-b">
          <p>Así como de una<span class="distinction-blue"> plataforma </span>que permite la 
          implementación de un modelo de gestión basado en valores y así obtener la 
          <span class="distinction-green"> certificación </span>en la norma correspondiente.</p>
        </div>
        <div className="digital-container-c">
          <h2>Aplicación Axio</h2>
          <p>En nuestra App encontrarás:</p>
          <div className="img-list-contain">
            <ul>
              <li>Breves y significativas lecciones que favorecen la reflexión y el análisis en casos prácticos.</li>
              <li>Mensajes cotidianos que favorecen la reflexión y guían la acción para hacer vida los valores.</li>
              <li>Contenido de interés que se renueva constantemente a través de blog y noticias.</li>
              <li>Un diccionario pedagógico de valores que nos permite conocer más acerca de un valor y de la 
                forma de llevarlo a la práctica cotidiana.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  )
}

export default digital
