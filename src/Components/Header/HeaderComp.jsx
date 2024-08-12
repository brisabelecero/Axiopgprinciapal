import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/AXIO.png'

const HeaderComp = () => {
    return (
        <header className="header">
            <Link to="/">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <nav className="navbar">
                <Link to="/">Inicio</Link>
                <Link to="/about">Quienes Somos</Link>
                <Link to="/certifications">Certificaciones</Link>
                <Link to="/digital">Ecosistema Digital</Link>
                <Link to="/services">Servicios</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </header>
    )
}

export default HeaderComp
