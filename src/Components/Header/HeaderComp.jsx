import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const HeaderComp = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Logo</a>
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
