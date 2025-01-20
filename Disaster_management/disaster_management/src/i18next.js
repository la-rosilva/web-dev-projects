// import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import { initReactI18next } from 'react-i18next'

// i18n.use(LanguageDetector).use(initReactI18next).init({
//     debug:true,
//     lng:"en",
//     resources:{
//         en:{
//             translation:{
//                 greeting:"Hello,Welcome!",
//             },

//         },
//         hi:{
//             translation:{
//                 greeting:"नमस्ते, स्वागत है! "
//             }

//         }
//     }
// })
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


import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnObjects:true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Help,Hope, and safety",
          subgreeting:"delivered when you need it the most",
          help: "Help me Now!",
          home: "Home",
          map: "Map",
          contribute: "Contribute",
          safetyMeasures: "Safety Measures",
          login: "Login",
          signUp: "Sign Up",
          forgotPassword: "Forgot password?",
          signUpDescription: "Sign up to continue",
          name: "Name",
          email: "Email ID",
          password: "Password",
          personalInformation: "Personal Information",
          enterFullName: "Enter Full Name",
          enterEmailID: "Enter Email ID",
          enterContactNumber: "Enter Contact Number",
          address: "Address",
          amountInRupees:"Amount in Rupees",
          enterYourAddress: "Enter Your Address",
          donationType: "Donation Type",
          monetaryDonation: "Monetary Donation",
          physicalSuppliesDonation: "Physical Supplies Donation",
          both: "Both",
          donationDetails:"Donation Details",
          preferableDropLocation: "Preferable Drop Location",
          select: "Select",
          forMonetaryDonation: "For Monetary Donation",
          donationAmount: "Donation Amount",
          amountInRupees: "Amount in Rupees",
          choosePaymentMethod: "Choose Payment Method",
          forPhysicalItemsDonation: "For Physical Items Donation",
          nonPerishableFood: "Non-perishable Food",
          clothes: "Clothes",
          medicalSupplies: "Medical Supplies",
          hygieneProducts: "Hygiene Products",
          blanketsAndBedding: "Blankets and Bedding",
          confirmationpopup:"This feature is for emergency purposes only. Are you sure you want to continue?",
          confirmationpopup_sub:"Your location will be sent for emergency help",
          yes:"Yes",
          No:"No",
          scan:"Scan to pay",
          carddetails:"Credit/Debit card Details",
          cardholderName: "Cardholder's Name",
          cardNumber: "Card Number",
          expiryDate: "Expiry Date",
          select: "Select",
          cancel: "Cancel",
          cvv: "CVV",
          cash:"Cash",
          credit:"Credit/Debit Card",
          upi:"UPI",
          ngo1:"Hasthapradha Chritable Trust",
          ngo2:"Mahamaya Foundation",
          lat:"Latitude",
          long:"Longitude",
          loc:"Location name",
          payNow: "Pay Now",
          Jan: "January",
          Feb: "February",
          Mar: "March",
          Apr: "April",
          May: "May",
          Jun: "June",
          Jul: "July",
          Aug: "August",
          Sep: "September",
          Oct: "October",
          Nov: "November",
          Dec: "December",
          locationsent:"Your location has been sent! Help will be delivered soon",
          safetytitle:"Preparedness and Safety Measures for Natural Disasters",
          formtitle:"Help Disaster Victims",
          formsubtitle:"Your donation can help provide life- saving assistance during this crisis",
          submitbtn:"Submit",
          submitted:"Submitted",
          safetytips:"SAFETY TIPS",
          preparebefore:"Prepare Before",
          during:"During",
          staysafeafter:"Stay safe after",
          disasters:{
            earthquake: {
              id: 1,
              btn_icon:EarthquakeIcon,
              icon:Earthquake_bIcon,

              title: "Earthquake",
              btn_text: "EARTHQUAKE",
              tips: [
                "Secure heavy furniture and objects that could fall.",
                "Install safety straps on bookshelves, televisions, and other items that may shift during a quake.",
                "Know your local evacuation routes and emergency shelters.",
                "Keep a flashlight, batteries, and a first-aid kit handy."
              ],
              duringTips: [
                "Drop, cover, and hold on during the shaking.",
                "Stay indoors and move away from windows, doors, and exterior walls.",
                "If you're in a vehicle, stop in a safe area and remain inside until the shaking stops.",
                "If you’re outside, move to an open area away from buildings, trees, and power lines."
              ],
              afterTips: [
                "Check for injuries and provide first aid if necessary.",
                "Inspect your home for damage and hazards such as gas leaks, structural issues, or fire risks.",
                "Stay away from damaged buildings and avoid using elevators.",
                "Monitor news or local authorities for emergency updates and evacuation instructions."
              ]
            },
            tornado: {
              id: 2,
              btn_icon:TornadoIcon,
              icon:Tornado_bIcon,
              title: "TORNADO",
              btn_text: "TORNADO",
              tips: [
,
                "Monitor weather updates through radio, TV, or other sources to stay informed about tornado watches and warnings.",
                "Practice tornado drills with your household to ensure quick movement to safe locations.",
                "Gather emergency supplies, including food, water, and medicine, organized into portable and home kits for different durations.",
                "Create a support team for assistance during emergencies."
              ],
              duringTips: [
                "Seek safe shelter immediately in a sturdy, windowless room or basement; protect your head and neck using your arms or a sturdy object.",
                "Avoid mobile homes during tornadoes; if no shelter is nearby, lie flat in a ditch or ravine and shield your head.",
                "If in a vehicle, do not try to outrun a tornado; seek the nearest shelter or low-lying area for safety.",
                "If you're unable to move from a bed or a chair and assistance is not available, protect yourself from falling objects by covering up with blankets and pillows.",
                "If you're in a mall, theater, or gym, get to the lowest level of the building and stay away from the windows."
              ],
              afterTips: [
                "Stay in your shelter until the tornado warning ends, avoid damaged buildings, and use caution when exiting a damaged building.",
                "Be careful during cleanup, wear protective gear, and avoid using gas-powered devices indoors to prevent carbon monoxide poisoning.",
                "Provide first aid for injuries, but don't move someone with neck or back injuries unless absolutely necessary.",
                "Take care of your mental health by eating well, getting enough rest, and seeking support through the Disaster Distress Helpline if needed."
              ]
            },
            cyclone:{
              id: 3,
              title: "Cyclone",
              btn_icon: CycloneIcon,
              btn_text: "CYCLONE",
              icon: Cyclone_bIcon,
              tips: [
                "Secure loose tiles, repair doors and windows, and remove dead branches or trees near the house.",
                "Check for any damage in your home, clear gutters and drains to avoid water buildup, and prepare an emergency kit with essentials.",
                "Anchor removable objects like lumber, tin sheets, heavy objects, and garbage cans to prevent them from flying in strong winds.",
                "Demolish condemned buildings, and always keep extra batteries and dry non-perishable food for emergencies."
              ],
              duringTips: [
                "Stay informed by listening to official weather warnings on the radio and passing the information to others.",
                "Do not venture outside when the winds appear to calm down, as this could be the 'eye' of the cyclone passing. Strong winds will return soon, stay indoors until the cyclone has officially passed.",
                "Switch off the electrical mains in your house.",
                "If your house is securely built on high ground take shelter in the safe part of the house. However, if asked to evacuate do not hesitate to leave the place.",
                "If you have to evacuate the house move your valuable articles to upper floors to minimize flood damage."
              ],
              afterTips: [
                "Stay in the shelter until you are informed it's safe to return home.",
                "Get vaccinated against diseases immediately after the cyclone.",
                "Avoid any loose or dangling wires from lamp posts.",
                "Clear debris from your property and report any losses to the authorities."
              ]
            },
            flood:{
              id: 4,
              title: "Flood",
              btn_icon: FloodIcon,
              btn_text: "FLOOD",
              icon: Flood_bIcon,
              tips: [
                "Stay updated by listening to the radio, watching TV, or reading newspapers for weather alerts.",
                "Store important documents and valuables in waterproof bags to protect them from potential flooding.",
                "Be aware of safe evacuation routes and evacuate immediately if instructed by authorities. Ensure your animals are untied to move freely to safety.",
                "Stay informed about flood-prone areas like canals, streams, and drainage channels, and avoid them. Act quickly and follow official instructions."
              ],
              duringTips: [
                "Stay away from floodwaters and wear suitable footwear if crossing them. Avoid sewer lines, gutters, drains, and fallen power lines to prevent accidents.",
                "Mark open drains and manholes with visible signs (e.g., red flags or barricades) to avoid falls.",
                "Do not walk or drive in floodwaters, as even two feet of moving water can wash away large vehicles.",
                "Eat freshly cooked or dry food and ensure food is covered to prevent contamination.",
                "Drink boiled or chlorinated water, and use disinfectants to keep your surroundings clean and prevent the spread of disease."
              ],
              afterTips: [
                "Keep children away from floodwaters and avoid using damaged electrical appliances; ensure they are checked before use.",
                "Turn off utilities and unplug appliances when instructed, and avoid touching electrical equipment if wet.",
                "Be cautious of broken power lines, sharp objects, debris, and snakes during floods, and use mosquito nets to prevent malaria.",
                "Do not consume food that has been in contact with floodwaters, and wait for the Health Department's advice before drinking tap water."
              ]
            },
            wildfire:{
              id: 5,
              title: "Wildfire",
              btn_icon: WildfireIcon,
              btn_text: "WILDFIRE",
              icon: Wildfire_bIcon,
              tips: [
                "Create a defensible space around your home by maintaining a 30 ft buffer from flammable vegetation, trimming trees, and keeping roof surfaces and gutters clear of debris.",
                "Use fire-resistant materials for construction and ensure that important documents are stored in fireproof containers.",
                "Keep firewood, combustible materials, and trees away from buildings and trim dead or low branches to reduce fire risk.",
                "Prepare evacuation plans with your family and ensure you have battery-operated radios, flashlights, and fresh batteries ready for emergencies."
              ],
              duringTips: [
                "Stay informed by turning on a TV or radio for the latest emergency updates.",
                "If possible, set up hoses, fill buckets with water, and clear combustible materials from around your house.",
                "Prepare for evacuation by turning on lights in each room and removing flammable drapes and curtains.",
                "Ensure all family members, pets, and valuables are ready to evacuate when instructed, and leave keys in the car ignition.",
                "Turn off air conditioning, air circulation systems, and detach electrical garage doors to prevent further hazards."
              ],
              afterTips: [
                "Consult fire officials before returning to your home to ensure it's safe to do so.",
                "Exercise caution when re-entering burned areas, as flare-ups can occur unexpectedly.",
                "Inspect the grounds for hot spots, smoldering stumps, and vegetation, and use water to cool them down.",
                "Check the roof, exterior, and attic for sparks or hidden embers, and continue monitoring the area for several days."
              ]
            },
            tsunami:{
              id: 6,
              title: "Tsunami",
              btn_icon: TsunamiIcon,
              btn_text: "TSUNAMI",
              icon: Tsunami_bIcon,
              tips: [
                "Recognize signs of a tsunami, such as unusual ocean behavior or loud roars, and be aware of evacuation routes to safe zones.",
                "Practice your evacuation plan and ensure you know how to reach shelters that are at least 100 feet above sea level or one mile inland.",
                "Create a family emergency communication plan with an out-of-state contact and a meeting place in case of separation.",
                "Stay informed by signing up for community warning systems and listening to local weather radios for emergency alerts."
              ],
              duringTips: [
                "If caused by an earthquake, Drop, Cover, then Hold On to protect yourself from the earthquake first.",
                "Once the shaking stops, move to a higher and inland location if tsunami warnings are issued or natural signs are observed.",
                "Follow evacuation routes marked with a wave symbol toward higher ground if instructed to evacuate.",
                "If you are in the water, grab onto something that floats, such as a raft or tree trunk.",
                "If you are in a boat, face the direction of the waves and head out to sea. If you are in a harbor, go inland."
              ],
              afterTips: [
                "Listen to local alerts and authorities for shelter locations and areas to avoid; use text or social media for non-emergency communication.",
                "Avoid floodwater as it can contain debris and may be deeper than it appears; stay clear of downed power lines to prevent electrocution.",
                "If you become injured or sick and need medical attention, contact your healthcare provider and shelter in place, if possible.",
                "Stay away from damaged buildings, roads, and bridges."
              ]
            },
            landslide:{
              id: 7,
              title: "LandSlide",
              icon: Landslide_bIcon,
              btn_text: "LANDSLIDE",
              btn_icon: LandSlideIcon,
              tips: [
                "Build an emergency kit and create a household plan that includes your pets, ensuring everyone knows what to do in the event of a landslide.",
                "Sign up for community warning systems and evacuate if instructed or if you feel unsafe in your home.",
                "Protect your property with preventative measures like sandbags, retaining walls, or barriers, based on advice from professionals.",
                "Consult your insurance agent to check if debris flow or mudslides are covered under your policy and consider appropriate coverage for potential risks."
              ],
              duringTips: [
                "Follow instructions from emergency managers. They provide the latest recommendations based on the threat in your community.",
                "Stay alert and awake during a storm that could cause a landslide. Many deaths from landslides occur while people are sleeping.",
                "Never attempt to cross roads or bridges with flowing water or mud, as debris flows can escalate rapidly, making escape impossible.",
                "Stay alert for sudden changes in water flow or if the water turns muddy, as these may signal an impending landslide.",
                "Avoid river valleys and low-lying areas during times of danger.",
                "If you do get stuck in the path of a landslide, move uphill as quickly as possible."
              ],
              afterTips: [
                "Stay away from the slide area to avoid further danger from additional slides.",
                "Listen to local radio or television for emergency updates and information.",
                "Report hazards like broken utilities and damaged infrastructure to authorities for quick response.",
                "Seek professional advice for assessing and reducing landslide risks, including replanting damaged ground to prevent erosion."
              ]
            },
            
            
            
            

          drought: {
            id: 8,
            btn_icon:DroughtIcon,
    
            icon:Drought_bIcon,

            title: "Drought",
            btn_text: "DROUGHT",
            tips: [
              "Fix leaks, install water-efficient fittings, and choose energy-sensitive appliances to reduce water waste.",
              "Use drought-resistant plants, group them based on water needs, and avoid decorative water features unless they recycle water.",
              "Use displacement devices in toilets or opt for low-flow toilets to reduce water consumption, especially in drought-prone areas.",
              "Collect rainwater and use it for plants, gardens, or even washing your car."
            ],
            duringTips: [
              "Avoid unnecessary toilet flushing, take brief showers, and turn off the water while brushing teeth, washing your face, or shaving.",
              "Run washing machines only with full loads, or adjust the water level according to the load size.",
              "Follow state and local restrictions on water usage during droughts. Contact your state or local government for current information and suggestions.",
              "Reuse water for outdoor plants, such as water collected from washing vegetables or rinsing utensils.",
              "Reduce lawn mowing frequency during drought conditions to minimize water evaporation.",
              "Avoid watering plants during the hottest part of the day; early morning or evening is best."
            ],
            afterTips: [
              "Evaluate the impact of the drought on grass, livestock, and finances, and understand the recovery timeline for pastures and animal performance.",
              "Diversify your water sources by incorporating rainwater harvesting or other sustainable methods for water supply during droughts.",
              "Educate and train employees or family members on effective water use practices to ensure everyone contributes during drought periods.",
              "Create a plan to help sustain your pastures, livestock, finances, and family well-being during the next drought."
            ]

      
          
          
          }}
                  
          

        },
      },
      hi: {
        translation: {
          greeting: "सहायता, उम्मीद और सुरक्षा",
          subgreeting:"जब आपको सबसे ज्यादा ज़रूरत हो",
          help:"मुझे मदद चाहिए!",
          home: "होम",
          map: "मानचित्र",
          contribute: "योगदान करें",
          safetyMeasures: "सुरक्षा उपाय",
          login: "लॉगिन",
          signUp: "साइन अप",
          forgotPassword: "पासवर्ड भूल गए?",
          signUpDescription: "जारी रखने के लिए साइन अप करें",
          name: "नाम",
          email: "ईमेल आईडी",
          password: "पासवर्ड",
          personalInformation: "व्यक्तिगत जानकारी",
          enterFullName: "पूरा नाम",
          enterEmailID: "ईमेल आईडी",
          enterContactNumber: "संपर्क नंबर",
          address: "पता",
          enterYourAddress: "अपना पता",
          donationType: "दान प्रकार",
          monetaryDonation: "वित्तीय दान",
          physicalSuppliesDonation: "भौतिक आपूर्ति दान",
          both: "दोनों",
          donationDetails: "दान विवरण",
          preferableDropLocation: "पसंदीदा ड्रॉप स्थान",
          select: "चुनें",
          forMonetaryDonation: "वित्तीय दान के लिए",
          donationAmount: "दान राशि",
          amountInRupees: "रुपयों में राशि",
          choosePaymentMethod: "भुगतान विधि चुनें",
          forPhysicalItemsDonation: "भौतिक वस्त्रों के दान के लिए",
          nonPerishableFood: "नाशवान भोजन",
          clothes: "कपड़े",
          medicalSupplies: "चिकित्सा आपूर्ति",
          hygieneProducts: "स्वच्छता उत्पाद",
          blanketsAndBedding: "कंबल और बिस्तर",
          confirmationpopup:"यह सुविधा केवल आपातकालीन उद्देश्यों के लिए है। क्या आप जारी रखना चाहते हैं?",
          confirmationpopup_sub:"आपका स्थान आपातकालीन सहायता के लिए भेजा जाएगा",
          yes:"हाँ",
          no:"नहीं",
          carddetails:"क्रेडिट/डेबिट कार्ड विवरण",
          cardholderName: "कार्डधारक का नाम",
          cardNumber: "कार्ड संख्या",
          expiryDate: "समाप्ति तिथि",
          select: "चुनें",
          cancel: "रद्द करें",
          cvv: "सीवीवी",
          cash:"कैश",
          scan:"भुगतान करने के लिए स्कैन करें",
          ngo1:"हस्तप्रदा चैरिटेबल ट्रस्ट",
          ngo2:"महामाया फाउंडेशन",
          credit:"क्रेडिट/डेबिट कार्ड",
          upi:"यूपीआई",
          payNow: "अब भुगतान करें",
          Jan: "जनवरी",
          Feb: "फरवरी",
          Mar: "मार्च",
          Apr: "अप्रैल",
          May: "मई",
          Jun: "जून",
          Jul: "जुलाई",
          Aug: "अगस्त",
          Sep: "सितंबर",
          Oct: "अक्टूबर",
          Nov: "नवंबर",
          Dec: "दिसंबर",
          locationsent:"आपका स्थान भेज दिया गया है! जल्द ही मदद पहुंचा दी जाएगी",
          lat:"अक्षांश",
          long:"देशान्तर",
          loc:"स्थान का नाम",
          safetytitle:"प्राकृतिक आपदाओं के लिए तैयारी और सुरक्षा उपाय",
          formtitle:"आपदा पीड़ितों की मदद करें",
          formsubtitle:"आपका दान इस संकट के दौरान जीवन रक्षक सहायता प्रदान करने में मदद कर सकता है",
          submitbtn:"जमा करना",
          submitted:"प्रस्तुत",
          safetytips:"सुरक्षा सुझाव",
          preparebefore:"आपदा से पहले की तैयारियाँ",
          during:"आपदा के दौरान",
          staysafeafter:"आपदा के बाद सुरक्षित रहें",
          disasters:{
            earthquake: {
              id: 1,
              title: "भूकंप",
              btn_icon:EarthquakeIcon,
              icon:Earthquake_bIcon,
              
              btn_text: "भूकंप",
              tips: [
                "भारी फर्नीचर और वस्तुओं को सुरक्षित करें जो गिर सकती हैं।",
                "बुकशेल्फ, टेलीविज़न, और अन्य ऐसी वस्तुओं पर सुरक्षा पट्टियाँ लगाएं जो भूकंप के दौरान शिफ्ट हो सकती हैं।",
                "अपने स्थानीय निकासी मार्गों और आपातकालीन शेल्टर का पता रखें।",
                "एक फ्लैशलाइट, बैटरियां और एक प्राथमिक चिकित्सा किट पास रखें।"
              ],
              duringTips: [
                "स्ट्रेचिंग के दौरान गिरें, कवर करें और पकड़े रहें।",
                "इमारत के अंदर रहें और खिड़कियों, दरवाजों और बाहरी दीवारों से दूर रहें।",
                "यदि आप वाहन में हैं, तो एक सुरक्षित स्थान पर रुकें और जब तक कंपन बंद न हो, तब तक वाहन के अंदर ही रहें।",
                "यदि आप बाहर हैं, तो भवनों, पेड़ों और विद्युत लाइनों से दूर एक खुले क्षेत्र में चले जाएं।"
              ],
              afterTips: [
                "चोटों की जाँच करें और आवश्यकता होने पर प्राथमिक चिकित्सा प्रदान करें।",
                "अपने घर का निरीक्षण करें और गैस लीक, संरचनात्मक समस्याएं, या आग के खतरे जैसी समस्याओं को ढूंढें।",
                "क्षतिग्रस्त भवनों से दूर रहें और लिफ्ट का उपयोग न करें।",
                "आपातकालीन अपडेट और निकासी निर्देशों के लिए समाचार या स्थानीय अधिकारियों की निगरानी करें।"
              ]
            },
            tornado: {
              id: 2,
              btn_icon:TornadoIcon,
              icon:Tornado_bIcon,
              title: "बवंडर",
              btn_text: "बवंडर",
              tips: [
               
                "मौसम अपडेट के लिए रेडियो, टीवी या अन्य स्रोतों के माध्यम से बवंडर की चेतावनी और निगरानी पर नज़र रखें।",
                "अपने घर के साथियों के साथ बवंडर अभ्यास करें ताकि सुरक्षित स्थानों पर जल्दी पहुंचा जा सके।",
                "आपातकालीन आपूर्ति इकट्ठा करें, जिसमें भोजन, पानी और दवाइयाँ शामिल हैं, और इन्हें पोर्टेबल और घरेलू किट में विभिन्न समयावधियों के लिए व्यवस्थित करें।",
                "आपातकालीन स्थितियों के दौरान मदद के लिए एक सहायता टीम बनाएं।"
              ],
              duringTips: [
                "तत्काल सुरक्षित शरण में जाएं, जैसे कि एक मजबूत, बिना खिड़की वाले कमरे या बेसमेंट में; अपनी गर्दन और सिर की रक्षा के लिए अपने हाथों या किसी मजबूत वस्तु का उपयोग करें।",
                "बवंडर के दौरान मोबाइल घरों से बचें; यदि कोई शरण nearby नहीं है, तो एक गड्ढे या दर्रे में समतल होकर सिर को ढक लें।",
                "यदि आप वाहन में हैं, तो बवंडर से बाहर निकलने की कोशिश न करें; निकटतम शरण या निचले क्षेत्र में शरण लें।",
                "यदि आप बिस्तर या कुर्सी से नहीं उठ सकते और सहायता उपलब्ध नहीं है, तो गिरने वाली वस्तुओं से बचने के लिए कंबल और तकिए से अपनी सुरक्षा करें।",
                "यदि आप शॉपिंग मॉल, सिनेमा हॉल, या जिम में हैं, तो भवन के सबसे निचले स्तर पर जाएं और खिड़कियों से दूर रहें।"
              ],
              afterTips: [
                "अपने शरण में तब तक रहें जब तक बवंडर की चेतावनी समाप्त नहीं हो जाती, क्षतिग्रस्त भवनों से बचें और एक क्षतिग्रस्त भवन से बाहर निकलते समय सावधानी बरतें।",
                "साफ-सफाई के दौरान सावधानी बरतें, सुरक्षात्मक गियर पहनें, और कार्बन मोनोऑक्साइड विषाक्तता से बचने के लिए गैस-पावर्ड उपकरणों का उपयोग घर के अंदर न करें।",
                "चोटों के लिए प्राथमिक चिकित्सा प्रदान करें, लेकिन गर्दन या पीठ की चोटों वाले व्यक्ति को तब तक न हिलाएं जब तक यह बिल्कुल जरूरी न हो।",
                "अपनी मानसिक सेहत का ख्याल रखें, अच्छे से खाएं, पर्याप्त आराम करें, और यदि आवश्यक हो तो आपातकालीन मानसिक सहायता प्राप्त करने के लिए डिजास्टर डिस्टेस हेल्पलाइन से संपर्क करें।"
              ]
            },
            cyclone:{
              id: 3,
              title: "चक्रवात",
              btn_icon: CycloneIcon,
              btn_text: "चक्रवात",
              icon: Cyclone_bIcon,
              tips: [
                "ढीली टाइल्स को सुरक्षित करें, दरवाजों और खिड़कियों की मरम्मत करें, और घर के पास मृत शाखाओं या पेड़ों को हटा दें।",
                "अपने घर में किसी भी क्षति की जांच करें, नालियों और ड्रेनों को साफ करें ताकि पानी जमा न हो, और आवश्यक वस्तुओं के साथ एक आपातकालीन किट तैयार करें।",
                "लंबर, टिन की शीट्स, भारी वस्तुएं और कूड़ेदान जैसे हटाने योग्य वस्तुओं को मजबूत करके रखें ताकि वे तेज हवाओं में उड़ न जाएं।",
                "नष्ट किए गए भवनों को ध्वस्त करें, और आपातकालों के लिए अतिरिक्त बैटरियां और सूखी, गैर-नाशवान खाद्य सामग्री रखें।"
              ],
              duringTips: [
                "आधिकारिक मौसम चेतावनियों को सुनकर सूचित रहें और दूसरों को जानकारी दें।",
                "जब हवाएँ शांत लगने लगे, तो बाहर न जाएं, क्योंकि यह चक्रवात का 'आंख' हो सकता है। मजबूत हवाएं जल्द ही लौटेंगी, चक्रवात के समाप्त होने तक घर के अंदर रहें।",
                "अपने घर के बिजली के मुख्य स्विच को बंद कर दें।",
                "यदि आपका घर सुरक्षित रूप से उच्च भूमि पर स्थित है, तो घर के सुरक्षित हिस्से में शरण लें। हालांकि, अगर आपको निकासी के लिए कहा जाए, तो न हिचकिचाएं।",
                "यदि आपको घर से बाहर निकलना पड़े, तो अपने मूल्यवान सामान को ऊपरी मंजिलों पर ले जाएं ताकि बाढ़ के नुकसान को कम किया जा सके।"
              ],
              afterTips: [
                "आपातकालीन आश्रय में रहें जब तक आपको यह सूचित नहीं किया जाता कि घर लौटने के लिए सुरक्षित है।",
                "चक्रवात के बाद बीमारियों से बचाव के लिए तुरंत टीकाकरण करवाएं।",
                "लैंप पोस्ट से ढीली या लटकती हुई तारों से बचें।",
                "अपने संपत्ति से मलबा हटाएं और किसी भी नुकसान की रिपोर्ट अधिकारियों को करें।"
              ]
            },
            
            flood:{
              id: 4,
              title: "बाढ़",
              btn_icon: FloodIcon,
              btn_text: "बाढ़",
              icon: Flood_bIcon,
              tips: [
                "मौसम चेतावनियों के लिए रेडियो सुनें, टीवी देखें या समाचार पत्र पढ़ें।",
                "महत्वपूर्ण दस्तावेज़ और मूल्यवान वस्तुएं पानी-रोधक बैग में स्टोर करें ताकि वे बाढ़ से बच सकें।",
                "सुरक्षित निकासी मार्गों के बारे में जानकारी रखें और यदि अधिकारियों द्वारा निर्देशित किया जाए तो तुरंत निकासी करें। सुनिश्चित करें कि आपके जानवर मुक्त रूप से सुरक्षा की ओर बढ़ सकें।",
                "संचालित बाढ़ प्रभावित क्षेत्रों जैसे नदियाँ, नाले और ड्रेनेज चैनल से दूर रहें और इन्हें न चुनें। जल्दी कार्य करें और आधिकारिक निर्देशों का पालन करें।"
              ],
              duringTips: [
                "बाढ़ के पानी से दूर रहें और यदि इसे पार करना हो तो उपयुक्त जूते पहनें। सीवर लाइनों, नालों, नालियों और गिरे हुए बिजली के तारों से बचें ताकि दुर्घटनाएं न हों।",
                "खुली नालियों और मेनहोल्स को स्पष्ट चिन्हों (जैसे, लाल ध्वज या बैरिकेड्स) से चिह्नित करें ताकि गिरने से बचा जा सके।",
                "बाढ़ के पानी में न चलें और न ही गाड़ी चलाएं, क्योंकि दो फीट पानी में भी बड़ी गाड़ियों को बहाया जा सकता है।",
                "ताजे पके या सूखे भोजन का सेवन करें और उसे ढक कर रखें ताकि वह दूषित न हो।",
                "उबालकर या क्लोरीनेटेड पानी पिएं, और रोग फैलने से बचाने के लिए आसपास के वातावरण को साफ रखने के लिए डिसइंफेक्टेंट का उपयोग करें।"
              ],
              afterTips: [
                "बच्चों को बाढ़ के पानी से दूर रखें और खराब बिजली उपकरणों का उपयोग न करें; सुनिश्चित करें कि उनका परीक्षण किया गया हो।",
                "जब निर्देशित किया जाए तो यूटिलिटी को बंद करें और उपकरणों को अनप्लग करें, और गीला होने पर बिजली के उपकरणों को छूने से बचें।",
                "बाढ़ के दौरान टूटे हुए बिजली के तारों, तेज़ वस्तुओं, मलबे और सांपों से सतर्क रहें, और मलेरिया से बचाव के लिए मच्छरदानी का उपयोग करें।",
                "उस भोजन का सेवन न करें जो बाढ़ के पानी में संपर्क में आया हो, और tap पानी पीने से पहले स्वास्थ्य विभाग की सलाह का इंतजार करें।"
              ]
            },
            wildfire:{
              id: 5,
              title: "दावानल",
              btn_icon: WildfireIcon,
              btn_text: "दावानल",
              icon: Wildfire_bIcon,
              tips: [
                "अपने घर के चारों ओर एक सुरक्षा क्षेत्र बनाएं, इसके लिए ज्वलनशील वनस्पतियों से 30 फीट की दूरी बनाए रखें, पेड़ों की छंटाई करें, और छत की सतहों और नालियों को मलबे से साफ रखें।",
                "निर्माण के लिए अग्निरोधक सामग्रियों का उपयोग करें और सुनिश्चित करें कि महत्वपूर्ण दस्तावेज अग्निरोधक कंटेनरों में संग्रहित हों।",
                "लकड़ी, ज्वलनशील सामग्री, और पेड़ों को भवनों से दूर रखें और आग के जोखिम को कम करने के लिए मृत या निचले शाखाओं को छंटाई करें।",
                "अपने परिवार के साथ निकासी योजनाएँ तैयार करें और सुनिश्चित करें कि आपके पास आपातकालीन स्थितियों के लिए बैटरी चालित रेडियो, टॉर्च और ताजे बैटरियों का स्टॉक हो।"
              ],
              duringTips: [
                "ताजा आपातकालीन अपडेट के लिए टीवी या रेडियो चालू कर के सूचित रहें।",
                "यदि संभव हो, होज सेट करें, बाल्टियों में पानी भरें और अपने घर के आसपास ज्वलनशील सामग्री को साफ करें।",
                "निकासी के लिए तैयार हों, प्रत्येक कमरे में लाइट्स चालू करें और ज्वलनशील पर्दे और ड्रेपरियों को हटा दें।",
                "सुनिश्चित करें कि सभी परिवार सदस्य, पालतू और मूल्यवान वस्तुएं निकासी के लिए तैयार हों जब निर्देशित किया जाए, और कार की इग्निशन में चाबी छोड़ें।",
                "एयर कंडीशनिंग, वायु परिसंचरण प्रणालियों को बंद कर दें और इलेक्ट्रिकल गैरेज दरवाजों को अलग कर दें ताकि आगे की खतरों से बचा जा सके।"
              ],
              afterTips: [
                "अपने घर में लौटने से पहले अग्नि अधिकारियों से परामर्श करें ताकि यह सुनिश्चित किया जा सके कि यह सुरक्षित है।",
                "जलाए गए क्षेत्रों में फिर से प्रवेश करते समय सतर्क रहें, क्योंकि कभी-कभी अचानक आग फिर से भड़क सकती है।",
                "भूमि की जांच करें, गर्म स्थानों, जलती हुई ठूंठों और वनस्पतियों को देखे और उन्हें ठंडा करने के लिए पानी का उपयोग करें।",
                "छत, बाहरी और अटारी की जांच करें ताकि चिंगारी या छिपी हुई अंगारों का पता चले और कुछ दिनों तक क्षेत्र की निगरानी जारी रखें।"
              ]
            },
            tsunami:{
              id: 6,
              title: "सुनामी",
              btn_icon: TsunamiIcon,
              btn_text: "सुनामी",
              icon: Tsunami_bIcon,
              tips: [
                "सुनामी के संकेतों को पहचानें, जैसे असामान्य समुद्री व्यवहार या तेज़ गड़गड़ाहट, और सुरक्षित क्षेत्रों तक जाने के लिए निकासी मार्गों के बारे में जानकारी रखें।",
                "अपने निकासी योजना का अभ्यास करें और सुनिश्चित करें कि आप ऐसे आश्रयों तक पहुँच सकते हैं जो समुद्र स्तर से कम से कम 100 फीट ऊँचे या एक मील अंदर हों।",
                "एक पारिवारिक आपातकालीन संचार योजना बनाएं जिसमें एक बाहरी राज्य संपर्क और एक बैठक स्थान हो, यदि आप अलग हो जाएं तो।",
                "समुदाय चेतावनी प्रणालियों के लिए साइन अप करके और आपातकालीन अलर्ट के लिए स्थानीय मौसम रेडियो सुनकर सूचित रहें।"
              ],
              duringTips: [
                "यदि भूकंप के कारण है, तो पहले भूकंप से बचने के लिए 'ड्रॉप, कवर, फिर होल्ड ऑन' करें।",
                "जब झटका रुक जाए, तो सुनामी की चेतावनी जारी होने या प्राकृतिक संकेत दिखने पर उच्च और अंदर की ओर स्थानांतरित हों।",
                "यदि आपको निकासी के लिए कहा जाए तो उच्च स्थान की ओर संकेतित तरंग चिह्नों वाले मार्गों का पालन करें।",
                "यदि आप पानी में हैं, तो किसी ऐसी चीज़ को पकड़ें जो तैरती हो, जैसे राफ्ट या पेड़ की लकड़ी।",
                "यदि आप नाव में हैं, तो लहरों की दिशा की ओर मुंह करके समुद्र की ओर जाएं। यदि आप बंदरगाह में हैं, तो अंदर की ओर जाएं।"
              ],
              afterTips: [
                "स्थानीय चेतावनियों और अधिकारियों की सलाह सुनें ताकि आश्रय स्थानों और बचने योग्य क्षेत्रों के बारे में जानकारी मिल सके; गैर-आपातकालीन संचार के लिए टेक्स्ट या सोशल मीडिया का उपयोग करें।",
                "बाढ़ के पानी से बचें क्योंकि इसमें मलबा हो सकता है और यह जितना दिखाई देता है उससे अधिक गहरा हो सकता है; बिजली के तारों से बचें ताकि करंट लगने से बच सकें।",
                "यदि आप घायल हो जाते हैं या बीमार पड़ जाते हैं और चिकित्सा सहायता की आवश्यकता है, तो अपने स्वास्थ्य देखभाल प्रदाता से संपर्क करें और यदि संभव हो तो वहीं आश्रय लें।",
                "क्षतिग्रस्त भवनों, सड़कों और पुलों से दूर रहें।"
              ]
            },
            
            landsilde:{
              id: 7,
              title: "भूमिस्खलन",
              icon: Landslide_bIcon,
              btn_text: "भूमिस्खलन",
              btn_icon: LandSlideIcon,
              tips: [
                "एक आपातकालीन किट बनाएं और एक घरेलू योजना तैयार करें जिसमें आपके पालतू जानवर भी शामिल हों, यह सुनिश्चित करते हुए कि हर कोई भूमि-स्खलन के मामले में क्या करना है, जानता है।",
                "समुदाय चेतावनी प्रणालियों के लिए साइन अप करें और निर्देशित किए जाने पर या यदि आप अपने घर में असुरक्षित महसूस करते हैं तो निकासी करें।",
                "प्रोफेशनल्स से सलाह लेकर रेत बैग, रिटेनिंग दीवारें, या बैरियर जैसे रोकथाम उपायों के माध्यम से अपनी संपत्ति की रक्षा करें।",
                "अपने बीमा एजेंट से परामर्श करें ताकि यह जांच सकें कि क्या मलबा बहाव या कीचड़ की लहरें आपकी पॉलिसी के तहत कवर हैं और संभावित जोखिमों के लिए उपयुक्त कवर की विचार करें।"
              ],
              duringTips: [
                "आपातकालीन प्रबंधकों के निर्देशों का पालन करें। वे आपके समुदाय में खतरे के आधार पर नवीनतम सिफारिशें प्रदान करते हैं।",
                "ऐसी आंधी के दौरान सतर्क और जागरूक रहें जो भूमि-स्खलन का कारण बन सकती है। भूमि-स्खलन से होने वाली कई मौतें उस समय होती हैं जब लोग सो रहे होते हैं।",
                "कभी भी बहते हुए पानी या कीचड़ से सड़कों या पुलों को पार करने की कोशिश न करें, क्योंकि मलबा बहाव तेजी से बढ़ सकता है, जिससे बचने की संभावना समाप्त हो सकती है।",
                "पानी के प्रवाह में अचानक परिवर्तन या यदि पानी गंदा हो जाता है, तो सतर्क रहें, क्योंकि ये भूमि-स्खलन के संकेत हो सकते हैं।",
                "खतरे के समय नदी की घाटियों और निम्न-स्थित क्षेत्रों से बचें।",
                "यदि आप भूमि-स्खलन के मार्ग में फंस जाते हैं, तो जितनी जल्दी हो सके, पहाड़ी की ओर बढ़ें।"
              ],
              afterTips: [
                "स्लाइड क्षेत्र से दूर रहें ताकि अतिरिक्त स्लाइड से होने वाले खतरों से बच सकें।",
                "आपातकालीन अपडेट और जानकारी के लिए स्थानीय रेडियो या टेलीविजन सुनें।",
                "टूटे हुए उपयोगिताओं और क्षतिग्रस्त बुनियादी ढांचे जैसे खतरों को अधिकारियों को रिपोर्ट करें ताकि त्वरित प्रतिक्रिया मिल सके।",
                "भूमि-स्खलन के जोखिमों का मूल्यांकन और कमी करने के लिए पेशेवर सलाह लें, जिसमें क्षतिग्रस्त भूमि की पुनः बुवाई करना शामिल है, ताकि कटाव को रोका जा सके।"
              ]
            },
            
            
            
            
            
            
            
            
            
          drought: {
            id:8,
            btn_icon:DroughtIcon,
    
            icon:Drought_bIcon,

            title: "सूखा",
            btn_text: "सूखा",
            tips: [
              "लीक को ठीक करें, जल-प्रभावी फिटिंग्स स्थापित करें, और जल की बर्बादी को कम करने के लिए ऊर्जा-संवेदनशील उपकरणों का चयन करें।",
              "सूखा-प्रतिरोधी पौधों का उपयोग करें, उन्हें पानी की आवश्यकताओं के आधार पर समूहित करें, और सजावटी जल तत्वों से बचें जब तक कि वे जल को पुनः चक्रित न करें।",
              "पानी की खपत को कम करने के लिए शौचालय में विस्थापन उपकरण का उपयोग करें या कम-परिवाह शौचालय का चयन करें, विशेष रूप से सूखा प्रवण क्षेत्रों में।",
              "बारिश के पानी को इकट्ठा करें और इसे पौधों, बगानों, या यहां तक कि अपनी कार धोने के लिए इस्तेमाल करें।"
            ],
            duringTips: [
              "अनावश्यक शौचालय फ्लश से बचें, संक्षिप्त स्नान करें, और दांत ब्रश करते समय, चेहरा धोते समय, या शेविंग करते समय पानी बंद कर दें।",
              "सिर्फ पूर्ण लोड के साथ वाशिंग मशीन चलाएं, या लोड आकार के अनुसार पानी का स्तर समायोजित करें।",
              "सूखा के दौरान जल उपयोग पर राज्य और स्थानीय प्रतिबंधों का पालन करें। वर्तमान जानकारी और सुझावों के लिए अपने राज्य या स्थानीय सरकार से संपर्क करें।",
              "बाहर के पौधों के लिए पानी पुनः उपयोग करें, जैसे कि सब्जियाँ धोने या बर्तन रिंस करने से पकड़ा गया पानी।",
              "सूखा स्थितियों में पानी के वाष्पन को कम करने के लिए घास काटने की आवृत्ति को घटाएं।",
              "दिन के सबसे गर्म हिस्से में पौधों को पानी देने से बचें; सुबह जल्दी या शाम को यह सबसे अच्छा है।"
            ],
            afterTips: [
              "सूखा के प्रभाव का मूल्यांकन करें, घास, पशुधन, और वित्त पर, चरागाहों और जानवरों की प्रदर्शन के लिए पुनर्प्राप्ति की समयरेखा को समझें।",
              "सूखा के दौरान जल आपूर्ति के लिए वर्षा जल संचयन या अन्य स्थायी विधियों को शामिल करने के लिए अपने जल स्रोतों में विविधता लाएं।",
              "कर्मचारियों या परिवार के सदस्यों को जल उपयोग के प्रभावी अभ्यासों पर शिक्षित और प्रशिक्षित करें ताकि हर कोई सूखा अवधियों के दौरान सहयोग करें।",
              "एक योजना बनाएं जो अगली सूखा के दौरान अपने चरागाहों, पशुधन, वित्त, और परिवार की भलाई बनाए रखने में मदद करेगी।"
            ]
          }
        }
        

        },
      },
      kn:{
        translation: {
          greeting: "ಸಹಾಯ, ಭರವಸೆ ಮತ್ತು ಸುರಕ್ಷತೆ",
          subgreeting: "ನೀವು ಇದಕ್ಕೆ ಹೆಚ್ಚು ಅವಶ್ಯಕತೆ ಇದ್ದಾಗ ಬರುವವು",
          help: "ತಕ್ಷಣ ಸಹಾಯ ಮಾಡಿ!",
          home: "ಮನೆ",
          map: "ನಕ್ಷೆ",
          contribute: "ಪಾತ್ರ ವಹಿಸು",
          safetyMeasures: "ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು",
          login: "ಲಾಗಿನ್",
          signUp: "ಸೈನ್ ಅಪ್",
          forgotPassword: "ಪಾಸ್ವರ್ಡ್ ಮರೆತಿದೆಯೆ?",
          signUpDescription: "ಮುಂದುವರಿಯಲು ಸೈನ್ ಅಪ್ ಮಾಡಿ",
          name: "ಹೆಸರು",
          email: "ಇಮೇಲ್ ಐಡಿ",
          password: "ಪಾಸ್ವರ್ಡ್",
          donationDetails: "ದೇಣಿಗೆ ವಿವರಗಳು",
          personalInformation: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
          enterFullName: "ಪೂರ್ಣ ಹೆಸರು ನಮೂದಿಸಿ",
          enterEmailID: "ಇಮೇಲ್ ಐಡಿ ನಮೂದಿಸಿ",
          enterContactNumber: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
          address: "ವಿಳಾಸ",
          enterYourAddress: "ನಿಮ್ಮ ವಿಳಾಸ ನಮೂದಿಸಿ",
          donationType: "ದಾನದ ಪ್ರಕಾರ",
          monetaryDonation: "ಹಣದ ದಾನ",
          physicalSuppliesDonation: "ಭೌತಿಕ ಸರಕಿಗಳ ದಾನ",
          both: "ಎರಡೂ",
          onationDetails: "ದಾನದ ವಿವರಗಳು",
          preferableDropLocation: "ಪಸಂದಿಸಿದ ಡ್ರಾಪ್ ಸ್ಥಳ",
          select: "ಆಹಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
          forMonetaryDonation: "ಹಣದ ದಾನಕ್ಕಾಗಿ",
          donationAmount: "ದಾನದ ಮೊತ್ತ",
          amountInRupees: "ರೂಪಾಯಿಗಳಲ್ಲಿ ಮೊತ್ತ",
          choosePaymentMethod: "ಪಾವತಿ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
          forPhysicalItemsDonation: "ಭೌತಿಕ ವಸ್ತುಗಳ ದಾನಕ್ಕಾಗಿ",
          submitbtn:"ಸಲ್ಲಿಸಿ",
          submitted:"ಸಲ್ಲಿಸಲಾಗಿದೆ",
          nonPerishableFood: "ನಾನ್-ಪೆರಿಶಬಲ್ ಆಹಾರ",
          clothes: "ಒಡುಗೆ",
          medicalSupplies: "ಆರೋಗ್ಯ ಸರಕಿಗಳು",
          hygieneProducts: "ಹೈಜೀನ್ ಉತ್ಪನ್ನಗಳು",
          blanketsAndBedding: "ಕುಂಬಳಕಾಯಿ ಮತ್ತು ಹಾಸಿಗೆ",
          confirmationpopup: "ಈ ವೈಶಿಷ್ಟ್ಯವನ್ನು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗಾಗಿ ಮಾತ್ರ ಬಳಸಲು ಸೂಚಿಸಲಾಗಿದೆ. ನೀವು ಮುಂದುವರಿಯಲು ಬಯಸುತ್ತೀರಾ?",
          confirmationpopup_sub: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ತುರ್ತು ಸಹಾಯಕ್ಕಾಗಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
          yes: "ಹೌದು",
          no: "ಇಲ್ಲ",
          cardholderName: "ಕಾರ್ಡ್‌ಹೋಲ್ಡರ್ ಹೆಸರು",
          cardNumber: "ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
          expiryDate: "ಅಂತಿಮ ದಿನಾಂಕ",
          select: "ಆಯ್ಕೆ",
          cancel: "ರದ್ದುಮಾಡು",
          cvv: "ಸಿ.ವಿ.ವಿ",
          cash:"ಕ್ಯಾಶ್",
          credit:"ಕ್ರೆಡಿಟ್/ಡೆಬಿಟ್ ಕಾರ್ಡ್",
          upi:"ಯುಪಿಐ",
          carddetails:"ಕ್ರೆಡಿಟ್/ಡೆಬಿಟ್ ಕಾರ್ಡ್ ವಿವರಗಳು",
          ngo1:"ಹಸ್ತಪ್ರದ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್",
          ngo2:"ಮಹಾಮಾಯಾ ಫೌಂಡೇಶನ್",
          scan:"ಪಾವತಿಸಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",

          payNow: "ಈಗ ಪಾವತಿಸಿ",
          Jan: "ಜನವರಿ",
          Feb: "ಫೆಬ್ರವರಿ",
          Mar: "ಮಾರ್ಚ್",
          Apr: "ಎಪ್ರಿಲ್",
          May: "ಮೇ",
          Jun: "ಜೂನ್",
          Jul: "ಜುಲೈ",
          Aug: "ಆಗಸ್ಟ್",
          Sep: "ಸೆಪ್ಟೆಂಬರ್",
          Oct: "ಅಕ್ಟೋಬರ್",
          Nov: "ನವೆಂಬರ್",
          Dec: "ಡಿಸೆಂಬರ್",
          locationsent:"ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ! ಸಹಾಯವನ್ನು ಶೀಘ್ರದಲ್ಲೇ ತಲುಪಿಸಲಾಗುವುದು",
          lat:"ಅಕ್ಷಾಂಶ",
          long:"ರೇಖಾಂಶ",
          loc:"ಸ್ಥಳದ ಹೆಸರು",
          safetytitle:"ನೈಸರ್ಗಿಕ ವಿಕೋಪಗಳಿಗೆ ಸನ್ನದ್ಧತೆ ಮತ್ತು ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು",
          formtitle:"ವಿಪತ್ತು ಸಂತ್ರಸ್ತರಿಗೆ ಸಹಾಯ ಮಾಡಿ",
          formsubtitle:"ನಿಮ್ಮ ದೇಣಿಗೆಯು ಈ ಬಿಕ್ಕಟ್ಟಿನ ಸಂದರ್ಭದಲ್ಲಿ ಜೀವ ಉಳಿಸುವ ಸಹಾಯವನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ",
          safetytips:"ಭದ್ರತಾ ಸಲಹೆಗಳು",
          preparebefore:"ದುರಂತದ ಮೊದಲು ಸಿದ್ಧರಾಗಿ",
          during:"ದುರಂತದ ಸಮಯದಲ್ಲಿ",
          staysafeafter:"ವಿಪತ್ತಿನ ನಂತರ ಸುರಕ್ಷಿತವಾಗಿರಿ",
          disasters:{
            earthquake: {
              id: 1,
              btn_icon:EarthquakeIcon,
              icon:Earthquake_bIcon,

              title: "ಭೂಕಂಪ",
              btn_text: "ಭೂಕಂಪ",
              tips: [
                "ಭಾರವಾದ ಪೀಠೋಪಕರಣಗಳು ಮತ್ತು ಬೀಳಬಹುದಾದ ವಸ್ತುಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ.",
                "ಪುಸ್ತಕ ಕಪಾಟುಗಳು, ಟೆಲಿವಿಷನ್‌ಗಳು ಮತ್ತು ಭೂಕಂಪದ ಸಮಯದಲ್ಲಿ ಬದಲಾಗಬಹುದಾದ ಇತರ ವಸ್ತುಗಳ ಮೇಲೆ ಸುರಕ್ಷತಾ ಪಟ್ಟಿಗಳನ್ನು ಸ್ಥಾಪಿಸಿ.",
               "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಸ್ಥಳಾಂತರಿಸುವ ಮಾರ್ಗಗಳು ಮತ್ತು ತುರ್ತು ಆಶ್ರಯಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ.",
                "ಫ್ಲ್ಯಾಷ್‌ಲೈಟ್, ಬ್ಯಾಟರಿಗಳು ಮತ್ತು ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ಕಿಟ್ ಅನ್ನು ಕೈಯಲ್ಲಿಡಿ."
              ],
              duringTips: [
                "ಅಲುಗಾಡುವ ಸಮಯದಲ್ಲಿ ಬಿಡಿ, ಮುಚ್ಚಿ ಮತ್ತು ಹಿಡಿದುಕೊಳ್ಳಿ.",
            
                
               "ಒಳಾಂಗಣದಲ್ಲಿಯೇ ಇರಿ ಮತ್ತು ಕಿಟಕಿಗಳು, ಬಾಗಿಲುಗಳು ಮತ್ತು ಬಾಹ್ಯ ಗೋಡೆಗಳಿಂದ ದೂರ ಸರಿಯಿರಿ.",
                "ನೀವು ವಾಹನದಲ್ಲಿದ್ದರೆ, ಸುರಕ್ಷಿತ ಪ್ರದೇಶದಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಮತ್ತು ಕಂಪನ ನಿಲ್ಲುವವರೆಗೂ ಒಳಗೆ ಇರಿ.",
                "ನೀವು ಹೊರಗಿದ್ದರೆ, ಕಟ್ಟಡಗಳು, ಮರಗಳು ಮತ್ತು ವಿದ್ಯುತ್ ತಂತಿಗಳಿಂದ ದೂರವಿರುವ ತೆರೆದ ಪ್ರದೇಶಕ್ಕೆ ಹೋಗಿ."
              ],
              afterTips: [
                "ಗಾಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ನೀಡಿ.",
                "ಅನಿಲ ಸೋರಿಕೆ, ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು ಅಥವಾ ಬೆಂಕಿಯ ಅಪಾಯಗಳಂತಹ ಹಾನಿ ಮತ್ತು ಅಪಾಯಗಳಿಗಾಗಿ ನಿಮ್ಮ ಮನೆಯನ್ನು ಪರೀಕ್ಷಿಸಿ.",
                "ಹಾನಿಗೊಳಗಾದ ಕಟ್ಟಡಗಳಿಂದ ದೂರವಿರಿ ಮತ್ತು ಲಿಫ್ಟ್‌ಗಳನ್ನು ಬಳಸುವುದನ್ನು ತಪ್ಪಿಸಿ.",
                "ತುರ್ತು ನವೀಕರಣಗಳು ಮತ್ತು ಸ್ಥಳಾಂತರಿಸುವ ಸೂಚನೆಗಳಿಗಾಗಿ ಸುದ್ದಿ ಅಥವಾ ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ."
              ]
            },
            tornado: {
              id: 2,
              btn_icon:TornadoIcon,
              icon:Tornado_bIcon,
              title: "ಸುಂಟರಗಾಳಿ",
              btn_text: "ಸುಂಟರಗಾಳಿ",
              tips: [
,
                "ಸುಂಟರಗಾಳಿ ವೀಕ್ಷಣೆಗಳು ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಪಡೆಯಲು ರೇಡಿಯೋ, ಟಿವಿ ಅಥವಾ ಇತರ ಮೂಲಗಳ ಮೂಲಕ ಹವಾಮಾನ ನವೀಕರಣಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
                "ಸುರಕ್ಷಿತ ಸ್ಥಳಗಳಿಗೆ ತ್ವರಿತ ಚಲನೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಿಮ್ಮ ಮನೆಯವರೊಂದಿಗೆ ಸುಂಟರಗಾಳಿ ಡ್ರಿಲ್‌ಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ.",
                "ಆಹಾರ, ನೀರು ಮತ್ತು ಔಷಧ ಸೇರಿದಂತೆ ತುರ್ತು ಸಾಮಗ್ರಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ವಿವಿಧ ಅವಧಿಗಳಿಗೆ ಪೋರ್ಟಬಲ್ ಮತ್ತು ಮನೆ ಕಿಟ್‌ಗಳಲ್ಲಿ ಆಯೋಜಿಸಿ.",
                "ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ಸಹಾಯಕ್ಕಾಗಿ ಬೆಂಬಲ ತಂಡವನ್ನು ರಚಿಸಿ."
              ],
              duringTips: [
                "ಗಟ್ಟಿಮುಟ್ಟಾದ, ಕಿಟಕಿಗಳಿಲ್ಲದ ಕೋಣೆ ಅಥವಾ ನೆಲಮಾಳಿಗೆಯಲ್ಲಿ ತಕ್ಷಣ ಸುರಕ್ಷಿತ ಆಶ್ರಯವನ್ನು ಪಡೆಯಿರಿ; ನಿಮ್ಮ ತೋಳುಗಳು ಅಥವಾ ಗಟ್ಟಿಮುಟ್ಟಾದ ವಸ್ತುವನ್ನು ಬಳಸಿ ನಿಮ್ಮ ತಲೆ ಮತ್ತು ಕುತ್ತಿಗೆಯನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ.",
               "ಸುಂಟರಗಾಳಿ ಸಮಯದಲ್ಲಿ ಮೊಬೈಲ್ ಮನೆಗಳನ್ನು ತಪ್ಪಿಸಿ; ಹತ್ತಿರದಲ್ಲಿ ಯಾವುದೇ ಆಶ್ರಯವಿಲ್ಲದಿದ್ದರೆ, ಹಳ್ಳ ಅಥವಾ ಕಂದರದಲ್ಲಿ ಸಮತಟ್ಟಾಗಿ ಮಲಗಿ ನಿಮ್ಮ ತಲೆಯನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ.",
                "ವಾಹನದಲ್ಲಿದ್ದರೆ, ಸುಂಟರಗಾಳಿಯನ್ನು ಮೀರಿಸಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ; ಸುರಕ್ಷತೆಗಾಗಿ ಹತ್ತಿರದ ಆಶ್ರಯ ಅಥವಾ ತಗ್ಗು ಪ್ರದೇಶವನ್ನು ಹುಡುಕಿ.",
                "ನೀವು ಹಾಸಿಗೆಯಿಂದ ಅಥವಾ ಕುರ್ಚಿಯಿಂದ ಚಲಿಸಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ ಮತ್ತು ಸಹಾಯ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ಕಂಬಳಿ ಮತ್ತು ದಿಂಬುಗಳಿಂದ ನಿಮ್ಮನ್ನು ಮುಚ್ಚಿಕೊಳ್ಳುವ ಮೂಲಕ ಬೀಳುವ ವಸ್ತುಗಳಿಂದ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ.",
                "ನೀವು ಮಾಲ್, ಥಿಯೇಟರ್ ಅಥವಾ ಜಿಮ್‌ನಲ್ಲಿದ್ದರೆ, ಕಟ್ಟಡದ ಅತ್ಯಂತ ಕೆಳ ಹಂತಕ್ಕೆ ಹೋಗಿ ಕಿಟಕಿಗಳಿಂದ ದೂರವಿರಿ."
              ],
              afterTips: [
                "ಸುಂಟರಗಾಳಿ ಎಚ್ಚರಿಕೆ ಮುಗಿಯುವವರೆಗೆ ನಿಮ್ಮ ಆಶ್ರಯದಲ್ಲಿರಿ, ಹಾನಿಗೊಳಗಾದ ಕಟ್ಟಡಗಳನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಹಾನಿಗೊಳಗಾದ ಕಟ್ಟಡದಿಂದ ನಿರ್ಗಮಿಸುವಾಗ ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ.",
                "ಸ್ವಚ್ಛಗೊಳಿಸುವ ಸಮಯದಲ್ಲಿ ಜಾಗರೂಕರಾಗಿರಿ, ರಕ್ಷಣಾತ್ಮಕ ಗೇರ್ ಧರಿಸಿ ಮತ್ತು ಇಂಗಾಲದ ಮಾನಾಕ್ಸೈಡ್ ವಿಷವನ್ನು ತಡೆಗಟ್ಟಲು ಒಳಾಂಗಣದಲ್ಲಿ ಅನಿಲ ಚಾಲಿತ ಸಾಧನಗಳನ್ನು ಬಳಸುವುದನ್ನು ತಪ್ಪಿಸಿ.",
                "ಗಾಯಗಳಿಗೆ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ನೀಡಿ, ಆದರೆ ಕುತ್ತಿಗೆ ಅಥವಾ ಬೆನ್ನಿಗೆ ಗಾಯಗಳಾಗಿರುವ ಯಾರನ್ನಾದರೂ ತೀರಾ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ ಸರಿಸಬೇಡಿ.",
                "ಚೆನ್ನಾಗಿ ತಿನ್ನುವ ಮೂಲಕ, ಸಾಕಷ್ಟು ವಿಶ್ರಾಂತಿ ಪಡೆಯುವ ಮೂಲಕ ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ವಿಪತ್ತು ವಿಪತ್ತು ಸಹಾಯವಾಣಿಯ ಮೂಲಕ ಬೆಂಬಲ ಪಡೆಯುವ ಮೂಲಕ ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯವನ್ನು ನೋಡಿಕೊಳ್ಳಿ."
              ]
            },
            cyclone:{
              id: 3,
              title: "ಚಂಡಮಾರುತ",
              btn_icon: CycloneIcon,
              btn_text: "ಚಂಡಮಾರುತ",
              icon: Cyclone_bIcon,
              tips: [
                "ಸಡಿಲವಾದ ಟೈಲ್ಸ್‌ಗಳನ್ನು ಭದ್ರಪಡಿಸಿ, ಬಾಗಿಲು ಮತ್ತು ಕಿಟಕಿಗಳನ್ನು ದುರಸ್ತಿ ಮಾಡಿ ಮತ್ತು ಮನೆಯ ಬಳಿಯಿರುವ ಸತ್ತ ಕೊಂಬೆಗಳು ಅಥವಾ ಮರಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
                "ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಯಾವುದೇ ಹಾನಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, ನೀರು ಸಂಗ್ರಹವಾಗುವುದನ್ನು ತಪ್ಪಿಸಲು ಗಟಾರಗಳು ಮತ್ತು ಚರಂಡಿಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ ಮತ್ತು ಅಗತ್ಯ ವಸ್ತುಗಳೊಂದಿಗೆ ತುರ್ತು ಕಿಟ್ ಅನ್ನು ಸಿದ್ಧಪಡಿಸಿ.",
               "ಬಲವಾದ ಗಾಳಿಯಲ್ಲಿ ಹಾರಾಡದಂತೆ ತಡೆಯಲು, ಮರದ ದಿಮ್ಮಿ, ತವರ ಹಾಳೆಗಳು, ಭಾರವಾದ ವಸ್ತುಗಳು ಮತ್ತು ಕಸದ ತೊಟ್ಟಿಗಳಂತಹ ಆಂಕರ್ ತೆಗೆಯಬಹುದಾದ ವಸ್ತುಗಳು.",
                "ಶಿಥಿಲಗೊಂಡ ಕಟ್ಟಡಗಳನ್ನು ಕೆಡವಿ, ಮತ್ತು ಯಾವಾಗಲೂ ಹೆಚ್ಚುವರಿ ಬ್ಯಾಟರಿಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗಾಗಿ ಹಾಳಾಗದ ಆಹಾರವನ್ನು ಒಣಗಿಸಿ."
              ],
              duringTips: [
               "ರೇಡಿಯೊದಲ್ಲಿ ಅಧಿಕೃತ ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಆಲಿಸುವ ಮೂಲಕ ಮತ್ತು ಇತರರಿಗೆ ಮಾಹಿತಿಯನ್ನು ರವಾನಿಸುವ ಮೂಲಕ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.",
               "ಗಾಳಿ ಶಾಂತವಾಗುತ್ತಿದ್ದಂತೆ ಕಾಣುವಾಗ ಹೊರಗೆ ಹೋಗಬೇಡಿ, ಏಕೆಂದರೆ ಇದು ಚಂಡಮಾರುತ ಹಾದುಹೋಗುವ 'ಕಣ್ಣು' ಆಗಿರಬಹುದು. ಬಲವಾದ ಗಾಳಿ ಶೀಘ್ರದಲ್ಲೇ ಮರಳುತ್ತದೆ, ಚಂಡಮಾರುತ ಅಧಿಕೃತವಾಗಿ ಹಾದುಹೋಗುವವರೆಗೆ ಮನೆಯೊಳಗೆ ಇರಿ.",
                "ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ವಿದ್ಯುತ್ ಮುಖ್ಯವನ್ನು ಆಫ್ ಮಾಡಿ.",
              "ನಿಮ್ಮ ಮನೆ ಸುರಕ್ಷಿತವಾಗಿ ಎತ್ತರದ ಪ್ರದೇಶದಲ್ಲಿ ನಿರ್ಮಿಸಿದ್ದರೆ, ಮನೆಯ ಸುರಕ್ಷಿತ ಭಾಗದಲ್ಲಿ ಆಶ್ರಯ ಪಡೆಯಿರಿ. ಆದಾಗ್ಯೂ, ಸ್ಥಳಾಂತರಿಸಲು ಕೇಳಿದರೆ ಸ್ಥಳದಿಂದ ಹೊರಹೋಗಲು ಹಿಂಜರಿಯಬೇಡಿ.",
              "ನೀವು ಮನೆಯಿಂದ ಸ್ಥಳಾಂತರಗೊಳ್ಳಬೇಕಾದರೆ, ಪ್ರವಾಹದಿಂದಾಗುವ ಹಾನಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನಿಮ್ಮ ಅಮೂಲ್ಯ ವಸ್ತುಗಳನ್ನು ಮೇಲಿನ ಮಹಡಿಗೆ ಸ್ಥಳಾಂತರಿಸಿ."
              ],
              afterTips: [
               "ಮನೆಗೆ ಮರಳುವುದು ಸುರಕ್ಷಿತ ಎಂದು ನಿಮಗೆ ತಿಳಿಸುವವರೆಗೂ ಆಶ್ರಯದಲ್ಲಿಯೇ ಇರಿ.",
               "ಚಂಡಮಾರುತದ ನಂತರ ತಕ್ಷಣವೇ ರೋಗಗಳ ವಿರುದ್ಧ ಲಸಿಕೆ ಹಾಕಿಸಿ.",
               "ದೀಪ ಕಂಬಗಳಿಂದ ಯಾವುದೇ ಸಡಿಲವಾದ ಅಥವಾ ತೂಗಾಡುವ ತಂತಿಗಳನ್ನು ತಪ್ಪಿಸಿ.",
               "ನಿಮ್ಮ ಆಸ್ತಿಯಿಂದ ಭಗ್ನಾವಶೇಷಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ ಮತ್ತು ಯಾವುದೇ ನಷ್ಟವನ್ನು ಅಧಿಕಾರಿಗಳಿಗೆ ವರದಿ ಮಾಡಿ."
              ]
            },
            flood:{
              id: 4,
              title: "ಪ್ರವಾಹ",
              btn_icon: FloodIcon,
              btn_text: "ಪ್ರವಾಹ",
              icon: Flood_bIcon,
              tips: [
               "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ರೇಡಿಯೋ ಕೇಳುವ ಮೂಲಕ, ಟಿವಿ ನೋಡುವ ಮೂಲಕ ಅಥವಾ ಪತ್ರಿಕೆಗಳನ್ನು ಓದುವ ಮೂಲಕ ನವೀಕೃತವಾಗಿರಿ.",
               "ಪ್ರಮುಖ ದಾಖಲೆಗಳು ಮತ್ತು ಬೆಲೆಬಾಳುವ ವಸ್ತುಗಳನ್ನು ಸಂಭಾವ್ಯ ಪ್ರವಾಹದಿಂದ ರಕ್ಷಿಸಲು ಜಲನಿರೋಧಕ ಚೀಲಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.",
               "ಸುರಕ್ಷಿತ ಸ್ಥಳಾಂತರಿಸುವ ಮಾರ್ಗಗಳ ಬಗ್ಗೆ ತಿಳಿದಿರಲಿ ಮತ್ತು ಅಧಿಕಾರಿಗಳು ಸೂಚಿಸಿದರೆ ತಕ್ಷಣ ಸ್ಥಳಾಂತರಿಸಿ. ನಿಮ್ಮ ಪ್ರಾಣಿಗಳು ಸುರಕ್ಷಿತವಾಗಿ ಸ್ಥಳಾಂತರಗೊಳ್ಳಲು ಅವುಗಳನ್ನು ಬಿಚ್ಚಲಾಗಿದೆಯೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
             "ಕಾಲುವೆಗಳು, ಹೊಳೆಗಳು ಮತ್ತು ಒಳಚರಂಡಿ ಕಾಲುವೆಗಳಂತಹ ಪ್ರವಾಹ ಪೀಡಿತ ಪ್ರದೇಶಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಪಡೆಯಿರಿ ಮತ್ತು ಅವುಗಳನ್ನು ತಪ್ಪಿಸಿ. ತ್ವರಿತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ."
              ],
              duringTips: [
              "ಪ್ರವಾಹದ ನೀರಿನಿಂದ ದೂರವಿರಿ ಮತ್ತು ಅವುಗಳನ್ನು ದಾಟುವಾಗ ಸೂಕ್ತವಾದ ಪಾದರಕ್ಷೆಗಳನ್ನು ಧರಿಸಿ. ಅಪಘಾತಗಳನ್ನು ತಡೆಗಟ್ಟಲು ಒಳಚರಂಡಿ ಮಾರ್ಗಗಳು, ಗಟಾರಗಳು, ಚರಂಡಿಗಳು ಮತ್ತು ಬಿದ್ದ ವಿದ್ಯುತ್ ಮಾರ್ಗಗಳನ್ನು ತಪ್ಪಿಸಿ.",
              "ತೆರೆದಿರುವ ಚರಂಡಿಗಳು ಮತ್ತು ಮ್ಯಾನ್‌ಹೋಲ್‌ಗಳನ್ನು ಬೀಳುವುದನ್ನು ತಪ್ಪಿಸಲು ಗೋಚರ ಚಿಹ್ನೆಗಳೊಂದಿಗೆ (ಉದಾ. ಕೆಂಪು ಧ್ವಜಗಳು ಅಥವಾ ಬ್ಯಾರಿಕೇಡ್‌ಗಳು) ಗುರುತಿಸಿ.",
              "ಪ್ರವಾಹದ ನೀರಿನಲ್ಲಿ ನಡೆಯಬೇಡಿ ಅಥವಾ ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ, ಏಕೆಂದರೆ ಎರಡು ಅಡಿಗಳಷ್ಟು ಚಲಿಸುವ ನೀರು ಕೂಡ ದೊಡ್ಡ ವಾಹನಗಳನ್ನು ಕೊಚ್ಚಿಹಾಕಬಹುದು.",
            "ಹೊಸದಾಗಿ ಬೇಯಿಸಿದ ಅಥವಾ ಒಣ ಆಹಾರವನ್ನು ಸೇವಿಸಿ ಮತ್ತು ಕಲುಷಿತಗೊಳ್ಳುವುದನ್ನು ತಡೆಗಟ್ಟಲು ಆಹಾರವನ್ನು ಮುಚ್ಚಿಡಲಾಗಿದೆಯೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
              "ಬೇಯಿಸಿದ ಅಥವಾ ಕ್ಲೋರಿನೇಟೆಡ್ ನೀರನ್ನು ಕುಡಿಯಿರಿ, ಮತ್ತು ನಿಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಲು ಮತ್ತು ರೋಗ ಹರಡುವುದನ್ನು ತಡೆಯಲು ಸೋಂಕುನಿವಾರಕಗಳನ್ನು ಬಳಸಿ."
              ],
              afterTips: [
              "ಮಕ್ಕಳನ್ನು ಪ್ರವಾಹದ ನೀರಿನಿಂದ ದೂರವಿಡಿ ಮತ್ತು ಹಾನಿಗೊಳಗಾದ ವಿದ್ಯುತ್ ಉಪಕರಣಗಳನ್ನು ಬಳಸುವುದನ್ನು ತಪ್ಪಿಸಿ; ಬಳಸುವ ಮೊದಲು ಅವುಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆಯೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
              "ಸೂಚನೆ ನೀಡಿದಾಗ ಉಪಯುಕ್ತತೆಗಳನ್ನು ಆಫ್ ಮಾಡಿ ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಅನ್‌ಪ್ಲಗ್ ಮಾಡಿ, ಮತ್ತು ಒದ್ದೆಯಾಗಿದ್ದರೆ ವಿದ್ಯುತ್ ಉಪಕರಣಗಳನ್ನು ಮುಟ್ಟುವುದನ್ನು ತಪ್ಪಿಸಿ.",
                "ಪ್ರವಾಹದ ಸಮಯದಲ್ಲಿ ಮುರಿದ ವಿದ್ಯುತ್ ತಂತಿಗಳು, ಚೂಪಾದ ವಸ್ತುಗಳು, ಭಗ್ನಾವಶೇಷಗಳು ಮತ್ತು ಹಾವುಗಳ ಬಗ್ಗೆ ಜಾಗರೂಕರಾಗಿರಿ ಮತ್ತು ಮಲೇರಿಯಾವನ್ನು ತಡೆಗಟ್ಟಲು ಸೊಳ್ಳೆ ಪರದೆಗಳನ್ನು ಬಳಸಿ.",
                "ಪ್ರವಾಹದ ನೀರಿನ ಸಂಪರ್ಕಕ್ಕೆ ಬಂದ ಆಹಾರವನ್ನು ಸೇವಿಸಬೇಡಿ, ಮತ್ತು ನಲ್ಲಿ ನೀರನ್ನು ಕುಡಿಯುವ ಮೊದಲು ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಸಲಹೆಗಾಗಿ ಕಾಯಿರಿ."
              ]
            },
            wildfire:{
              id: 5,
              title: "ಕಾಡ್ಗಿಚ್ಚು",
              btn_icon: WildfireIcon,
              btn_text: "ಕಾಡ್ಗಿಚ್ಚು",
              icon: Wildfire_bIcon,
              tips: [
               "ಸುಡುವ ಸಸ್ಯವರ್ಗದಿಂದ 30 ಅಡಿ ಬಫರ್ ಅನ್ನು ನಿರ್ವಹಿಸುವ ಮೂಲಕ, ಮರಗಳನ್ನು ಕತ್ತರಿಸುವ ಮೂಲಕ ಮತ್ತು ಛಾವಣಿಯ ಮೇಲ್ಮೈಗಳು ಮತ್ತು ಗಟಾರಗಳನ್ನು ಅವಶೇಷಗಳಿಂದ ಮುಕ್ತವಾಗಿಡುವ ಮೂಲಕ ನಿಮ್ಮ ಮನೆಯ ಸುತ್ತಲೂ ರಕ್ಷಣಾತ್ಮಕ ಜಾಗವನ್ನು ರಚಿಸಿ.",
               "ನಿರ್ಮಾಣಕ್ಕಾಗಿ ಅಗ್ನಿ ನಿರೋಧಕ ವಸ್ತುಗಳನ್ನು ಬಳಸಿ ಮತ್ತು ಪ್ರಮುಖ ದಾಖಲೆಗಳನ್ನು ಅಗ್ನಿ ನಿರೋಧಕ ಪಾತ್ರೆಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆಯೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
               "ಉರುವಲು, ದಹನಕಾರಿ ವಸ್ತುಗಳು ಮತ್ತು ಮರಗಳನ್ನು ಕಟ್ಟಡಗಳಿಂದ ದೂರವಿಡಿ ಮತ್ತು ಬೆಂಕಿಯ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸತ್ತ ಅಥವಾ ಕಡಿಮೆ ಕೊಂಬೆಗಳನ್ನು ಕತ್ತರಿಸಿ.",
               "ನಿಮ್ಮ ಕುಟುಂಬದೊಂದಿಗೆ ಸ್ಥಳಾಂತರಿಸುವ ಯೋಜನೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ ಮತ್ತು ಬ್ಯಾಟರಿ ಚಾಲಿತ ರೇಡಿಯೋಗಳು, ಬ್ಯಾಟರಿ ದೀಪಗಳು ಮತ್ತು ತಾಜಾ ಬ್ಯಾಟರಿಗಳು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಸಿದ್ಧವಾಗಿವೆಯೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."
              ],
              duringTips: [
              "ಇತ್ತೀಚಿನ ತುರ್ತು ನವೀಕರಣಗಳಿಗಾಗಿ ಟಿವಿ ಅಥವಾ ರೇಡಿಯೊವನ್ನು ಆನ್ ಮಾಡುವ ಮೂಲಕ ಮಾಹಿತಿ ಪಡೆದುಕೊಳ್ಳಿ.",
               "ಸಾಧ್ಯವಾದರೆ, ಮೆದುಗೊಳವೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿ, ಬಕೆಟ್‌ಗಳಿಗೆ ನೀರು ತುಂಬಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಮನೆಯ ಸುತ್ತಲಿನ ದಹನಕಾರಿ ವಸ್ತುಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ.",
               "ಪ್ರತಿ ಕೋಣೆಯಲ್ಲಿ ದೀಪಗಳನ್ನು ಆನ್ ಮಾಡುವ ಮೂಲಕ ಮತ್ತು ಸುಡುವ ಪರದೆಗಳು ಮತ್ತು ಪರದೆಗಳನ್ನು ತೆಗೆದುಹಾಕುವ ಮೂಲಕ ಸ್ಥಳಾಂತರಿಸುವಿಕೆಗೆ ಸಿದ್ಧರಾಗಿ.",
               "ಕುಟುಂಬದ ಎಲ್ಲಾ ಸದಸ್ಯರು, ಸಾಕುಪ್ರಾಣಿಗಳು ಮತ್ತು ಬೆಲೆಬಾಳುವ ವಸ್ತುಗಳು ಸೂಚನೆ ನೀಡಿದಾಗ ಸ್ಥಳಾಂತರಿಸಲು ಸಿದ್ಧವಾಗಿವೆಯೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ ಮತ್ತು ಕೀಲಿಗಳನ್ನು ಕಾರಿನ ಇಗ್ನಿಷನ್‌ನಲ್ಲಿ ಬಿಡಿ.",
               "ಹೆಚ್ಚಿನ ಅಪಾಯಗಳನ್ನು ತಡೆಗಟ್ಟಲು ಹವಾನಿಯಂತ್ರಣ, ಹವಾನಿಯಂತ್ರಣ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಆಫ್ ಮಾಡಿ ಮತ್ತು ವಿದ್ಯುತ್ ಗ್ಯಾರೇಜ್ ಬಾಗಿಲುಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ."
              ],
              afterTips: [
               "ನಿಮ್ಮ ಮನೆಗೆ ಹಿಂತಿರುಗುವ ಮೊದಲು ಅಗ್ನಿಶಾಮಕ ಅಧಿಕಾರಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ, ಹಾಗೆ ಮಾಡುವುದು ಸುರಕ್ಷಿತವಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
                "ಸುಟ್ಟ ಪ್ರದೇಶಗಳಿಗೆ ಮತ್ತೆ ಪ್ರವೇಶಿಸುವಾಗ ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ, ಏಕೆಂದರೆ ಉರಿಯುವಿಕೆಗಳು ಅನಿರೀಕ್ಷಿತವಾಗಿ ಸಂಭವಿಸಬಹುದು.",
                "ಹಾಟ್ ಸ್ಪಾಟ್‌ಗಳು, ಹೊಗೆಯಾಡುತ್ತಿರುವ ಸ್ಟಂಪ್‌ಗಳು ಮತ್ತು ಸಸ್ಯವರ್ಗಕ್ಕಾಗಿ ಮೈದಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಅವುಗಳನ್ನು ತಂಪಾಗಿಸಲು ನೀರನ್ನು ಬಳಸಿ.",
                "ಕಿಡಿಗಳು ಅಥವಾ ಗುಪ್ತ ಬೆಂಕಿಗಾಗಿ ಛಾವಣಿ, ಹೊರಭಾಗ ಮತ್ತು ಬೇಕಾಬಿಟ್ಟಿಯಾಗಿ ಪರಿಶೀಲಿಸಿ, ಮತ್ತು ಹಲವಾರು ದಿನಗಳವರೆಗೆ ಪ್ರದೇಶವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವುದನ್ನು ಮುಂದುವರಿಸಿ."
              ]
            },
            tsunami:{
              id: 6,
              title: "ಸುನಾಮಿ",
              btn_icon: TsunamiIcon,
              btn_text: "ಸುನಾಮಿ",
              icon: Tsunami_bIcon,
              tips: [
              "ಸುನಾಮಿಯ ಚಿಹ್ನೆಗಳನ್ನು ಗುರುತಿಸಿ, ಉದಾಹರಣೆಗೆ ಅಸಾಮಾನ್ಯ ಸಮುದ್ರ ನಡವಳಿಕೆ ಅಥವಾ ಜೋರಾಗಿ ಘರ್ಜನೆಗಳು, ಮತ್ತು ಸುರಕ್ಷಿತ ವಲಯಗಳಿಗೆ ಸ್ಥಳಾಂತರಿಸುವ ಮಾರ್ಗಗಳ ಬಗ್ಗೆ ಎಚ್ಚರವಿರಲಿ.",
                "ನಿಮ್ಮ ಸ್ಥಳಾಂತರಿಸುವ ಯೋಜನೆಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ಕನಿಷ್ಠ 100 ಅಡಿ ಎತ್ತರ ಅಥವಾ ಒಳನಾಡಿನ ಒಂದು ಮೈಲಿ ಇರುವ ಆಶ್ರಯಗಳನ್ನು ಹೇಗೆ ತಲುಪುವುದು ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
               "ವಿಭಜನೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಹೊರಗಿನ ಸಂಪರ್ಕ ಮತ್ತು ಸಭೆಯ ಸ್ಥಳದೊಂದಿಗೆ ಕುಟುಂಬ ತುರ್ತು ಸಂವಹನ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ.",
               "ಸಮುದಾಯ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆಗಳಿಗೆ ಸೈನ್ ಅಪ್ ಮಾಡುವ ಮೂಲಕ ಮತ್ತು ತುರ್ತು ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ಹವಾಮಾನ ರೇಡಿಯೊಗಳನ್ನು ಆಲಿಸುವ ಮೂಲಕ ಮಾಹಿತಿ ಪಡೆದುಕೊಳ್ಳಿ."
              ],
              duringTips: [
               "ಭೂಕಂಪದಿಂದ ಉಂಟಾದರೆ, ಬೀಳಿಸಿ, ಮುಚ್ಚಿಡಿ, ನಂತರ ಮೊದಲು ಭೂಕಂಪದಿಂದ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಲು ಹಿಡಿದುಕೊಳ್ಳಿ.",
                "ಅಲುಗಾಡುವಿಕೆ ನಿಂತ ನಂತರ, ಸುನಾಮಿ ಎಚ್ಚರಿಕೆಗಳನ್ನು ನೀಡಿದರೆ ಅಥವಾ ನೈಸರ್ಗಿಕ ಚಿಹ್ನೆಗಳು ಕಂಡುಬಂದರೆ, ಎತ್ತರದ ಮತ್ತು ಒಳನಾಡಿನ ಸ್ಥಳಕ್ಕೆ ತೆರಳಿ.",
               "ಸ್ಥಳಾಂತರಿಸಲು ಸೂಚಿಸಿದರೆ, ಎತ್ತರದ ನೆಲದ ಕಡೆಗೆ ಅಲೆಯ ಚಿಹ್ನೆಯಿಂದ ಗುರುತಿಸಲಾದ ಸ್ಥಳಾಂತರಿಸುವ ಮಾರ್ಗಗಳನ್ನು ಅನುಸರಿಸಿ.",
              "ನೀವು ನೀರಿನಲ್ಲಿದ್ದರೆ, ತೆಪ್ಪ ಅಥವಾ ಮರದ ಕಾಂಡದಂತಹ ತೇಲುತ್ತಿರುವ ಯಾವುದನ್ನಾದರೂ ಹಿಡಿಯಿರಿ.",
               "ನೀವು ದೋಣಿಯಲ್ಲಿದ್ದರೆ, ಅಲೆಗಳ ದಿಕ್ಕಿಗೆ ಮುಖ ಮಾಡಿ ಸಮುದ್ರಕ್ಕೆ ಹೋಗಿ. ನೀವು ಬಂದರಿನಲ್ಲಿದ್ದರೆ, ಒಳನಾಡಿಗೆ ಹೋಗಿ."
              ],
              afterTips: [
               "ಆಶ್ರಯ ಸ್ಥಳಗಳು ಮತ್ತು ತಪ್ಪಿಸಬೇಕಾದ ಪ್ರದೇಶಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳನ್ನು ಆಲಿಸಿ; ತುರ್ತು-ಅಲ್ಲದ ಸಂವಹನಕ್ಕಾಗಿ ಪಠ್ಯ ಅಥವಾ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮವನ್ನು ಬಳಸಿ.",
             "ಪ್ರವಾಹದ ನೀರನ್ನು ತಪ್ಪಿಸಿ ಏಕೆಂದರೆ ಅದು ಶಿಲಾಖಂಡರಾಶಿಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು ಮತ್ತು ಅದು ಕಾಣುವುದಕ್ಕಿಂತ ಆಳವಾಗಿರಬಹುದು; ವಿದ್ಯುತ್ ಆಘಾತವನ್ನು ತಡೆಗಟ್ಟಲು ಉರುಳಿಬಿದ್ದ ವಿದ್ಯುತ್ ತಂತಿಗಳಿಂದ ದೂರವಿರಿ.",
                "ನೀವು ಗಾಯಗೊಂಡರೆ ಅಥವಾ ಅನಾರೋಗ್ಯಕ್ಕೆ ಒಳಗಾಗಿ ವೈದ್ಯಕೀಯ ಆರೈಕೆಯ ಅಗತ್ಯವಿದ್ದರೆ, ಸಾಧ್ಯವಾದರೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪೂರೈಕೆದಾರರನ್ನು ಮತ್ತು ಆಶ್ರಯ ತಾಣವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
               "ಹಾನಿಗೊಳಗಾದ ಕಟ್ಟಡಗಳು, ರಸ್ತೆಗಳು ಮತ್ತು ಸೇತುವೆಗಳಿಂದ ದೂರವಿರಿ."
              ]
            },
            landslide:{
              id: 7,
              title: "ಭೂಕುಸಿತ",
              icon: Landslide_bIcon,
              btn_text: "ಭೂಕುಸಿತ",
              btn_icon: LandSlideIcon,
              tips: [
                "ಭೂಕುಸಿತ ಸಂಭವಿಸಿದಾಗ ಏನು ಮಾಡಬೇಕೆಂದು ಎಲ್ಲರಿಗೂ ತಿಳಿದಿರುವಂತೆ ಮಾಡಲು, ತುರ್ತು ಕಿಟ್ ಅನ್ನು ನಿರ್ಮಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಸಾಕುಪ್ರಾಣಿಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ಮನೆಯ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ.",
               "ಸಮುದಾಯ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆಗಳಿಗೆ ಸೈನ್ ಅಪ್ ಮಾಡಿ ಮತ್ತು ಸೂಚನೆ ನೀಡಿದರೆ ಅಥವಾ ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ನೀವು ಅಸುರಕ್ಷಿತರೆಂದು ಭಾವಿಸಿದರೆ ಸ್ಥಳಾಂತರಿಸಿ.",
               "ವೃತ್ತಿಪರರ ಸಲಹೆಯ ಆಧಾರದ ಮೇಲೆ ಮರಳು ಚೀಲಗಳು, ತಡೆಗೋಡೆಗಳು ಅಥವಾ ತಡೆಗೋಡೆಗಳಂತಹ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳಿಂದ ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ರಕ್ಷಿಸಿ.",
               "ನಿಮ್ಮ ಪಾಲಿಸಿಯ ಅಡಿಯಲ್ಲಿ ಶಿಲಾಖಂಡರಾಶಿಗಳ ಹರಿವು ಅಥವಾ ಮಣ್ಣು ಕುಸಿತಗಳು ಒಳಗೊಳ್ಳುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲು ನಿಮ್ಮ ವಿಮಾ ಏಜೆಂಟ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಸಂಭಾವ್ಯ ಅಪಾಯಗಳಿಗೆ ಸೂಕ್ತವಾದ ವ್ಯಾಪ್ತಿಯನ್ನು ಪರಿಗಣಿಸಿ."
              ],
              duringTips: [
             "ತುರ್ತುಸ್ಥಿತಿ ವ್ಯವಸ್ಥಾಪಕರ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ. ಅವರು ನಿಮ್ಮ ಸಮುದಾಯದಲ್ಲಿನ ಬೆದರಿಕೆಯನ್ನು ಆಧರಿಸಿ ಇತ್ತೀಚಿನ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸುತ್ತಾರೆ.",
                "ಭೂಕುಸಿತಕ್ಕೆ ಕಾರಣವಾಗುವ ಚಂಡಮಾರುತದ ಸಮಯದಲ್ಲಿ ಜಾಗರೂಕರಾಗಿರಿ ಮತ್ತು ಎಚ್ಚರವಾಗಿರಿ. ಜನರು ನಿದ್ದೆ ಮಾಡುವಾಗ ಭೂಕುಸಿತಗಳಿಂದ ಅನೇಕ ಸಾವುಗಳು ಸಂಭವಿಸುತ್ತವೆ.",
               "ಹರಿಯುವ ನೀರು ಅಥವಾ ಮಣ್ಣಿನಿಂದ ಕೂಡಿದ ರಸ್ತೆಗಳು ಅಥವಾ ಸೇತುವೆಗಳನ್ನು ದಾಟಲು ಎಂದಿಗೂ ಪ್ರಯತ್ನಿಸಬೇಡಿ, ಏಕೆಂದರೆ ಶಿಲಾಖಂಡರಾಶಿಗಳ ಹರಿವು ವೇಗವಾಗಿ ಹೆಚ್ಚಾಗಬಹುದು, ತಪ್ಪಿಸಿಕೊಳ್ಳುವುದು ಅಸಾಧ್ಯ.",
                "ನೀರಿನ ಹರಿವಿನಲ್ಲಿ ಹಠಾತ್ ಬದಲಾವಣೆಗಳ ಬಗ್ಗೆ ಅಥವಾ ನೀರು ಕೆಸರುಮಯವಾಗಿದ್ದರೆ ಎಚ್ಚರದಿಂದಿರಿ, ಏಕೆಂದರೆ ಇವುಗಳು ಸನ್ನಿಹಿತವಾದ ಭೂಕುಸಿತದ ಸೂಚನೆಯಾಗಿರಬಹುದು.",
              "ಅಪಾಯದ ಸಮಯದಲ್ಲಿ ನದಿ ಕಣಿವೆಗಳು ಮತ್ತು ತಗ್ಗು ಪ್ರದೇಶಗಳನ್ನು ತಪ್ಪಿಸಿ.",
              "ನೀವು ಭೂಕುಸಿತದ ಹಾದಿಯಲ್ಲಿ ಸಿಲುಕಿಕೊಂಡರೆ, ಸಾಧ್ಯವಾದಷ್ಟು ಬೇಗ ಹತ್ತುವಿಕೆಗೆ ತೆರಳಿ."
                            ],
              afterTips: [
               "ಹೆಚ್ಚುವರಿ ಜಾರುಗಳಿಂದ ಹೆಚ್ಚಿನ ಅಪಾಯವನ್ನು ತಪ್ಪಿಸಲು ಜಾರು ಪ್ರದೇಶದಿಂದ ದೂರವಿರಿ.",
               "ತುರ್ತು ಮಾಹಿತಿ ಮತ್ತು ನವೀಕರಣಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ರೇಡಿಯೋ ಅಥವಾ ದೂರದರ್ಶನವನ್ನು ಆಲಿಸಿ.",
                "ತುಂಡಾದ ಉಪಯುಕ್ತತೆಗಳು ಮತ್ತು ಹಾನಿಗೊಳಗಾದ ಮೂಲಸೌಕರ್ಯಗಳಂತಹ ಅಪಾಯಗಳನ್ನು ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ಅಧಿಕಾರಿಗಳಿಗೆ ವರದಿ ಮಾಡಿ.",
               "ಸವೆತವನ್ನು ತಡೆಗಟ್ಟಲು ಹಾನಿಗೊಳಗಾದ ನೆಲವನ್ನು ಮರು ನೆಡುವುದು ಸೇರಿದಂತೆ, ಭೂಕುಸಿತದ ಅಪಾಯಗಳನ್ನು ನಿರ್ಣಯಿಸಲು ಮತ್ತು ಕಡಿಮೆ ಮಾಡಲು ವೃತ್ತಿಪರ ಸಲಹೆಯನ್ನು ಪಡೆಯಿರಿ."
              ]
            },
            
            
            
            

          drought: {
            id: 8,
            btn_icon:DroughtIcon,
    
            icon:Drought_bIcon,

            title: "ಬರಗಾಲ",
            btn_text: "ಬರಗಾಲ",
            tips: [
             "ನೀರಿನ ತ್ಯಾಜ್ಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸೋರಿಕೆಯನ್ನು ಸರಿಪಡಿಸಿ, ನೀರಿನ-ಸಮರ್ಥ ಫಿಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ಮತ್ತು ಶಕ್ತಿ-ಸೂಕ್ಷ್ಮ ಉಪಕರಣಗಳನ್ನು ಆರಿಸಿ.",
             "ಬರ-ನಿರೋಧಕ ಸಸ್ಯಗಳನ್ನು ಬಳಸಿ, ನೀರಿನ ಅಗತ್ಯಗಳ ಆಧಾರದ ಮೇಲೆ ಅವುಗಳನ್ನು ಗುಂಪು ಮಾಡಿ ಮತ್ತು ನೀರನ್ನು ಮರುಬಳಕೆ ಮಾಡದ ಹೊರತು ಅಲಂಕಾರಿಕ ನೀರಿನ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ತಪ್ಪಿಸಿ.",
              "ನೀರಿನ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು, ವಿಶೇಷವಾಗಿ ಬರ ಪೀಡಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ಶೌಚಾಲಯಗಳಲ್ಲಿ ಸ್ಥಳಾಂತರ ಸಾಧನಗಳನ್ನು ಬಳಸಿ ಅಥವಾ ಕಡಿಮೆ ಹರಿವಿನ ಶೌಚಾಲಯಗಳನ್ನು ಆರಿಸಿಕೊಳ್ಳಿ.",
             "ಮಳೆನೀರನ್ನು ಸಂಗ್ರಹಿಸಿ ಮತ್ತು ಅದನ್ನು ಸಸ್ಯಗಳಿಗೆ, ತೋಟಗಳಿಗೆ ಅಥವಾ ನಿಮ್ಮ ಕಾರನ್ನು ತೊಳೆಯಲು ಬಳಸಿ."
            ],
            duringTips: [
              "ಟಾಯ್ಲೆಟ್‌ನಲ್ಲಿ ಅನಗತ್ಯವಾಗಿ ಫ್ಲಶ್ ಮಾಡುವುದನ್ನು ತಪ್ಪಿಸಿ, ಸ್ವಲ್ಪ ಹೊತ್ತು ಸ್ನಾನ ಮಾಡಿ, ಹಲ್ಲುಜ್ಜುವಾಗ, ಮುಖ ತೊಳೆಯುವಾಗ ಅಥವಾ ಶೇವಿಂಗ್ ಮಾಡುವಾಗ ನೀರನ್ನು ಆಫ್ ಮಾಡಿ.",
             "ಪೂರ್ಣ ಲೋಡ್‌ಗಳೊಂದಿಗೆ ಮಾತ್ರ ತೊಳೆಯುವ ಯಂತ್ರಗಳನ್ನು ಚಲಾಯಿಸಿ, ಅಥವಾ ಲೋಡ್ ಗಾತ್ರಕ್ಕೆ ಅನುಗುಣವಾಗಿ ನೀರಿನ ಮಟ್ಟವನ್ನು ಹೊಂದಿಸಿ.",
              "ಬರಗಾಲದ ಸಮಯದಲ್ಲಿ ನೀರಿನ ಬಳಕೆಯ ಮೇಲೆ ರಾಜ್ಯ ಮತ್ತು ಸ್ಥಳೀಯ ನಿರ್ಬಂಧಗಳನ್ನು ಅನುಸರಿಸಿ. ಪ್ರಸ್ತುತ ಮಾಹಿತಿ ಮತ್ತು ಸಲಹೆಗಳಿಗಾಗಿ ನಿಮ್ಮ ರಾಜ್ಯ ಅಥವಾ ಸ್ಥಳೀಯ ಸರ್ಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
             "ತರಕಾರಿಗಳನ್ನು ತೊಳೆಯುವುದರಿಂದ ಅಥವಾ ಪಾತ್ರೆಗಳನ್ನು ತೊಳೆಯುವುದರಿಂದ ಸಂಗ್ರಹಿಸಿದ ನೀರಿನಿಂದ ಹೊರಾಂಗಣ ಸಸ್ಯಗಳಿಗೆ ನೀರನ್ನು ಮರುಬಳಕೆ ಮಾಡಿ.",
            "ನೀರಿನ ಆವಿಯಾಗುವಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಬರ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಹುಲ್ಲುಹಾಸನ್ನು ಕತ್ತರಿಸುವ ಆವರ್ತನವನ್ನು ಕಡಿಮೆ ಮಾಡಿ.",
             "ದಿನದ ಅತ್ಯಂತ ಬಿಸಿಲಿನ ಸಮಯದಲ್ಲಿ ಸಸ್ಯಗಳಿಗೆ ನೀರು ಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ; ಬೆಳಿಗ್ಗೆ ಅಥವಾ ಸಂಜೆ ಉತ್ತಮ."
            ],
            afterTips: [
            "ಹುಲ್ಲು, ಜಾನುವಾರುಗಳು ಮತ್ತು ಹಣಕಾಸಿನ ಮೇಲೆ ಬರಗಾಲದ ಪರಿಣಾಮವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ ಮತ್ತು ಹುಲ್ಲುಗಾವಲುಗಳು ಮತ್ತು ಪ್ರಾಣಿಗಳ ಕಾರ್ಯಕ್ಷಮತೆಯ ಚೇತರಿಕೆಯ ಸಮಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
            "ಬರಗಾಲದ ಸಮಯದಲ್ಲಿ ನೀರು ಸರಬರಾಜಿಗೆ ಮಳೆನೀರು ಕೊಯ್ಲು ಅಥವಾ ಇತರ ಸುಸ್ಥಿರ ವಿಧಾನಗಳನ್ನು ಸೇರಿಸುವ ಮೂಲಕ ನಿಮ್ಮ ನೀರಿನ ಮೂಲಗಳನ್ನು ವೈವಿಧ್ಯಗೊಳಿಸಿ.",
         "ಬರಗಾಲದ ಸಮಯದಲ್ಲಿ ಎಲ್ಲರೂ ಕೊಡುಗೆ ನೀಡುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಪರಿಣಾಮಕಾರಿ ನೀರಿನ ಬಳಕೆಯ ಅಭ್ಯಾಸಗಳ ಬಗ್ಗೆ ನೌಕರರು ಅಥವಾ ಕುಟುಂಬ ಸದಸ್ಯರಿಗೆ ಶಿಕ್ಷಣ ನೀಡಿ ಮತ್ತು ತರಬೇತಿ ನೀಡಿ.",
            "ಮುಂದಿನ ಬರಗಾಲದ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಹುಲ್ಲುಗಾವಲುಗಳು, ಜಾನುವಾರುಗಳು, ಹಣಕಾಸು ಮತ್ತು ಕುಟುಂಬದ ಯೋಗಕ್ಷೇಮವನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುವ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ."
            ]

      
          
          
          }}
                  
          

        },
      },

                    
          
        }
        

      
  
  });

export default i18n;
