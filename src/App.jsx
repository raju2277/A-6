import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Details from './Components/Banner/Details'
import Products from './Components/Tools/Products/Products'

const fetchTools=async ()=>{
  const res=await fetch('/public/data.json')
  return res.json();
}

function App() {
  const productTools=fetchTools();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Details></Details>

      <Suspense fallback={<progress className="progress w-56"></progress>}>
          <Products productTools={productTools}></Products>
      </Suspense>
    </>
  )
}

export default App
