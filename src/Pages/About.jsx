import React from 'react'
import AboutWelcome from '../About/AboutWelcome.jsx'
import WeProvide from '../Components/WeProvide.jsx'
import OurPorformance from '../About/OurPorformance.jsx'
import OurTeam from '../About/OurTeam.jsx'
import AboutHero from '../About/AboutHero.jsx'
const About = () => {
  return (
    <div>
      <AboutWelcome></AboutWelcome>
       <WeProvide></WeProvide>
       <OurPorformance></OurPorformance>
       <OurTeam></OurTeam>
       <AboutHero></AboutHero>
    </div>
  )
}

export default About