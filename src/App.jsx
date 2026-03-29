import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Details from './Components/Banner/Details'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Details></Details>
    </>
  )
}

export default App
