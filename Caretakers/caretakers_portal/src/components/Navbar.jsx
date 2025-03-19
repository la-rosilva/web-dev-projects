import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../assets/icon.png';


const Navbar = () => {
  
  return (
    <div className='h-14 fixed py-3 w-full bg-pink-800 flex items-center justify-between z-10'>
      <div className='flex items-center'>
       <img src={logo} className='w-10 h-10 mx-2'/>
       <h6 className='text-white text-lg -translate-y-1 font-semibold py-3'>CareConnect</h6>
       </div>
      
  

       <Link to="/" className="relative px-10 text-gray-50 text-md group">
  Home
  <span className="absolute left-9 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-13"></span>
</Link>
<Link to="/caregivers" className="relative px-10 text-gray-50 text-md  group">
  Find a caregiver
  <span className="absolute left-9 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-30"></span>
</Link>
<Link to="/about" className="relative px-10 text-gray-50 text-md  group">
  About Us
  <span className="absolute left-8 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-20"></span>
</Link>
<Link to="/contact" className="relative px-10 text-gray-50 text-md  group">
  Contact Us
  <span className="absolute left-9 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-23"></span>
</Link>

        <div className='flex'>

        <button className='px-4 mx-2 py-2 rounded-sm font-semibold  border border-white text-white'>Log in</button>
        <button className='px-4 mx-2 py-2 rounded-sm font-semibold  border border-white text-white'>Sign up</button>
        </div>
        </div>

   
   
   
   
    
  )
}

export default Navbar
