import React from 'react'
import teamPic1 from '../About/Ourteam/member1.png'
import teamPic2 from '../About/Ourteam/member2.png'
import info1 from '../About/Ourteam/meminfo1.png'
import info2 from '../About/Ourteam/meminfo2.png'


function OurTeam() {
  return (
    <div className='items-center justify-center container mx-auto mb-50 px-5'>
        <h1 className='text-[40px] font-bold text-center mb-10'>Our Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10'>
            <div>
                <p className='text-[#3BB77E] text-[16px]'>Our Team</p>
                <h1 className='text-[48px] font-bold'>Meet Our Expert Team</h1>
               <div className='space-y-4 mt-6'>
                 <p>Proin ullamcorper pretium orci. Donec necscele risque leo.
                    Nam massa dolor imperdiet neccon sequata congue idsem.
                    Maecenas malesuada faucibus finibus.</p>
                   <p>Proin ullamcorper pretium orci. Donec necscele risque leo.
                    Nam massa dolor imperdiet neccon sequata congue idsem.
                    Maecenas malesuada faucibus finibus.</p> 
                   <button className='bg-[#3BB77E] rounded-lg px-4 py-2 text-white'>View All Members</button> 
               </div>
            </div>
            {/* TEAM MEMBER IMAGES */}
            <div className="relative w-fit">
                <img src={teamPic1} alt="Team Member 1" />

                 <img 
                     src={info1} 
                     alt="Team Member Info 1" 
                    className="absolute  bottom-[-20%] left-1/2 -translate-x-1/2 "
    />
</div>
            <div className="relative w-fit">
                <img src={teamPic2} alt="Team Member 2" />

                 <img 
                     src={info2} 
                     alt="Team Member Info 2" 
                    className="absolute  bottom-[-20%] left-1/2 -translate-x-1/2 "
    />
</div>

        </div>
    </div>
  )
}

export default OurTeam