import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Services from './Services'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import LoveTune from './LoveTune'

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Services/>
    <LoveTune/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home