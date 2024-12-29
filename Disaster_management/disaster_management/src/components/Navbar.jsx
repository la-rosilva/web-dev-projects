import React, {useState} from 'react'



const Navbar = () => {
    
    return (
      <div className='top-0 right-0 p-4 w-full bg-transparent'>
        <div className='flex justify-between items-center '>
            <h5 className='font-bold text-lg text-shadow'>AidPulse<span className='text-4xl'>.</span></h5>
            

       
        <div className='hidden md:block md:rounded-full bg-gray-200 px-7 py-3'>
        <a href="#Header" className="text-black mr-6 text-md font-normal hover:text-gray-500 transition-all duration-4
        
        00 ease-in-out">Home</a>
          <a href="#Hotspots" className="text-black mr-6 text-md font-normal  hover:text-gray-500 transition-all duration-400 ease-in-out">Hotspots</a>
          <a href="#SafetyMeasures" className="text-black mr-6 text-md font-normal  hover:text-gray-500 transition-all duration-400 ease-in-out">Safety Measures</a>
          <a href="#Essentials" className="text-black mr-10 text-md font-normal  hover:text-gray-500 transition-all duration-400 ease-in-out">Essentials</a>
          <button className='mr-4 border border-black px-3 py-2 rounded-full hover:text-gray-500 hover:border-gray-500 transition-all duration-400 ease-in-out' >
            Login
          </button>
          <button className='text-white bg-black px-3 py-2 rounded-full hover:bg-gray-700 transition-all duration 300' >
            Sign Up
          </button>

        </div>
      </div>
      </div>
    );
  };
  

export default Navbar
