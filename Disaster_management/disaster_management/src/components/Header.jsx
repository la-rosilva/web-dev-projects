
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/components/ui/danger_icon.json';
import Globe from '@/components/ui/globe.jsx';
import Navbar from './Navbar.jsx';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Header({ getLocationAndSendHelp }) {
  const [message, setMessage] = useState("");
  
  <Navbar />

  const handleClickHelp = () => {
    setMessage("Your location has been sent. Help will be delivered soon!");
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
       <Navbar />
      <div className="absolute top-28 left-5 flex flex-col space-y-4">
        <span className="pointer-events-none font-[350] whitespace-pre-wrap bg-gradient-to-b from-gray-900 to-gray-400 bg-clip-text text-5xl md:text-6xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Help, hope, and safety—
        </span>
        <h6 className="pointer-events-none font-[350] whitespace-pre-wrap bg-gradient-to-b from-gray-900 to-gray-400 bg-clip-text md:text-3xl text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
          delivered when you need it most
        </h6>
      </div>
      <Globe className="absolute left-1/3 translate-y-40 md:left-12 md:top-1/4 md:left-12 md:absolute md:translate-y-5" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      <div className="absolute bottom-10 left-3 flex items-center">
        {!message ? (
          <button
            onClick={() => {
              getLocationAndSendHelp(); // Trigger location retrieval and send help request
              handleClickHelp();
            }}
            className="bg-red-600 rounded-xl px-2 py-1.5 text-white text-shadow font-bold hover:bg-red-700 transition-all duration-300"
          >
            <div className="flex items-center">
              <Lottie options={defaultOptions} height={45} width={45} />
              Help Me Now!
            </div>
          </button>
        ) : (
          <p className="text-red-600 bg-white px-3 py-2 rounded-xl font-bold text-xl">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}




