import React from 'react'
import Home from './Components/Home'
import CardGrid from './Components/CardGrid'
import Reviews from './Components/Reviews'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <Home/>
      <CardGrid/>
      <Reviews/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default App