import React from 'react'
import './GobiernoVal.css'

const GobiernoVal = () => {
  return (
    <div>
      <section className="section-gob-a">
        <p>La principal demanda social hacia sus gobernantes 
          es el fortalecimiento de las instituciones a través 
          de la conducta ética de las personas servidoras públicas.</p>
        <p>Prevenir actos de corrupción e ineficacia en el gobierno son 
          las acciones más valoradas por una sociedad cansada de escándalos de abusos y deshonestidad.</p>
      </section>
      <section className="section-gob-b">
        <p>La certificación en la norma <span class="gob-distinction-blue"> “Gobierno con Valores” </span> tiene como objetivo acreditar, 
          reconocer y promover un modelo de gestión pública que tiene como eje la conducta íntegra 
          de los funcionarios gubernamentales.</p>
        <p className="gob-distinction">¡Certifica a tu institución de gobierno!</p>
      </section>
    </div>
  )
}

export default GobiernoVal
