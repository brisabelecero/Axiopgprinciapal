import React, { useState } from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'
import EducacionVal from '../Components/EducacionVal/EducacionVal'
import GobiernoVal from '../Components/GobiernoVal/GobiernoVal'
import GestionVal from '../Components/GestionVal/GestionVal'
import CertifVal from '../Components/CertifVal/CertifVal'

const certifications = () => {
  const [activeSection, setActiveSection] = useState('educacionConValores')

  const handleButtonClick = (section) => {
    setActiveSection(section)
  }

  return (
    <div>
      <BannerComp title={"Certificaciones"} image={"../assets/images/certif-1.png"} />
      <div className="btn-container">
        <button className="btn-certif" onClick={() => handleButtonClick('educacionConValores')}>Educación con Valores</button>
        <button className="btn-certif" onClick={() => handleButtonClick('gobiernoConValores')}>Gobierno con Valores</button>
        <button className="btn-certif" onClick={() => handleButtonClick('gestionPorValores')}>Gestión por Valores</button>
        <button className="btn-certif" onClick={() => handleButtonClick('certificacionIndividual')}>Certificación Individual</button>
      </div>
      <div className="section-container">
        {activeSection === 'educacionConValores' && <EducacionVal />}
        {activeSection === 'gobiernoConValores' && <GobiernoVal />}
        {activeSection === 'gestionPorValores' && <GestionVal />}
        {activeSection === 'certificacionIndividual' && <CertifVal />}
      </div>
    </div>
  )
}

export default certifications
