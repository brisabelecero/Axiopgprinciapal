import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'

const services = () => {
  return (
    <div>
      <BannerComp title={"Servicios"} image={"/assets/images/serv.png"}/>
      <section className="service-section-a">
        <h2>Diagnóstico de cultura de Integridad</h2>
        <div className="container-services-a">
          <p>El elemento más influyente en el comportamiento de una persona es la 
            cultura de las organizaciones de las que forma parte. Esta cultura se 
            conforma de axiomas (creencias) que son juicios o afirmaciones que son 
            compartidos por una entidad organizacional.</p>
          <p>Para transformar esta cultura el primer paso es develarla, para después 
            tomar acciones quirúrgicas y metódicas que permitan el éxito en su transformación.</p>
        </div>
        <div className="container-services-b">
          <p>Nuestro instrumento SA-92 permite develar la cultura de una organización en 
            temas de ética e integridad.</p>
          <p className="distinction-green">¡Conoce como puedes diagnosticar tu organización!</p>
        </div>
      </section>
      <section className="service-section-b">
        <h2>Dictamen técnico de códigos de Ética</h2>
        <p>Con el afán de promover una nueva cultura ética en las organizaciones se han 
            promovido instrumentos de gestión como: </p>
        <div className="card-container-service">
          <card className="card-service-a">Códigos de ética</card>
          <card className="card-service-b">Códigos de conduca</card>
          <card className="card-service-c">Declaración de valores</card>
        </div>
        <p>que buscan ser un referente próximo de la conducta de las personas. Para garantizar 
          la eficacia de estos instrumentos de gestión, es necesario que reúnan las condiciones 
          mínimas y necesarias para que sin ambigüedades y sólidos fundamentos se constituyan en 
          un referente del actuar basado en la ética.</p>
        <p>El dictamen técnico de estos instrumentos es fundamental para garantizar que cumplan con su objetivo.</p>
        <p className="distinction-blue">Conoce como puedes dictaminar tu código de ética</p>
      </section>
      <section className="service-section-c">
        <h2>Formación</h2>
        <div className="container-service-b">
          <p>No es posible lograr la transformación de una entidad organizacional sin el proceso de detección 
            y sustitución de axiomas erróneos por verdaderos y eso se logra a través de procesos formativos.</p>
        </div>
        <div className="container-service-c">
          <p>La formación tiene como objetivo trasladar los principios especulativos en los que se fundamenta la ética y 
          la axiología a acciones concretas que enriquezcan la toma de decisiones en el plano personal y organizacional</p>
        </div>
      </section>
      <section className="service-section-d">
        <h2>Temas</h2>
        <div className="card-container-temes">
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
        </div>
      </section>
    </div>
  )
}

export default services
