import React from 'react'
import nest from '../assestPic/Nest.png'
import { FaFireAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar bg-white text-black shadow-sm font-grif">
        
        {/* LEFT SIDE */}
        <div className="navbar-start">
          
          {/* MOBILE DROPDOWN BUTTON */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* MOBILE MENU */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>About</a></li>
              <li><a>Shop</a></li>
              <li><a>Mega Menu</a></li>
              <li><a>Vendors</a></li>
              <NavLink to="/blog"><li><a>Blog</a></li></NavLink>
              <li><a>Pages</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          {/* LOGO + HOT DEALS */}
          <div className="gap-x-3 flex items-center">
            <img src={nest} alt="logo" className="w-[110px]" />

            <div className="flex gap-x-1 items-center">
              <FaFireAlt className="text-[#3BB77E]" />
              <p className="font-medium"><a href="">Hot Deals</a></p>
            </div>
          </div>
        </div>

        {/* CENTER — DESKTOP MENU ONLY */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <NavLink to='/about'> <li><a>About</a></li></NavLink>
            <li><a>Shop</a></li>
            <NavLink to='/mega'><li><a>Mega Menu</a></li></NavLink>
            <li><a>Vendors</a></li>
           <NavLink to='/blog'> <li><a>Blog</a></li></NavLink>
            <li><a>Pages</a></li>
           <NavLink to='/contact'> <li><a>Contact</a></li></NavLink>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end">
          <a className="btn bg-[#3BB77E] text-white">Login</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
