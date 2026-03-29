import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div>
                <div className="flex justify-around items-center p-4 bg-base-100 shadow-sm">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>  
            <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>  
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="flex gap-2">
        <div className='flex gap-2 items-center '>
            <div className="relative">
                <a href=""><FaCartShopping></FaCartShopping></a>
                <p className='absolute -top-2 -right-2  bg-red-500 text-xs px-1 text-white rounded-full'>5</p>
            </div>
            <a href="#">Login</a>

        </div>
    <btn className="btn btn-primary rounded-full ">Get Started</btn>
  </div>
</div>
        </div>
    );
};

export default Navbar;