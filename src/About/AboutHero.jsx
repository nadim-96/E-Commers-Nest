import React from 'react'
import hero from '../About/hero2.png'

function AboutHero() {
  return (
    <div className="w-full mb-20">
      <img 
        src={hero} 
        alt="Hero" 
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

export default AboutHero
