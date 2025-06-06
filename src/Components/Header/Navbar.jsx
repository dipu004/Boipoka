import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    <Link to='/'> <li className='m-2 border border-green-600 p-2 text-green-500 rounded-lg font-bold'>Home</li></Link>
   <div className='flex justify-center items-center'>
     <Link to='/about'><li className='m-2 font-bold'>About</li></Link>
    <Link to='/readlist'><li className='m-2 font-bold'>ReadList</li></Link>

   </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm rounded-lg mt-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Boipoka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className='btn bg-green-500 text-white rounded-lg'>Sign In</a>
    <a className="btn bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;