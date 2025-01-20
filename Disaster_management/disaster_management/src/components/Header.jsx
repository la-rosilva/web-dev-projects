
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/components/ui/danger_icon.json';
import Globe from '@/components/ui/globe.jsx';
import Navbar from './Navbar.jsx';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import MenuIcon from '@/assets/menu.png'
import { useTranslation } from 'react-i18next';



const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Header({ getLocationAndSendHelp }) {
  const{t}=useTranslation();
  const [message, setMessage] = useState("");
  const [showDialog,setShowDialog]=useState(false);
 
  
  <Navbar />


  const handleConfirm=()=>{
    setShowDialog(false);
    getLocationAndSendHelp();
    const helpmebtn=document.getElementById('helpme');
    helpmebtn.style.display='none';
    const message=document.createElement("p");
    message.className = "text-green-600 text-xl font-bold bg-green-300 px-3 py-2 rounded-sm";
    message.textContent = t("locationsent");

    helpmebtn.parentElement.appendChild(message);
    setTimeout(() => {
      message.remove(); // Remove the message
      helpmebtn.style.display = ""; // Show the button again
    }, 5000); // Adjust the duration as needed
  

  };

 

  return (
    
    <div className="animate-fadeIn p-2 relative w-full h-screen overflow-hidden bg-white" id='Header'>
      <img src={MenuIcon} className=" absolute block md:hidden w-5 h-5 right-4 top-4"/>

       <Navbar />
      <div className="absolute top-28 left-5  flex flex-col space-y-4 overflow-visible">
        <span className="pointer-events-none py-3.5 font-semibold whitespace-pre-wrap bg-gradient-to-b from-teal-300 to-gray-800 bg-clip-text text-5xl md:text-5xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {t("greeting")}—
         
        </span>
        <h6 className="pointer-events-none font-normal py-1  whitespace-pre-wrap bg-gradient-to-b from-teal-300 to-gray-800 bg-clip-text md:text-2xl text-xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
          {/* delivered when you need it most */}
          {t("subgreeting")}
          
        </h6>
      </div>
      <Globe className=" aboslute top-1/3 sm:left-1/3 sm:top-1/3  md:top-1/3 md:left-12 md:translate-y-5"
     style={{
        width:"2000px !important",
        height:"2000px !important",
      }} /> 
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      <div className="absolute bottom-10 left-3 flex items-center">
       
          <button
            onClick={()=>setShowDialog(true)}
            
            className="bg-red-600 px-3 rounded-md sm:px-2 sm:py-1.5 text-white text-shadow font-bold hover:bg-red-700 transition-all duration-300" id='helpme'
          >
            <div className="flex items-center">
              <Lottie options={defaultOptions} height={45} width={45} />
              {/* Help Me Now! */}
              {t("help")}
            </div>
          </button>
         
      </div>
      <Dialog open={showDialog} onClose={()=>setShowDialog(false)} className="relative z-10">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity"/>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="bg-white p-6 rounded-md shadow-xl max-w-sm w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t("confirmationpopup")}</h3>
              <p className="text-sm text-gray-600 mb-4">{t("confirmationpopup_sub")}</p>
              <div className="flex justify-around">
                <button
                  onClick={handleConfirm}  // Proceed with sending help if confirmed
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300"
                >
                  {t("yes")}
                </button>
                <button
                  onClick={()=>setShowDialog(false)}  // Just close the dialog if canceled
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  {t("no")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
     
    </div>
  );
}




