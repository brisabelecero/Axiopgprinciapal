import React from 'react'
import HeaderComp from './Components/Header/HeaderComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/pages/home'
import About from '../src/pages/about'
import Certifications from '../src/pages/certifications'
import Digital from '../src/pages/digital'
import Services from '../src/pages/services'
import Contact from '../src/pages/contact'

function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/digital' element={<Digital />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

