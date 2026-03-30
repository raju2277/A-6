import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Details from './Components/Banner/Details'
import Products from './Components/Tools/Products/Products'
import { ToastContainer } from 'react-toastify';
import Steps from './Components/Steps/Steps'
import Pricing from './Components/Pricing/Pricing'
import Workflow from './Components/Workflow/Workflow'
import Footer from './Components/Footer/Footer'



const fetchTools=async ()=>{
  const res=await fetch('/data.json')
  return res.json();
}

function App() {
  const [cartCount,setCartCount]=useState(0);
  const productTools=fetchTools();
  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Banner></Banner>
      <Details></Details>

      <Suspense fallback={<div className='flex my-10 justify-center'><progress className="progress w-56 "></progress></div>}>
          <Products productTools={productTools} cartCount={cartCount} setCartCount={setCartCount}></Products>
      </Suspense>
      <ToastContainer />
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
