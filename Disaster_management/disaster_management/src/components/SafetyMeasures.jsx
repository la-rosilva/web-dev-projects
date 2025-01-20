import React, { useState } from 'react';
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import prepIcon from '@/assets/prepare.png';
import EarthquakeIcon from '@/assets/earthquake.png';
import TornadoIcon from '@/assets/tornado.png';
import WildfireIcon from '@/assets/fire.png';
import FloodIcon from '@/assets/flood.png';
import TsunamiIcon from '@/assets/tsunami.png';
import DroughtIcon from '@/assets/drought.png';
import LandSlideIcon from '@/assets/landslide.png';
import Earthquake_bIcon from '@/assets/earthquake_b.png';
import Tsunami_bIcon from '@/assets/tsunami _b.png';
import Landslide_bIcon from '@/assets/landslide_b.png';
import Tornado_bIcon from '@/assets/tornado_b.png';
import Cyclone_bIcon from '@/assets/cyclone_b.png';
import Flood_bIcon from '@/assets/flood_b.png';
import Wildfire_bIcon from '@/assets/wildfire_b.png';

import Drought_bIcon from '@/assets/drought_b.png';

import CycloneIcon from '@/assets/cyclone.png';
import WarningIcon from '@/assets/warning.png';
import CloseIcon from '@/assets/close.png';
import PointIcon from '@/assets/points.png';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

import { useTranslation } from 'react-i18next';

// const disasters=[
//   {
//   id: 1,
//     title:"Earthquake",
//     btn_icon:EarthquakeIcon,
//     icon:Earthquake_bIcon,
//     btn_text:"EARTHQUAKE",
//     tips:[
//       "Create a family emergency plan with an out-of-state contact and a meeting spot.",
//       "Have a go-kit with at least three days of supplies.",
//       "Secure heavy furniture and appliances by anchoring them to walls using straps, brackets, or furniture anchors.",
//       "Consider earthquake insurance, especially in earthquake-prone areas, as standard policies don't cover damage."
//    ],
//    duringTips:[
//     "If you are in a car, pull to the side of the road and stay inside until the earthquake is over. Do not stop under overpasses or power lines.",
//       "If you are in bed, turn face down and cover your head and neck with a pillow.",
//       "If you are outdoors, stay outdoors away from buildings, streetlights, and utility wires.",
//       "If you are inside,stay and do not run outside and avoid doorways. Hold on to any sturdy item you can until the shaking stops.",
//       "Cover your neck with your arms. If a sturdy table or desk is nearby,crawl underneath it for shelter."


//    ],
//    afterTips:[
//     "Continue monitoring media for emergency updates, follow safety instructions, and call or text for help if trapped.",
//     "Check your home for damage, avoid turning electrical switches if you suspect a gas leak, and document damage for insurance.",
//     "Use generators and grills outside because their fumes contain carbon monoxide. Make sure your carbon monoxide detectors are working as it is a silent, odorless, killer.",
//     "If your home or property is damaged, take photos or videos to document your damage, and contact your insurance company."



//    ],
   
//   },
//   {
//   id:2,
//     title:"Tornado",
//     btn_icon:TornadoIcon,
//     btn_text:"TORNADO",
//     icon:Tornado_bIcon,
//     tips:[
//       "Monitor weather updates through radio,TV<or other sources to stay informed about tornado watches and warnings.",
//       "Practice tornado drills with your household to ensure quick movement to safe locations.",
//       "Gather emergency supplies,including food,water and medicine,organized into portable and home kits for different durations.",
//       "Create a support team for assistance during emergencies."
//    ],
//    duringTips:[
//     "Seek safe shelter immediately in a sturdy, windowless room or basement; protect your head and neck using your arms or a sturdy object.",
//       "Avoid mobile homes during tornadoes; if no shelter is nearby, lie flat in a ditch or ravine and shield your head..",
//       "If in a vehicle, do not try to outrun a tornado; seek the nearest shelter or low-lying area for safety.",
//       "If you're unable to move from a bed or a chair and assistance is not available, protect yourself from falling objects by covering up with blankets and pillow.",
//       "If you're in a mall, theater, or gym, get to the lowest level of the building and stay away from the windows."


//    ],
//    afterTips:[
//     "Stay in your shelter until the tornado warning ends,avoid damaged buildings,and use caution when exiting a damaged building",
//     "Be careful during cleanup,wear protective gear, and avoid using gas-powered devices indoors to prevent carbon monoxide poisoning.",
//     "Provide first aid for injuries,but don't move someone with neck or back injuries unless absolutely necessary.",
//     "Take care of your mental health by eating well, getting enough rest, and seeking support through the Disaster Distress Helpline if needed."





//    ],
 
//   },
//   {
//   id:3,
//     title:"Cyclone",
//     btn_icon:CycloneIcon,
//     btn_text:"CYCLONE",
//     icon:Cyclone_bIcon,
//     tips:[
//       "Secure loose tiles, repair doors and windows, and remove dead branches or trees near the house.",
//       "Check for any damage in your home, clear gutters and drains to avoid water buildup, and prepare an emergency kit with essentials.",
//       "Anchor removable objects like lumber, tin sheets,heavy objects and garbage cans to prevent them from flying in strong winds.",
//       "Demolish condemned buildings, and always keep extra batteries and dry non-perishable food for emergencies."
//    ],
//    duringTips:[
//     "Stay informed by listening to official weather warnings on the radio and passing the information to others.",
//       "Do not venture outside when the winds appear to calm down, as this could be the 'eye' of the cyclone passing. Strong winds will return soon, stay indoors until the cyclone has officially passed.",
//       "Switch off the electrical mains in your house.",
//       "If your house is securely built on high ground take shelter in the safe part of the house. However, if asked to evacuate do not hesitate to leave the place.",
//       "If you have to evacuate the house move your valuable articles to upper floors to minimize flood damage."


//    ],
//    afterTips:[
//     "Stay in the shelter until you are informed it's safe to return home.",
//     "Get vaccinated against diseases immediately after the cyclone..",
//     "Avoid any loose or dangling wires from lamp posts.",
//     "Clear debris from your property and report any losses to the authorities."





//    ],
   
//   },
//   {
//   id:4,
//     title:"Flood",
//     btn_icon:FloodIcon,
//     btn_text:"FLOOD",
//     icon:Flood_bIcon,
//     tips:[
//       " Stay updated by listening to the radio, watching TV, or reading newspapers for weather alerts.",
//       "Store important documents and valuables in waterproof bags to protect them from potential flooding.",
//       "Be aware of safe evacuation routes and evacuate immediately if instructed by authorities. Ensure your animals are untied to move freely to safety.",
//       "Stay informed about flood-prone areas like canals, streams, and drainage channels, and avoid them. Act quickly and follow official instructions."
//    ],
//    duringTips:[
//     "Stay away from floodwaters and wear suitable footwear if crossing them. Avoid sewer lines, gutters, drains, and fallen power lines to prevent accidents.",
//       "Mark open drains and manholes with visible signs (e.g., red flags or barricades) to avoid falls.",
//       "Do not walk or drive in floodwaters, as even two feet of moving water can wash away large vehicles.",
//       "Eat freshly cooked or dry food and ensure food is covered to prevent contamination.",
//       "Drink boiled or chlorinated water, and use disinfectants to keep your surroundings clean and prevent the spread of disease."


//    ],
//    afterTips:[
//     "Keep children away from floodwaters and avoid using damaged electrical appliances; ensure they are checked before use.",
//     "Turn off utilities and unplug appliances when instructed, and avoid touching electrical equipment if wet.",
//     "Be cautious of broken power lines, sharp objects, debris, and snakes during floods, and use mosquito nets to prevent malaria.",
//     "Do not consume food that has been in contact with floodwaters, and wait for the Health Department's advice before drinking tap water."





//    ],
  
//   },
//   {
//   id:5,
//     title:"Wildfire",
//     btn_icon:WildfireIcon,
//     btn_text:"WILDFIRE",
//     icon:Wildfire_bIcon,
//     tips:[
//       "Create a defensible space around your home by maintaining a 30 ft buffer from flammable vegetation, trimming trees, and keeping roof surfaces and gutters clear of debris.",
//       "Use fire-resistant materials for construction and ensure that important documents are stored in fireproof containers.",
//       "Keep firewood, combustible materials, and trees away from buildings and trim dead or low branches to reduce fire risk.",
//       "Prepare evacuation plans with your family and ensure you have battery-operated radios, flashlights, and fresh batteries ready for emergencies."
//    ],
//    duringTips:[
//     "Stay informed by turning on a TV or radio for the latest emergency updates.",
//       "If possible, set up hoses, fill buckets with water, and clear combustible materials from around your house.",
//       "Prepare for evacuation by turning on lights in each room and removing flammable drapes and curtains.",
//       "Ensure all family members, pets, and valuables are ready to evacuate when instructed, and leave keys in the car ignition.",
//       "Turn off air conditioning, air circulation systems, and detach electrical garage doors to prevent further hazards."


//    ],
//    afterTips:[
//     "Consult fire officials before returning to your home to ensure it's safe to do so.",
//     "Exercise caution when re-entering burned areas, as flare-ups can occur unexpectedly.",
//     "Inspect the grounds for hot spots, smoldering stumps, and vegetation, and use water to cool them down.",
//     "Check the roof, exterior, and attic for sparks or hidden embers, and continue monitoring the area for several days."





//    ],
   
//   },
//   {
//   id:6,
//     title:"Tsunami",
//     btn_icon:TsunamiIcon,
//     btn_text:"TSUNAMI",
//     icon:Tsunami_bIcon,
//     tips:[
//       "Recognize signs of a tsunami, such as unusual ocean behavior or loud roars, and be aware of evacuation routes to safe zones.",
//       "Practice your evacuation plan and ensure you know how to reach shelters that are at least 100 feet above sea level or one mile inland.",
//       "Create a family emergency communication plan with an out-of-state contact and a meeting place in case of separation.",
//       "Stay informed by signing up for community warning systems and listening to local weather radios for emergency alerts."
//    ],
//    duringTips:[
//     "If caused by an earthquake, Drop, Cover, then Hold On to protect yourself from the earthquake first.",
//       "Once the shaking stops, move to a higher and inland location if tsunami warnings are issued or natural signs are observed.",
//       "Follow evacuation routes marked with a wave symbol toward higher ground if instructed to evacuate.",
//       "If you are in the water, then grab onto something that floats, such as a raft or tree trunk.",
//       "If you are in a boat, face the direction of the waves and head out to sea. If you are in a harbor, go inland."


//    ],
//    afterTips:[
//     "Listen to local alerts and authorities for shelter locations and areas to avoid; use text or social media for non-emergency communication.",
//     "Avoid floodwater as it can contain debris and may be deeper than it appears; stay clear of downed power lines to prevent electrocution.",
//     "If you become injured or sick and need medical attention, contact your healthcare provider and shelter in place, if possible.",
//     "Stay away from damaged buildings, roads and bridges."





//    ],
   
//   },
//   {
//   id:7,
//     title:"LandSlide",
//     icon:Landslide_bIcon,
//     btn_text:"LANDSLIDE",
//     btn_icon:LandSlideIcon,
    
//     tips:[
//       "Build an emergency kit and create a household plan that includes your pets, ensuring everyone knows what to do in the event of a landslide.",
//       "Sign up for community warning systems and evacuate if instructed or if you feel unsafe in your home.",
//       "Protect your property with preventative measures like sandbags, retaining walls, or barriers, based on advice from professionals",
//       "Consult your insurance agent to check if debris flow or mudslides are covered under your policy and consider appropriate coverage for potential risks."
//    ],
//    duringTips:[
//     "Follow instructions from emergency managers.  They provide the latest recommendations based on the threat in your community.",
//       "Stay alert and awake during a storm that could cause a landslide. Many deaths from landslides occur while people are sleeping.",
//       "Never attempt to cross roads or bridges with flowing water or mud, as debris flows can escalate rapidly, making escape impossible.",
//       "Stay alert for sudden changes in water flow or if the water turns muddy, as these may signal an impending landslide.",
//       "Avoid river valleys and low-lying areas during times of danger.",
//       "If you do get stuck in the path of a landslide move uphill as quickly as possible."



//    ],
//    afterTips:[
//     "Stay away from the slide area to avoid further danger from additional slides",
//     "Listen to local radio or television for emergency updates and information.",
//     "Report hazards like broken utilities and damaged infrastructure to authorities for quick response.",
//     "Seek professional advice for assessing and reducing landslide risks, including replanting damaged ground to prevent erosion."





//    ],
   
//   },
//   {

//   id:8,
//     title:"Drought",
//     btn_icon:DroughtIcon,
//     btn_text:"DROUGHT",
//     icon:Drought_bIcon,
//     tips:[
//       "Fix leaks, install water-efficient fixtures, and choose energy-efficient appliances to minimize water waste.",
//       "Use drought-tolerant plants, group them by water needs, and avoid ornamental water features unless they recycle water.",
//       "Use a toilet displacement device or choose a low-volume toilet to reduce water usage during flushes, especially in drought-prone regions.",
//       "Collect rainwater from your roof to water plants, gardens, or even wash your car."
//    ],
//    duringTips:[
//     "Avoid unnecessary toilet flushes, take short showers, and turn off the water while brushing teeth, washing your face, or shaving.",
//       "Only run the washing machine with a full load, or adjust the water level according to the load size.",
//       "Always observe state and local restrictions on water use during a drought. Contact your state or local government for current information and suggestions.",
//       "Reuse water for outdoor plants, such as captured water from washing vegetables or rinsing dishes.",
//       "Reduce the frequency of lawn mowing during drought conditions to decrease water evaporation.",
//       "Avoid watering plants during the hottest part of the day; early morning or evening is best."



//    ],
//    afterTips:[
//     "Assess the impact of drought on forage, livestock, and finances, understanding recovery timelines for pastures and animal performance.",
//     "Diversify your water sources to include rainwater harvesting or other sustainable methods for water supply during drought.",
//     "Educate and train staff or family members on efficient water use practices to ensure everyone is on board during drought periods.",
//     "create a plan that will help you maintain the health of your pastures, livestock, finances, and family during the next drought."





//    ],
 
//   }

// ];








const SafetyMeasures = () => {
  const {t}=useTranslation();
  
  const disasters = t("disasters");
  console.log(disasters); // Destructuring the disasters object directly from translation
  
  const disasterArray =  Object.values(disasters);
  

const [showDisasterPortal, setShowDisasterPortal] = useState(false);
const [selectedDisaster, setSelectedDisaster] = useState(null);


  const handleDisaster=(disaster)=>{
    setSelectedDisaster(disaster);
    setShowDisasterPortal(true);
   
  };
   
    

 

  
  return (
    <div className='animate-fadeIn relative w-screen h-screen bg-slate-50 overflow-x-hidden' id='SafetyMeasures'>
      
        <div className='flex items-center justify-center mt-5 px-4'>
       <img src={prepIcon} className='w-14 h-14'/>
        <h4 className='mx-3 my-5 text-center font-bold text-2xl '>{t("safetytitle")}</h4>
        </div>
        <div className='-mt-10 sm:flex sm:flex-wrap justify-center'>
      <div className='w-full md:w-1/2 space-y-2 flex flex-wrap justify-center px-10 '>
     
{/* {disasters.map(disaster => (
            <button
              key={disaster.id}
              className='overflow-hidden text-xl flex items-center shrink-0 w-full justify-between bg-slate-800 rounded-sm mt-20 mx-20 px-10 py-2 box-shadow xl:w-[600px] glass-button'
              onClick={() => handleDisaster(disaster)}
            >
              <img src={disaster.btn_icon} className='w-12 h-12'/>
              {disaster.btn_text}
              

              <ChevronRightIcon className='w-5 h-5'/>
            </button>
          ))}
         */}
         {disasterArray.map((disaster) => {
            const { btn_text, btn_icon } = disaster; // destructuring
            return (
              <button
                key={disaster.id}
                className="overflow-hidden text-xl flex items-center shrink-0 w-full justify-between bg-slate-800 rounded-sm mt-20 mx-20 px-10 py-2 box-shadow xl:w-[600px] glass-button"
                onClick={() => handleDisaster(disaster)}
              >
                <img src={btn_icon} className="w-12 h-12" />
                {btn_text} {/* Dynamically rendered translation */}
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            );
          })}
         


      {/* Dialog for selected disaster */}
      <Dialog open={showDisasterPortal} onClose={() => setShowDisasterPortal(false)} className="relative z-10">
  <DialogBackdrop
    transition
    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
  />
  <div className="fixed inset-0 z-10 overflow-hidden">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <DialogPanel
        transition
        className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:h-[100vh] overflow-y-auto"
      >
        <div className="bg-white translate-x-2 px-3 pb-4 pt-1 sm:p-6 sm:pb-4">
          <img
            src={CloseIcon}
            className="sm:w-7 md:block hidden sm:h-7 ml-auto -translate-y-2 cursor-pointer"
            onClick={() => setShowDisasterPortal(false)}
            alt="Close"
          />
          <div className="sm:flex sm:items-start">
            <div className="flex shrink-0 items-center bg-slate-200 sm:mx-0 sm:size-10 w-full sm:w-[40rem] sm:h-[6rem] translate-x-2 sm:translate-x-0 sm:translate-y-0 sm:-mt-5 mt-4">
              <img src={WarningIcon} className="w-10 h-10 ml-2" alt="Warning" />
              <h3 className="text-left md:mx-2">
                {selectedDisaster?.btn_text} <span className="text-slate-500">{t("safetytips")}</span>
              </h3>
              <img
                src={selectedDisaster?.icon}
                className="w-28 h-28 ml-auto"
                alt="Disaster Icon"
              />
            </div>
          </div>
        </div>

        <div className="container w-full h-full ml-2">
          <div className="flex items-center">
            <h5 className="text-base mb-5 ml-2 lg:text-md">
              {t("preparebefore")} 
            </h5>
          </div>
          <div className="h-[150px] ml-16">
            <ul>
              {selectedDisaster?.tips?.map((tip, index) => (
                <li key={index} className="flex items-center sm:text-sm text-xs">
                  <img className="w-5 h-5 mr-1" src={PointIcon} alt="Point" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-2 mt-3">
            <h5 className="mb-5 text-base lg:text-md">{t("during")} </h5>
            <ul className="ml-14">
              {selectedDisaster?.duringTips?.map((tip, index) => (
                <li key={index} className="flex items-center sm:text-sm text-xs">
                  <img className="w-5 h-5 mr-1" src={PointIcon} alt="Point" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 ml-2">
            <h5 className="mb-5 text-base lg:text-md">{t("staysafeafter")}</h5>
            <ul className="ml-14">
              {selectedDisaster?.afterTips?.map((tip, index) => (
                <li key={index} className="flex items-center sm:text-sm text-xs">
                  <img className="w-5 h-5 mr-1" src={PointIcon} alt="Point" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogPanel>
    </div>
  </div>
</Dialog>



      

      
      
      
      </div>
      </div>
    </div>
  )
}

export default SafetyMeasures
