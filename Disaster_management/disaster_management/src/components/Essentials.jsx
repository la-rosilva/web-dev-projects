
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import {Alert, Button} from "@nextui-org/react";
import { Checkbox, CheckboxGroup } from 'rsuite';
import {RadioGroup, Radio} from 'rsuite';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CreditCardIcon } from '@heroicons/react/24/outline'
// import QRCode from 'qrcode.react';
import ReactQRCode from 'react-qr-code';
import { CheckIcon, ChevronRightIcon } from "lucide-react";
 
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button.jsx";


import 'rsuite/dist/rsuite.min.css'; 
import volunteer from '@/assets/voluntary.png';

const Essentials = () => {
  const [otherChecked, setOtherChecked] = useState(false);
  const [selectedOption,setSelectedOption]=useState('');
  const[showPayPortal,setShowPayPortal]=useState(false);
  const[paymentMethod,setPaymentMethod]=useState("");
  const[showPayPortal_UPI,setShowPayPortal_UPI]=useState(false);
  // const[paymentMethod_UPI,setPaymentMethod_UPI]=useState("");
  const [inputValue,setInputValue]=useState("");
  const handleOtherCheck = (value) => {
    setOtherChecked(value.includes('Other'));
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value); 
  };

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
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }
  const upiId='lrdsilva05@okicici';
 
  const payeeName="Lareina Dsilva";
  const upiString=`upi://pay?pa=${upiId}&pn=${payeeName}&am=${inputValue}&cu=INR`;
  const qrCodeURL = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(
    upiString
  )}&choe=UTF-8`;
  
 

  return (
    
    <div className="relative w-full h-screen bg-slate-200 p-5">
      <div className="container bg-white rounded-xl px-5 py-5 w-full h-full">
     
        <div className='flex justify-center'>
        <img className='w-11 h-10 mr-5'src={volunteer} alt='volunteer_image'/>
        <h1 className='text-center text-3xl text-teal-700'>Help Disaster Victims</h1>
        </div>
        <h6 className='text-center font-normal text-teal-600'>Your donation can help provide life- saving assistance during this crisis</h6>
        
        <form className="flex gap-8">
            <button className='absolute bottom-6 left-[725px] w-20 bg-teal-500 px-3 py-2 rounded-xl hover:bg-teal-600 transition-all'>Submit</button>
          {/* Left Section: Personal Information */}
          <div className="w-1/2 space-y-4">
          
            <div className="w-full h-[510px] bg-blue-50 p-3 rounded-lg mt-5 box-shadow">
              <h3 className="mt-10 text-lg font-semibold">1. Personal Information</h3>
              {/* Full Name Field */}
              <Input
                className="w-full"
                label={
                  <span>
                    Enter Full Name <span className="text-red-500 font-bold">*</span>
                  </span>
                }
                type="text"
                variant="underlined"
              />

              {/* Email Field */}
              <Input
                className="w-full"
                label={
                  <span>
                    Enter Email ID <span className='font-bold text-red-600'>*</span>
                  </span>
                }
                type="email"
                variant="underlined"
              />

              {/* Contact Number */}
              <div className="flex items-center gap-3">
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
                      Enter Contact Number <span className="text-red-500 font-bold">*</span>
                    </span>
                  }
                  type="text"
                  variant="underlined"
                />
              </div>
              {/* Address */}
              <div className='flex flex-col w-[450px] '>
              <label className='mt-3' htmlFor='address'>Address(if relevant)</label>
              <textarea
                          className="mt-1 p-3 border border-gray-300 text-xs  rounded-md" rows="3" cols="10"
                          placeholder="Enter Your Address"
                        />
                        </div>
                        <h3 className=" mt-3 text-lg font-semibold">2. Donation Type</h3>
                        <div className='flex'>
        <RadioGroup label="Select your mode of"
>
  <Radio value="Monetary">Monetary Donation</Radio>
  <Radio value="Physical">Physical Supplies Donation</Radio>
  <Radio value="Both">Both</Radio>
</RadioGroup>  
      </div>

     
   
   
                     
                
                        

              
              
            </div>
          </div>
          

          {/* Right Section: Resources Needed */}
          <div className="w-1/2 space-y-4">
            <div className="w-full h-[510px] bg-blue-50 p-3 rounded-lg mt-5 box-shadow">
              <h3 className="mt-5 text-lg font-semibold">3. Donation Details</h3>
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
              <p className='font-semibold text-teal-700'>For Monetary Donation</p>
              <label className='mt-3' htmlfor='amount'>Donation Amount</label>
              <input className='mx-5 px-5 py-2 rounded-lg mt-3 w-1/2'type='text' value={inputValue} onChange={handleInputChange} placeholder='Enter the amount (in rupees)'/>
              <div className='flex inline-center'>
              <label className='block mt-5'htmlFor='payment method'>Choose Payment Method</label>
              <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm mt-4 ml-2 w-1/4"
                  aria-label="Country Code"
                  value={paymentMethod}
                  onChange={handlePayment}
                >
                  <option value="" disable selected>Select</option>
                  <option value="Credit card">Credit/Debit card</option>
                  <option value="UPI">UPI</option>
                  <option value="Cash">Cash</option>
                  
                  </select>
                  </div>
          

              <p className='font-semibold text-teal-700 my-2'>For Physical Items Donation</p>
              <div className='flex items-center space-x-4'>
              <CheckboxGroup
                name="resources"
                
                className="flex"
              >
                <Checkbox value="Non-perishable Food">Non-perishable Food</Checkbox>
                <Checkbox value="Clothes">Clothes</Checkbox>
                <Checkbox value="Medical Supplies">Medical Supplies</Checkbox>
                <Checkbox value="Hygiene Products">Hygiene Products</Checkbox>
                <Checkbox value="Blankets and Bedding">Blankets and Bedding</Checkbox>
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
               <p className="font-semibold text-teal-700 mt-4 block">Preferable drop location</p>
               <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm mt-4 w-1/2"
                  aria-label="Country Code"
                >
                  
                  <option value="" disabled selected>Select</option>
                  <option value="NGO1">Hasthapradha Chritable Trust</option>
                  <option value="NGO2">Mahamaya Foundation</option>
                  
                 
                  
                </select>
            </div>
          </div>
        </form>
      </div>
      <Dialog open={showPayPortal} onClose={()=>setShowPayPortal(false)} className='relative z-10'>
        <DialogBackdrop transition className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'/>
        <div className="fixed inset-0 z-10  overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:h-[70vh]"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start my-2">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:size-10">
                  <CreditCardIcon aria-hidden="true" className="size-6 text-yellow-500" />
                </div>
                
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Credit/Debit card Details
                  </DialogTitle>
                  <div className="mt-2">
                  <Input
                className="w-[300px] mt-5"
                label={
                  <span>
                    Cardholder's Name <span className="text-red-500 font-bold">*</span>
                  </span>
                }
                type="text"
                variant="underlined"
              />
               <Input
                className="w-[300px] mt-5"
                label={
                  <span>
                    Card Number <span className="text-red-500 font-bold">*</span>
                  </span>
                }
                type="number"
                variant="underlined"
              />
              <label className='block mt-4 ml-1'htmlFor='expiry'>Expiry Date<span className='text-red-600 font-semibold'>*</span></label>
              
              <select
                  className="border border-gray-300 rounded-md px-1 py-1 text-sm mt-4  w-[100px]" required
                  
                >
                  <option value="" disabled selected>Select</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                  
                  
                  
                  </select>
                  <select
                  className="border border-gray-300 rounded-md px-1 py-1 text-sm mt-4 ml-2 w-[100px]" required
                  
                >
                  <option value="" disabled selected>Select</option>
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
                    CVV <span className="text-red-500 font-bold">*</span>
                  </span>
                }
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
                 <AnimatedSubscribeButton
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
    />
              <button
                type="button"
                data-autofocus
                onClick={() => setShowPayPortal(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
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
      <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
      {/* <img src={qrCodeURL} alt="QR Code" /> */}
      <ReactQRCode value={upiString} size={200} />
      <p className="mt-2 text-sm text-gray-700">UPI ID: {upiId}</p>
    </div>

                </div>
              </div>
              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse justify-center sm:px-6">
                
                <button
                  type="button"
                  onClick={() => setShowPayPortal_UPI(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
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