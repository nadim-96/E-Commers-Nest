import React from 'react'
import banner from '../About/banner.png'
import pic1 from '../About/pic1.png'
import pic2 from '../About/pic2.png'
import pic3 from '../About/pic3.png'

function AboutWelcome() {
  return (
    <div
      className="
        container mx-auto 
        flex flex-col lg:flex-row 
        gap-10 lg:gap-20 
        justify-center items-center 
        my-10 lg:my-20 px-5
      "
    >

      {/* LEFT SECTION - BIG IMAGE */}
      <div className="w-full lg:w-[646px] lg:h-[736px]">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* RIGHT SECTION - SMALLER HEIGHT + VERTICAL CENTERED */}
      <div
        className="
          w-full lg:w-[500px]         
          flex flex-col 
          justify-center              
          space-y-5 lg:space-y-[30px]
          lg:h-[500px]                
        "
      >
        <h1 className="text-3xl lg:text-[40px] font-bold">Welcome to Nest</h1>

        <p className="text-[15px] lg:text-[14px] text-[#7E7E7E] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate id est laborum.
        </p>

        <p className="text-[15px] lg:text-[14px] text-[#7E7E7E] leading-relaxed">
         Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
        interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
        orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
        lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate id est laborum.
        </p>

        {/* 3 SMALL IMAGES */}
        <div className="grid grid-cols-3 gap-3 lg:gap-4 mt-5 lg:mt-10">
          <img src={pic1} alt="" className="w-full rounded-lg" />
          <img src={pic2} alt="" className="w-full rounded-lg" />
          <img src={pic3} alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default AboutWelcome
