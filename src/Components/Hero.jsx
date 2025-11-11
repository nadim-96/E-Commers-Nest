import React from 'react'
import bg from '../assestPic/bg.png';




function Hero() {
  return (
   <>
 <div className="w-full">
  <img 
    src={bg} 
    alt="background" 
    className="w-full h-auto object-cover" 
  />
</div>

   </>
  )
}

export default Hero