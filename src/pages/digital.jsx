import React from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'

const digital = () => {
  return (
    <div>
      <BannerComp title={"Ecosistema Digital"} image={"../assets/images/eco.jpg"} />
      <section className="digital-section-a">
        <p>El Ecosistema digital Axio es un conjunto de recursos y estrategias que permiten la formación en:</p>
        <div className="card-digital-container">
          <card className="card-a">Ética</card>
          <card className="card-b">Valores</card>
          <card className="card-c">Habilidades Socioemocionales</card>
        </div>
      </section>
    </div>
  )
}

export default digital
