import React from 'react'
import nest from '../assestPic/Nest.png'

import { FaFireAlt } from 'react-icons/fa'

function Navbar() {
  return (
   <>
   <div className="navbar bg-white text-black shadow-sm font-grif">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    
   <div className='gap-x-3 flex items-center'>
    <img src={nest} alt="" />
    <div className='flex gap-x-1 items-center'>
        <FaFireAlt  className='text-[#3BB77E]'/>
        <p><a href="">Hot Deals</a></p>
    </div>
   
   </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li> <a href="">Shop </a></li>
      <li><a href="">Mega Menu</a> </li>
      <li><a href="">Vendors </a></li>
      <li><a href="">Blog </a></li>
      <li><a href="">Pages  </a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn bg-[#3BB77E] text-white">Login</a>
  </div>
</div>
   
   </>
  )
}

export default Navbar