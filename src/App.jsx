import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components//footer/footer'
const App = () => {
  return (
        <>
            <Header/>
            <Nav/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            
        </>
  )
}

export default App