import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";


import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Profile1 from '../assets/profile1.jpg';

import CloseIcon from '../assets/close.png';

import About from '../assets/user.png';
import React from "react";


import Profile3 from '../assets/profile3.jpg';
import Profile4 from '../assets/profile4.jpg';
import Profile5 from '../assets/profile5.jpg';
import Profile6 from '../assets/profile6.jpg';
import Profile7 from '../assets/profile7.jpg';
import Profile8 from '../assets/profile8.jpg';
import Profile15 from '../assets/profile15.jpg';
import Profile16 from '../assets/profile16.jpg';
import Profile17 from '../assets/profile17.jpg';
import Profile18 from '../assets/profile18.jpg';
import Profile19 from '../assets/profile19.jpg';
import Profile20 from '../assets/profile20.jpg';
import Profile21 from '../assets/profile21.jpg';
import Profile22 from '../assets/profile22.jpg';
import Profile23 from '../assets/profile23.jpg';
import Profile24 from '../assets/profile24.jpg';
import Profile25 from '../assets/profile25.jpg';
import Profile26 from '../assets/profile26.jpg';
import Profile27 from '../assets/profile27.jpg';
import Profile28 from '../assets/profile28.jpg';
import Profile29 from '../assets/profile29.jpg';
import Profile30 from '../assets/profile30.jpg';
import Profile31 from '../assets/profile31.jpg';
import Profile32 from '../assets/profile32.jpg';
import Profile33 from '../assets/profile33.jpg';
import Profile34 from '../assets/profile34.jpg';
import Profile35 from '../assets/profile35.jpg';
import Profile36 from '../assets/profile36.jpg';
import Profile37 from '../assets/profile37.jpg';
import Profile38 from '../assets/profile38.jpg';
import Profile39 from '../assets/profile39.jpg';
import Profile40 from '../assets/profile40.jpg';
import Profile41 from '../assets/profile41.jpg';
import Profile42 from '../assets/profile42.jpg';
import Profile43 from '../assets/profile43.jpg';
import Profile44 from '../assets/profile44.jpg';
import Profile45 from '../assets/profile45.jpg';
import Profile46 from '../assets/profile46.jpg';
import Profile47 from '../assets/profile47.jpg';
import Profile48 from '../assets/profile48.jpg';
import Profile49 from '../assets/profile49.jpg';
import Profile50 from '../assets/profile50.jpg';
import Profile51 from '../assets/profile51.jpg';
import Profile52 from '../assets/profile52.jpg';
import Profile53 from '../assets/profile53.jpg';
import Profile54 from '../assets/profile54.jpg';
import Profile55 from '../assets/profile55.jpg';


export default function FindACaregiver() {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleOpenProfile = (caregiver) => {
    setSelectedProfile(caregiver);
    setShowProfile(true);
  };



  return (
    <div className="pattern min-h-screen p-6">
    

      
      <div className="py-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cards.map((card) => (
          <div key={card.id} className="bg-gray-50 rounded-sm shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105">
            <div className="w-30 h-30 rounded-full overflow-hidden mx-auto mt-5">
            <img src={card.src} alt={card.title} className="w-full h-full object-cover" />
             </div>
            <h3 className="mt-5 text-[17px] font-normal">{card.title}</h3>
            <p className="text-gray-500">{card.description}</p>
            {/* <p className="text-sm text-gray-600 mt-2 text-center">{card.content}</p> */}
            <div className='p-2 ml-8 flex justify-center items-center '>
            <button onClick={()=>handleOpenProfile(card)}className="relative mb-5 mx-3 border border-pink-800 -translate-x-5 text-pink-800 px-1 py-1 hover:text-pink-800 hover:opacity-60 transition-all duration-300 rounded-sm">
            View Profile
            
            </button>
            <button className="relative mb-5 bg-emerald-500 -translate-x-5 text-white px-2 py-1 hover:bg-emerald-600 transition-all duration-300 rounded-sm">
            Book Now
            
            </button>
            </div>
          </div>
        ))}
         <Dialog open={showProfile} onClose={() => setShowProfile(false)} className="relative z-10">
         <DialogBackdrop
    transition
    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-400 data-[leave]:duration-400 data-[enter]:ease-out data-[leave]:ease-in"
  />

        <div className="fixed inset-0 z-10 overflow-hidden flex items-center justify-center p-4">
        <DialogPanel
        transition
        className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:h-[60vh]"
      >

            <div className="bg-white p-6">
            <img
                src={CloseIcon}
                className="w-7 h-7 absolute -top-1 right-5 ml-auto cursor-pointer mt-4 hover:bg-gray-100 transition-all duration-400"
                onClick={() => setShowProfile(false)}
                alt="Close"
              />
              {selectedProfile && (
                <div className='flex h-[50vh]'>
                  <div className='w-1/2 flex flex-col p-5'>
                  <img src={selectedProfile.src} alt={selectedProfile.title} className="w-64 h-64 mt-5 object-cover rounded-sm  " />
                  <h2 className="mt-4 text-2xl font-bold text-pink-800">{selectedProfile.title}</h2>
                 

                  <p className="text-lg text-gray-600">{selectedProfile.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{selectedProfile.content}</p>
                  </div>
                  <div className='w-3/4 flex flex-col p-10 mr-10'>
                  
                  <div className='flex flex-col top-15 absolute'>
                  <div className='flex flex-row gap-1 items-center'>
                    <div className='w-8 h-8 flex bg-gray-200 rounded-full items-center justify-center'>
                  <img src={About} className='w-5 h-5 '/>
                  </div>
                   <h3 className='text-pink-800'>About</h3>
                  
                   </div>
                   

                  </div>
                    </div>
                </div>
              )}
              
            </div>
          </DialogPanel>
        </div>
      </Dialog>


      </div>
    </div>
  );
}



const cards = [
 
    { id: 1, description: "Physiotherapist", title: "Reyansh", src: Profile1, content: "Lana Del Rey is a famous singer." },
    { id: 2, description: "Nurse", title: "Anupama", src: Profile4, content: "Babbu Maan is a Punjabi singer." },
    { id: 3, description: "Cook", title: "Nithya", src: Profile3, content: "Your artist description." },
    { id: 4, description: "Babysitter", title: "Sahana", src: Profile7, content: "Your artist description." },
    { id: 5, description: "Nurse", title: "Anjali", src: Profile15, content: "Lana Del Rey is a famous singer." },
    { id: 6, description: "Cook", title: "Smitha", src: Profile5, content: "Babbu Maan is a Punjabi singer." },
    { id: 7, description: "Housekeeper", title: "Megha", src: Profile6, content: "Your artist description." },
    { id: 8, description: "Elderly Care", title: "Vivaan", src: Profile8, content: "Your artist description." },
    { id: 9, description: "Child Care", title: "Rhea", src: Profile16, content: "Your artist description." },
    { id: 10, description: "Physiotherapist", title: "Harini", src: Profile17, content: "Your artist description." },
    { id: 11, description: "Pet Care", title: "Shreya", src: Profile18, content: "Your artist description." },
    { id: 12, description: "Housekeeper", title: "Varsha", src: Profile19, content: "Your artist description." },
    { id: 13, description: "Nurse", title: "Aparna", src: Profile20, content: "Your artist description." },
    { id: 14, description: "Babysitter", title: "Siddharth", src: Profile21, content: "Your artist description." },
    { id: 15, description: "Cook", title: "Preetham", src: Profile22, content: "Your artist description." },
    { id: 16, description: "Elderly Care", title: "Ramesh", src: Profile23, content: "Your artist description." },
    { id: 17, description: "Pet Care", title: "Shubman", src: Profile24, content: "Your artist description." },
    { id: 18, description: "Housekeeper", title: "Tarun", src: Profile25, content: "Your artist description." },
    { id: 19, description: "Child Care", title: "Daksh", src: Profile26, content: "Your artist description." },
    { id: 20, description: "Physiotherapist", title: "Mrunal", src: Profile27, content: "Your artist description." },
    { id: 21, description: "Nurse", title: "Divya", src: Profile28, content: "Your artist description." },
    { id: 22, description: "Cook", title: "Devaki", src: Profile29, content: "Your artist description." },
    { id: 23, description: "Elderly Care", title: "Neha", src: Profile30, content: "Your artist description." },
    { id: 24, description: "Pet Care", title: "Radha", src: Profile31, content: "Your artist description." },
    { id: 25, description: "Housekeeper", title: "Jyoti", src: Profile32, content: "Your artist description." },
    { id: 26, description: "Child Care", title: "Sunidhi", src: Profile33, content: "Your artist description." },
    { id: 27, description: "Physiotherapist", title: "Shreyas", src: Profile34, content: "Your artist description." },
    { id: 28, description: "Nurse", title: "Rohit", src: Profile35, content: "Your artist description." },
    { id: 29, description: "Cook", title: "Raghav", src: Profile36, content: "Your artist description." },
    { id: 30, description: "Elderly Care", title: "Smriti", src: Profile37, content: "Your artist description." },
    { id: 31, description: "Pet Care", title: "Sanya", src: Profile38, content: "Your artist description." },
    { id: 32, description: "Housekeeper", title: "Isha", src: Profile39, content: "Your artist description." },
    { id: 33, description: "Child Care", title: "Rekha", src: Profile40, content: "Your artist description." },
    { id: 34, description: "Physiotherapist", title: "Ritika", src: Profile41, content: "Your artist description." },
    { id: 35, description: "Nurse", title: "Pooja", src: Profile42, content: "Your artist description." },
    { id: 36, description: "Cook", title: "Manish", src: Profile43, content: "Your artist description." },
    { id: 37, description: "Elderly Care", title: "Radhika", src: Profile44, content: "Your artist description." },
    { id: 38, description: "Pet Care", title: "Yash", src: Profile45, content: "Your artist description." },
    { id: 39, description: "Housekeeper", title: "Ehan", src: Profile46, content: "Your artist description." },
    { id: 40, description: "Child Care", title: "Anirudh", src: Profile47, content: "Your artist description." },
    { id: 41, description: "Physiotherapist", title: "Tanvi", src: Profile48, content: "Your artist description." },
    { id: 42, description: "Nurse", title: "Kiran", src: Profile49, content: "Your artist description." },
    { id: 43, description: "Cook", title: "Devi", src: Profile50, content: "Your artist description." },
    { id: 44, description: "Elderly Care", title: "Nitin", src: Profile51, content: "Your artist description." },
    { id: 45, description: "Pet Care", title: "Rahul", src: Profile52, content: "Your artist description." },
    { id: 46, description: "Housekeeper", title: "Rajiv", src: Profile53, content: "Your artist description." },
    { id: 47, description: "Pet Care", title: "Atharv", src: Profile54, content: "Your artist description." },
    { id: 48, description: "Housekeeper", title: "Paridhi", src: Profile55, content: "Your artist description." }
  ];
  


