import React from 'react'
import pic1 from '../Components/weprovide/ic1.png'
import pic2 from '../Components/weprovide/ic2.png'
import pic3 from '../Components/weprovide/ic3.png'
import pic4 from '../Components/weprovide/ic4.png'
import pic5 from '../Components/weprovide/ic5.png'
import pic6 from '../Components/weprovide/ic6.png'



function WeProvide() {
  return (
   <div>
    <h1 className='text-[40px] font-bold text-center mb-8'>We Provide ?</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 '>

    <div className='text-center justify-items-center p-4 rounded-lg shadow-lg space-y-6 '>
        <img src={pic1} alt="" />
        <h1 className='text-[24px] font-bold'>Best Prices & Offers</h1>
        <p className='text-[17px] text-[#7E7E7E]'>There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered
         alteration in some form</p>
         <button className='text-[16px] text-[#3BB77E]'>Read more</button>
    </div>
    <div className='text-center justify-items-center p-4 rounded-lg shadow-lg space-y-6 '>
        <img src={pic2} alt="" />
        <h1 className='text-[24px] font-bold'>Wide Assortment</h1>
        <p className='text-[17px] text-[#7E7E7E]'>There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered
            alteration in some form</p>
         <button className='text-[16px] text-[#3BB77E]'>Read more</button>
    </div>
    <div className='text-center justify-items-center p-4 rounded-lg shadow-lg space-y-6 '>
        <img src={pic3} alt="" />
        <h1 className='text-[24px] font-bold'>Free Delivery</h1>
        <p className='text-[17px] text-[#7E7E7E]'>There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered
         alteration in some form</p>
         <button className='text-[16px] text-[#3BB77E]'>Read more</button>
    </div>
    <div className='text-center justify-items-center p-4 rounded-lg shadow-lg space-y-6 '>
        <img src={pic4} alt="" />
        <h1 className='text-[24px] font-bold'>Easy Returns</h1>
        <p className='text-[17px] text-[#7E7E7E]'>There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered
         alteration in some form</p>
         <button className='text-[16px] text-[#3BB77E]'>Read more</button>
    </div>
    <div className='text-center justify-items-center p-4 rounded-lg shadow-lg space-y-6 '>
        <img src={pic5} alt="" />
        <h1 className='text-[24px] font-bold'>100% Satisfaction</h1>
        <p className='text-[17px] text-[#7E7E7E]'>There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered
         alteration in some form</p>
         <button className='text-[16px] text-[#3BB77E]'>Read more</button>
    </div>
    <div className='text-center justify-items-center p-4 rounded-lg shadow-lg space-y-6 '>
        <img src={pic6} alt="" />
        <h1 className='text-[24px] font-bold'>Great Daily Deal</h1>
        <p className='text-[17px] text-[#7E7E7E]'>There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered
         alteration in some form</p>
         <button className='text-[16px] text-[#3BB77E]'>Read more</button>
    </div>

    </div>
   </div> 
   
  )
}

export default WeProvide