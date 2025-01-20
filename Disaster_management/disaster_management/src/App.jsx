
import React, { useState } from 'react';
import Header from '@/components/Header.jsx';
import Navbar from '@/components/Navbar.jsx';
import Hotspots from '@/components/Hotspots.jsx';
import Essentials from '@/components/Essentials.jsx';
import SafetyMeasures from './components/SafetyMeasures';


export default function App() {

  const [userLocation, setUserLocation] = useState(null);
  const [message, setMessage] = useState("");
  

  const getLocationAndSendHelp = () => {
    // if (window.confirm("This feature is for emergencies only. Confirm if you need urgent help.")) {
    
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
          
         
        },
        (error) => {
          let errorMessage = "Unable to find location.";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access was denied. Please allow location access.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "The request to get user location timed out.";
              break;
            default:
              errorMessage = "An unknown error occurred.";
          }
          alert(errorMessage);
        }
      );
    
  };

  return (
    <div>
<Header getLocationAndSendHelp={getLocationAndSendHelp} />  


      
      
      
      <Hotspots userLocation={userLocation} />
      
      <Essentials/>
      <SafetyMeasures />
    </div>
  );
}
