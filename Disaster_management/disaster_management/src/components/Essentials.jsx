
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';

import { Checkbox, CheckboxGroup } from 'rsuite';
import {RadioGroup, Radio} from 'rsuite';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CreditCardIcon } from '@heroicons/react/24/outline'
// import QRCode from 'qrcode.react';
import ReactQRCode from 'react-qr-code';
import { CheckIcon, ChevronRightIcon } from "lucide-react";
 
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button.jsx";
import { useTranslation } from 'react-i18next';


import 'rsuite/dist/rsuite.min.css'; 
import volunteer from '@/assets/voluntary.png';

const Essentials = () => {
    const {t,i18n}=useTranslation();
  const [otherChecked, setOtherChecked] = useState(false);
  const [selectedOption,setSelectedOption]=useState('');
  const[showPayPortal,setShowPayPortal]=useState(false);
  const[paymentMethod,setPaymentMethod]=useState("");
  const[showPayPortal_UPI,setShowPayPortal_UPI]=useState(false);
  // const[paymentMethod_UPI,setPaymentMethod_UPI]=useState("");
  const [inputValue,setInputValue]=useState("");

  
    const [selectedNgo,setSelectedNgo]=useState("");
    const[upiId,setUpiId]=useState("");
    const[payeeName,setPayeeName]=useState("");
  const handleOtherCheck = (value) => {
    setOtherChecked(value.includes('Other'));
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
  

    const submitButton=document.getElementById('sub');


    submitButton.textContent=t("submitted");
    submitButton.disabled=true;
    const form = document.getElementById('essentials'); // Access the form using its ID
  form.reset();
  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.checked = false;
  });
    alert("Thank you for your kindness and generosity ❤️");
  }

  const handleOptionChange = (value) => {
    setSelectedOption(value); 
  };

  const [DonationType,setDonationType]=useState('Monetary')

  const handlePayment=(e)=>{
    const selectedMethod=e.target.value;

    setPaymentMethod(selectedMethod);
    if(selectedMethod==="Credit card"){
      setShowPayPortal(true);
      setShowPayPortal_UPI(false);

    }else if(selectedMethod==='UPI'){
      setShowPayPortal(false);
      setShowPayPortal_UPI(true);
    }else{
      setShowPayPortal(false);
      setShowPayPortal_UPI(false);
    }
  }


 

  const ngoDetails = {
    NGO1: { upiId: "hasthapradha@okbank", name: "Hasthapradha Charitable Trust" },
    NGO2: { upiId: "mahamaya@okbank", name: "Mahamaya Foundation" },
  };

  const handleNgoChange=(e)=>{
    const selectedNgo=e.target.value;
    setSelectedNgo(selectedNgo);
    if (ngoDetails[selectedNgo]) {
      setUpiId(ngoDetails[selectedNgo].upiId); // Update UPI ID
      setPayeeName(ngoDetails[selectedNgo].name); // Update Payee Name
    }
  };
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }
 
  const upiString=`upi://pay?pa=${upiId}&pn=${payeeName}&am=${inputValue}&cu=INR`;
  const qrCodeURL = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(
    upiString
  )}&choe=UTF-8`;
  
 

  return (
    
    <div className="animate-fadeIn relative w-full h-screen flex justify-center bg-slate-200 overflow-hidden" id='Contribute'>
      <div className="overflow-y-auto sm:overflow-y-hidden bg-white rounded-sm w-full h-full">
        <form onSubmit={handleSubmit} method="POST" id='essentials'>
      <button className=' absolute bottom-4 left-1/2 -ml-10 sm:w-20 px-2 py-2 rounded-sm glass-button' type='submit' id='sub'>{t("submitbtn")}</button>
     
        <div className='flex flex-wrap justify-center items-center mt-2'>
        <img className=' w-10 h-10 -ml-5 sm:w-12 sm:h-12 mr-5'src={volunteer} alt='volunteer_image'/>
        <h1 className=' text-lg text-center sm:text-center sm:text-3xl'>{t("formtitle")}</h1>
        </div>
        <h6 className=' text-sm text-center font-normal sm:text-center sm:font-normal'>{t("formsubtitle")}</h6>
        <div className='h-screen overflow-y-auto'>
        <div className="relative flex justify-center flex-col sm:flex-row gap-4">
            {/* <button className=' absolute bottom-0 sm:w-20 px-3 py-2 rounded-sm glass-button transition-all'>Submit</button> */}
          {/* Left Section: Personal Information */}
          <div className=" px-3 sm:w-1/2 space-y-4">
          
            <div className="w-full h-[450px] sm:h-[530px] bg-blue-50 p-3 rounded-sm mt-5 box-shadow">
              <h3 className=" mt-1 text-sm sm:mt-3 sm:text-lg font-semibold">1. {t("personalInformation")}</h3>
              {/* Full Name Field */}
              <Input
                className="w-full -mt-2"
                label={
                  <span>
                    {t("enterFullName")}<span className="text-red-500 font-bold">*</span>
                  </span>
                }
                required
                id="name"
                name="name"
                type="text"
                variant="underlined"
              />
              

              {/* Email Field */}
              <Input
                className="w-full -mt-2"
                label={
                  <span>
                    {t("enterEmailID")}<span className='font-bold text-red-600'>*</span>
                  </span>
                }
                required
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                variant="underlined"
              />

              {/* Contact Number */}
              <div className="flex items-center gap-1">
                <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-28 mt-4"
                  aria-label="Country Code"
                >
                  
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33 </option>
                  <option value="+81">+81</option>
                  <option value="+86">+86</option>
                  <option value="+55">+55 </option>
                  <option value="+34">+34 </option>
                  <option value="+39">+39 </option>
                  <option value="+52">+52 </option>
                  <option value="+971">+97</option>  
                  <option value="+27">+27</option>
                  
                  <option value="+234">+234</option>
                  
                  <option value="+353">+353</option>
                  
                </select>
                <Input
                  className="w-full"
                  label={
                    <span>
                     {t("enterContactNumber")}<span className="text-red-500 font-bold">*</span>
                    </span>
                  }
                  required
                   pattern="^[0-9]{10}$" 
                   id="contact"
                  name="contact"
                  type="text"
                  variant="underlined"
                />
              </div>
              {/* Address */}
              <div className='flex flex-col sm:max-w-[450px] '>
              <label className='mt-3' htmlFor='address'>{t("address")}</label>
              <textarea
                          className="mt-1 p-3 border border-gray-300 text-xs w-full rounded-md" rows="3" cols="7"
                          placeholder={t("enterYourAddress")}
                        />
                        </div>
                        <h3 className=" mt-3 text-small sm:text-lg font-semibold">2. {t("donationType")}</h3>
                        <div className='flex'>
        <RadioGroup label="Select your mode of"
>
  <Radio value="Monetary">{t("monetaryDonation")}</Radio>
  <Radio value="Physical" >{t("physicalSuppliesDonation")}</Radio>
  <Radio value="Both">{t("both")}</Radio>
</RadioGroup>  
      </div>

     
   
   
                     
                
                        

              
              
            </div>
          </div>
          

          {/* Right Section: Resources Needed */}
          <div className="px-3 sm:w-1/2 sm:space-y-4">
          <div className="w-full h-[500px] sm:h-[530px] bg-blue-50 p-3 rounded-sm sm:mt-5 -mt-1 box-shadow">
            
              <h3 className="text-sm mt-2 sm:text-lg sm:font-semibold">3. {t("donationDetails")}</h3>
              <p className=" text-xs sm:text-sm font-semibold text-teal-700 mt-4 block">{t("preferableDropLocation")}</p>
               <select
               value={selectedNgo}
               onChange={handleNgoChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm mt-2 w-1/2"
                  aria-label="Country Code"
                >
                  
                  <option value="" disabled selected>{t("select")}</option>
                  <option value="NGO1">{t("ngo1")}</option>
                  <option value="NGO2">{t("ngo2")}</option>
                  
                 
                  
                </select>
              {/* <CheckboxGroup
                name="resources"
                onChange={handleOtherCheck}
                className="flex flex-col space-y-2"
              >
                <Checkbox value="Food">Food</Checkbox>
                <Checkbox value="Water">Water</Checkbox>
                <Checkbox value="Clothing">Clothing</Checkbox>
                <Checkbox value="Other">Other</Checkbox>
              </CheckboxGroup>
              {otherChecked && (
                <textarea
                  className="mt-4 p-5 border border-gray-300 text-xs  rounded-md" rows="3" cols="30"
                  placeholder="Please specify the resource and the required quantity"
                /> */}
               
              
              {/* )} */}
              <p className='text-xs mt-5 sm:text-sm font-semibold text-teal-700'>{t("forMonetaryDonation")}</p>
              <label htmlfor='amount'>{t("donationAmount")}</label>
              <input className='text-xs mx-5 px-5 py-2 rounded-lg mt-3 w-1/2'type='text' value={inputValue} onChange={handleInputChange} placeholder={t("amountInRupees")}/>
              <div className='flex inline-center'>
              <label className='block mt-4'htmlFor='payment method'>{t("choosePaymentMethod")}</label>
              <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm mt-3 ml-2 w-1/4"
                  aria-label="Country Code"
                  value={paymentMethod}
                  onChange={handlePayment}
                >
                  <option value="" disabled selected>{t("select")}</option>
                  <option value="Cash">{t("cash")}</option>
                  <option value="UPI">{t("upi")}</option>
                  <option value="Credit card">{t("credit")}</option>
                  
                  </select>
                  </div>
          

              <p className=' text-xs sm:text-sm font-semibold text-teal-700 my-2'>{t("forPhysicalItemsDonation")}</p>
              <div className='flex items-center space-x-4'>
              <CheckboxGroup
                name="resources"
                
                className="flex"
                
              >
                <Checkbox value="Non-perishable Food">{t("nonPerishableFood")}</Checkbox>
                <Checkbox value="Clothes">{t("clothes")}</Checkbox>
                <Checkbox value="Medical Supplies">{t("medicalSupplies")}</Checkbox>
                <Checkbox value="Hygiene Products">{t("hygieneProducts")}</Checkbox>
                <Checkbox value="Blankets and Bedding">{t("blanketsAndBedding")}</Checkbox>
              </CheckboxGroup>
             
               {/* <RadioGroup name="radio-group" value={selectedOption}
                onChange={handleOptionChange}
                className="flex flex-col space-y-2">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
                </RadioGroup>
                {selectedOption==='yes' &&(
                   
                        <textarea
                          className="mt-4 p-3 border border-gray-300 text-xs  rounded-md" rows="3" cols="30"
                          placeholder="Please specify the medication/medical condition and the required quantity"
                        />
                )} */}
                
              
        
            
               </div> 
               
            </div>
          </div>
        </div>
        </div>
        </form>
      </div>
      <Dialog open={showPayPortal} onClose={()=>setShowPayPortal(false)} className='relative z-10'>
        <DialogBackdrop transition className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'/>
        <div className="fixed inset-0 z-10  overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <form>
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:h-[80vh]"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start my-2">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:size-10">
                  <CreditCardIcon aria-hidden="true" className="size-6 text-yellow-500" />
                </div>
                
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    {t("carddetails")}
                  </DialogTitle>
                  <div className="mt-2">
                  <Input
                className="w-[300px] mt-5"
                label={
                  <span>
                    {t("cardholderName")}<span className="text-red-500 font-bold">*</span>
                  </span>
                }
                required
                id="name"
                name="name"
                type="text"
                variant="underlined"
              />
               <Input
                className="w-[300px] mt-5"
                label={
                  <span>
                    {t("cardNumber")}<span className="text-red-500 font-bold">*</span>
                  </span>
                }
                required
                id="num"
                name="num"
                type="number"
                variant="underlined"
              />
              <label className='block mt-4 ml-1'htmlFor='expiry'>{t("expiryDate")}<span className='text-red-600 font-semibold'>*</span></label>
              
              <select
                  className="border border-gray-300 rounded-md px-1 py-1 text-sm mt-4  w-[100px]" required id="month" name="month">
                  <option value="" disabled selected>{t("select")}</option>
                  <option value="January">{t("Jan")}</option>
                  <option value="February">{t("Feb")}</option>
                  <option value="March">{t("Mar")}</option>
                  <option value="April">{t("Apr")}</option>
                  <option value="May">{t("May")}</option>
                  <option value="June">{t("Jun")}</option>
                  <option value="July">{t("Jul")}</option>
                  <option value="August">{t("Aug")}</option>
                  <option value="September">{t("Sep")}</option>
                  <option value="October">{t("Oct")}</option>
                  <option value="November">{t("Nov")}</option>
                  <option value="December">{t("Dec")}</option>
                  
                  
                  
                  </select>
                  <select
                  className="border border-gray-300 rounded-md px-1 py-1 text-sm mt-4 ml-2 w-[100px]" required id="date" name="date"
                  
                >
                  <option value="" disabled selected>{t("select")}</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                  
                  
                  
                  </select>
                  <Input
                className="w-[80px] mt-5"
                label={
                  <span>
                    {t("cvv")} <span className="text-red-500 font-bold">*</span>
                  </span>
                }
                required
                id="cvv"
                name="cvv"
                type="text"
                variant="underlined"
              />
                  
              
                    {/* <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be permanently removed.
                      This action cannot be undone.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse justify-center sm:px-6">
              {/* <button
                type="button"
                onClick={() => setShowPayPortal(false)}
                className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
              >
                Pay
              </button> */}
                 {/* <AnimatedSubscribeButton
                 type="submit"
      buttonColor="#50C878"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      onClick={()=>setShowPayPortal(false)}
      
      initialText={
        <span className="group inline-flex items-center">
          Pay Now{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-5" />
          Thank You!{" "}
        </span>
      }
    /> */}
    <button
                type="submit"
                data-autofocus
                // onClick={() => setShowPayPortal(false)}
                className="mt-3 ml-2 inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-inset ring-gray-300 hover:bg-green-600 transition-all duration-300 sm:mt-0 sm:w-auto"
              >
                {t("payNow")}
              </button>

              <button
                type="button"
                data-autofocus
                onClick={() => setShowPayPortal(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                {t("cancel")}
              </button>
            </div>
          </DialogPanel>
          </form>
        </div>
      </div>
    </Dialog>
    <Dialog
        open={showPayPortal_UPI}
        onClose={() => setShowPayPortal_UPI(false)}
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
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center justify-center my-2">
                  
                  <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">{t("scan")}</h3>
      {/* <img src={qrCodeURL} alt="QR Code" /> */}
      <ReactQRCode value={upiString} size={200} />
      <p className="mt-2 text-sm text-gray-700">{upiId}</p>
    </div>

                </div>
              </div>
              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse justify-center sm:px-6">
                
                <button
                  type="button"
                  onClick={() => setShowPayPortal_UPI(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  {t("cancel")}
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Essentials;