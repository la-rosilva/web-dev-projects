import React, {useState} from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Input } from '@nextui-org/input';
import CloseIcon from '@/assets/delete.png';
import HeartIcon from '@/assets/heart.png';
import Logo from '@/assets/favicon.png';
import { useTranslation } from 'react-i18next';
import TranslateLogo from '@/assets/translating.png';



const Navbar = () => {
  
  const {t,i18n}=useTranslation();
  const handleLanguageChange=(e)=>{
    i18n.changeLanguage(e.target.value);
    
  };

  
  


   const[showLoginPortal,setLoginPortal]=useState(false);
    const[showSignUpPortal,setSignUpPortal]=useState(false);
    const [buttonClicked,setButtonClicked]=useState("");
  const handlePortalDisplay=(e)=>{
    const selectedButton=e.target.id;
    setButtonClicked(selectedButton);
    if(selectedButton==='1'){
      setLoginPortal(true);
    }else{
      setSignUpPortal(true);
    }

  }
    
    return (
      <div className='top-0 right-0 p-4 w-full bg-transparent'>
        <div className='flex justify-between items-center '>
          <div className='flex items-center -mt-10'>
          <img src={Logo} className='w-10 h-10'/>
          <div>
            <h5 className='font-bold text-lg block text-gray-700'>CARE</h5>
            <p className='-mt-2.5 text-stone-500'>Crisis Assistance for Recovery and Emergency</p>
            </div>
            </div>
            
         <div className='flex items-center'>
          <img src={TranslateLogo} className='w-8 h-8 mx-2'/>
            {/* <h6>Choose your langauge</h6> */}
            <select onChange={handleLanguageChange} className="text-black text-md font-normal mr-10 hover:text-gray-500 transition-all duration-400 ease-in-out bg-transparent focus:outline-none ">
            <option value="" disabled selected>Choose your langauge</option>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
       
        <div className='hidden md:block md:rounded-full bg-gray-100 px-7 py-3'>
         
        <a href="#Header" className="text-black mr-6 text-md font-normal hover:text-gray-500 transition-all duration-4
        
        00 ease-in-out hover:no-underline">{t('home')}</a>
          <a href="#Map" className="text-black mr-6 text-md font-normal  hover:text-gray-500 transition-all duration-400 ease-in-out hover:no-underline" id='Map'>{t('map')}</a>
          <a href="#Contribute" className="relative inline-flex items-center text-black mr-5 text-md font-normal hover:text-gray-500 transition-all duration-400 ease-in-out hover:no-underline">
  <span className="contribute-text">{t('contribute')}</span>
  <span className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
    <img src={HeartIcon} className="w-5 h-5" />
  </span>
</a>
          <a href="#SafetyMeasures" className="text-black mr-6 text-md font-normal  hover:text-gray-500 transition-all duration-400 ease-in-out hover:no-underline">{t('safetyMeasures')}</a>
     

          <button className='mr-4 border border-black px-3 py-2 rounded-full hover:text-gray-500 hover:border-gray-500 transition-all duration-400 ease-in-out' id='1' onClick={handlePortalDisplay} >
         {t("login")}
          </button>
          <button className='text-white bg-black px-3 py-2 rounded-full hover:bg-gray-700 transition-all duration 300'id='2' onClick={handlePortalDisplay} >
          {t("signUp")}
          </button>
          </div>
          

        </div>
      </div>
      <Dialog
        open={showLoginPortal}
        onClose={() => setLoginPortal(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 overflow-y-auto">
           
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:h-[60vh]"
            >
             
              <div className=" relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 -mt-10">
              <img src={CloseIcon} className=' absolute w-3 h-3 right-3 top-14' onClick={() => setLoginPortal(false)}/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {t("login")}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#Header" method="POST" className="space-y-6">
            <div>
              
              <div className="mt-2">
                
                 <Input
                                className="w-full -mt-2"
                                label={
                                  <span>
                                    {t("email")} <span className="text-red-500 font-bold">*</span>
                                  </span>
                                }
                                id="email"
                                name="email"
                                type="text"
                                required
                                variant="underlined"
                                autoComplete="email"
                              />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                
              
              </div>
              <div className="mt-2">
               
                <Input
                                className="w-full -mt-2"
                                label={
                                  <span>
                                    {t("password")} <span className="text-red-500 font-bold">*</span>
                                  </span>
                                }
                                id="password"
                                name="password"
                                type="password"
                                required
                                variant="underlined"
                                autoComplete="current-password"
                              />
                                <div className=" flex justify-end text-sm mt-2">
                  <a href="#" className="font-light text-teal-600 hover:text-teal-500">
                    {t("forgotPassword")}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-300"
              >
                {t("login")}
              </button>
            </div>
          </form>

        </div>
      </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>


      {/* SIGN UP */}

      <Dialog
        open={showSignUpPortal}
        onClose={() => setSignUpPortal(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 overflow-y-auto">
           
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:h-[80vh]"
            >
             
              <div className=" relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 -mt-10 h-[500px]">
              <img src={CloseIcon} className=' absolute w-3 h-3 right-3 top-14' onClick={() => setSignUpPortal(false)}/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {t("signUp")}
          </h2>
          <p className='text-center text-xs font-light text-teal-600'>{t("signUpDescription")}</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              
              <div className="mt-2">
                 <Input
                                className="w-full -mt-2"
                                label={
                                  <span>
                                    {t("name")} <span className="text-red-500 font-bold">*</span>
                                  </span>
                                }
                                id="name"
                                name="name"
                                required
                                type="text"
                                variant="underlined"
                              />
                
                
                 <Input
                                className="w-full mt-6"
                                label={
                                  <span>
                                     {t("email")}<span className="text-red-500 font-bold">*</span>
                                  </span>
                                }
                                id="email"
                                name="email"
                                type="text"
                                required
                                variant="underlined"
                                autoComplete="email"
                              />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                
              
              </div>
              <div className="mt-2">
               
                <Input
                                className="w-full -mt-2"
                                label={
                                  <span>
                                    {t("password")}<span className="text-red-500 font-bold">*</span>
                                  </span>
                                }
                                id="password"
                                name="password"
                                type="password"
                                required
                                variant="underlined"
                                autoComplete="current-password"
                              />
                                
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-300"
              >
                 {t("signUp")}
              </button>
            </div>
          </form>

        </div>
      </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      
      </div>
    );
  };
  

export default Navbar
