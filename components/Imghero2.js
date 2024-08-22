import React from 'react'
import Featuresimg from './Featuresimg'
import Casaroule from './Casaroule'
import Stats from './Stats'
import Preimg2 from './Preimg2'
import TechStack from './TechStack'
import GoogleColabButton from './GoogleColabButton'

const Imghero2 = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <Preimg2/>
        <Casaroule/>
        <Featuresimg/>
        <TechStack/>
        <br/><br/>
        <GoogleColabButton/>
        <Stats/>
      </section>
    </div>
  )
}

export default Imghero2
