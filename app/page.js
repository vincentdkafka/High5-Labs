import React from 'react'
import Hero from './_components/Hero'
import Navbar from './_components/Navbar'
import Services from './_components/Services'

import Approach from './_components/Approach'
import Projects from './_components/Projects'
import HireUs from './_components/HireUs'
import Footer from './_components/Footer'
import Internship from './_components/Internship'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Approach/>
      <Projects/>
      <Internship/>
      <HireUs/>
      <Footer/>

    </div>
  )
}

export default page