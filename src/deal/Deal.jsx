import React from 'react'
import pic1 from '../deal/lg1.png'
import pic2 from '../deal/lg2.png'
import pic3 from '../deal/lg3.png'
import pic4 from '../deal/lg4.png'
import pic5 from '../deal/lg5.png'

function Deal() {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6 container mx-auto p-4 '>

    <div className='flex gap-3 items-center bg-[#F4F6FA]  rounded-lg  border border-2 border-[#E8E8E8] '>
        <img src={pic1} alt="" />
        <div>
            <h1 className='text-[17px] font-semibold'>Best prices & offers</h1>
            <p className='text-[#ADADAD] text-[16px]'>Orders $50 or more</p>
        </div>
    </div>
    <div className='flex gap-3 items-center bg-[#F4F6FA]  rounded-lg border border-2 border-[#E8E8E8] '>
        <img src={pic2} alt="" />
        <div>
            <h1 className='text-[18px] font-semibold'>Free delivery</h1>
            <p className='text-[#ADADAD] text-[15px]'>24/7 amazing services</p>
        </div>
    </div>
    <div className='flex gap-3 items-center bg-[#F4F6FA]  rounded-lg border border-2 border-[#E8E8E8] '>
        <img src={pic3} alt="" />
        <div>
            <h1 className='text-[18px] font-semibold'>Great daily deal</h1>
            <p className='text-[#ADADAD] text-[16px]'>When you sign up</p>
        </div>
    </div>
    <div className='flex gap-3 items-center bg-[#F4F6FA]  rounded-lg border border-2 border-[#E8E8E8] '>
        <img src={pic5} alt="" />
        <div>
            <h1 className='text-[17px] font-semibold'>Wide assortment</h1>
            <p className='text-[#ADADAD] text-[16px]'>Mega Discounts</p>
        </div>
    </div>
    <div className='flex gap-3 items-center bg-[#F4F6FA]  rounded-lg border border-2 border-[#E8E8E8] '>
        <img src={pic4} alt="" />
        <div>
            <h1 className='text-[18px] font-semibold'>Easy returns</h1>
            <p className='text-[#ADADAD] text-[16px]'>Within 30 days</p>
        </div>
    </div>

    </div>
  )
}

export default Deal