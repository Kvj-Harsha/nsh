import Footer from '@/components/Footer'
import Imghero from '@/components/Imghero'
import Navbar2 from '@/components/Navbar2'
import Showimg from '@/components/Showimg'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar2/>
      {/* <Showimg/> */}
      <Imghero/>
      <Footer/>
    </div>
  )
}

export default page
