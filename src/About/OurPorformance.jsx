import React from 'react'
import pic1 from '../About/pf1.png'

function OurPorformance() {
  return (
 <div>
        <div className='mt-[72px] flex flex-col lg:flex-row gap-8 lg:gap-16 container mx-auto px-5 items-center'>
        <div>
        <img src={pic1} alt="" />
        </div>
        <div className=' gap-2 flex flex-col'>
         <p className='text-[24px] font-bold text-[#B6B6B6]'>Our performance</p>
         <h1 className='text-[46px] font-bold'>Your Partner for e-commerce grocery
            solution</h1>
         <p className='text-[16px] text-[#7E7E7E]'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto</p>
         <p className='text-[16px] text-[#7E7E7E] '>Pitatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
        </div>
    </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-16 mb-20'>
        <div className=' p-8 space-y-2'>
            <h1 className='text-[38px] font-bold '>Who we are</h1>
            <p className='text-[16px] text-[#7E7E7E]'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
            mattis enim ut tellus eros donec ac odio orci ultrices in.
            ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div className=' p-8 space-y-2'>
            <h1 className='text-[38px] font-bold '>Our history</h1>
            <p className='text-[16px] text-[#7E7E7E]'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
            mattis enim ut tellus eros donec ac odio orci ultrices in.
            ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div className=' p-8 space-y-2'>
            <h1 className='text-[38px] font-bold '>Our mission</h1>
            <p className='text-[16px] text-[#7E7E7E]'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
            mattis enim ut tellus eros donec ac odio orci ultrices in.
            ellus eros donec ac odio orci ultrices in.</p>
        </div>
    </div>
 </div>
  )
}

export default OurPorformance