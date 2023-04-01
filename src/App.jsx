import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import './global.css'

import { Subhome } from './components/Home/Subhome'
import { Gallery } from './components/Gallery/Gallery'
import { Budget } from './components/Budget/Budget'
import { Footer } from './components/Footer/Footer'

export function App() {

  return (
    <>
    
      <Header />
      <Home />
      <Subhome />
      <Gallery />
      <Budget />
      <Footer />

    </>
  )
}
