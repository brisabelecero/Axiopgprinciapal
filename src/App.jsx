import React from 'react'
import HeaderComp from './Components/Header/HeaderComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='' element={<about />} />
        <Route path='' element={<certifications />} />
        <Route path='' element={<digital />} />
        <Route path='' element={<services />} />
        <Route path='' element={<contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

