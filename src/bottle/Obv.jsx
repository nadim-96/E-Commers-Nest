import React from 'react'

import pic1 from '../bottle/onion.png'
import pic2 from '../bottle/bottle.png'
import pic3 from '../bottle/vagitable.png'


function Obv() {
  return (
    <div className=' grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 container mx-auto '>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
    </div>
  )
}

export default Obv