import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import SocialLinks from './Component/SocialLinks'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Experience from './Component/Experience'
import Contact from './Component/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />      
    </>
  )
}

export default App
