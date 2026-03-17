import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

const layout = ({children}) => {
  return (
    <div>

        <Navbar variant="demo"/>

        {children}
        <Footer/>
    </div>
  )
}

export default layout