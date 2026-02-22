import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white pb-0">
      <Navbar />
      <Hero />
      <AboutPreview />
      <Footer />
    </div>
  )
}

export default Home