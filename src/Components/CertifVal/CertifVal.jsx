import React from 'react'
import './CertifVal.css'
import GifWork from '../../assets/images/work-progress.gif'

const CertifVal = () => {
  return (
    <div>
      <section className="section-individual-a">
      <h1>En Construcción</h1>
      <img src={GifWork} alt="work in progress" className="work-gif" />
      </section>
    </div>
  )
}

export default CertifVal
