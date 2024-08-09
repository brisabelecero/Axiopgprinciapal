import React from 'react'
import HeaderComp from './Components/Header/HeaderComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/home'
import Quienes from './pages/about'
import Certificaciones from './pages/certifications'
import Digital from './pages/digital'
import Servicios from './pages/services'
import Contacto from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/about' element={<Quienes />} />
        <Route path='/certifications' element={<Certificaciones />} />
        <Route path='/digital' element={<Digital />} />
        <Route path='/services' element={<Servicios />} />
        <Route path='/contact' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

