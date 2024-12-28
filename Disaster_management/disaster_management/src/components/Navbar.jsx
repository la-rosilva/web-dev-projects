import React from 'react'

const Navbar = () => {
    return (
      <div className='fixed top-0 right-0 p-4'>
        <div className='hidden md:block md:rounded-full bg-gray-200 px-6 py-3'>
        <a href="#Header" className="text-black mr-6 text-md font-normal hover:text-gray-500 transition-all duration-300">Home</a>
          <a href="#Hotspots" className="text-black mr-6 text-md font-normal  hover:text-gray-500 transition-all duration-300">Hotspots</a>
          <a href="#SafetyMeasures" className="text-black mr-6 text-md font-normal  hover:text-gray-500 transition-all duration-300 ">Safety Measures</a>
          <a href="#Essentials" className="text-black mr-10 text-md font-normal  hover:text-gray-500 transition-all duration-300">Essentials</a>
          <button className='mr-4 border border-black px-3 py-2 rounded-full hover:text-gray-500 hover:border-gray-500 transition-all duration-300 ' >
            Login
          </button>
          <button className='text-white bg-black px-3 py-2 rounded-full hover:bg-gray-700 transition-all duration 300' >
            Sign Up
          </button>

        </div>
      </div>
    );
  };
  

export default Navbar
