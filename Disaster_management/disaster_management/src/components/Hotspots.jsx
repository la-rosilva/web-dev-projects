
import React, { useState, useRef, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import alertIcon from '@/assets/alert.png';
import checkIcon from '@/assets/check.png';
import locationIcon from '@/assets/home.png';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';


const markerIcon = new L.Icon({
  iconUrl: alertIcon,
  iconSize: [30, 33],
  iconAnchor: [12, 0],
  popupAnchor: [3, 5],
});

const helpIcon = new L.Icon({
  iconUrl: checkIcon,
  iconSize: [30, 33],
  iconAnchor: [12, 0],
  popupAnchor: [3, 5],
});

const NGOIcon=new L.Icon({
  iconUrl:locationIcon,
  iconSize:[53,53],
  iconAnchor:[12,0],
  popupAnchor:[3,5],
})



const Hotspots = ({ userLocation }) => {
  const {t}=useTranslation();
  const NGOLocations=[
    {lat:13.6215, lon:74.7003,name:t("ngo1"), icon:NGOIcon, phone:"+91 1234567890"},
    {lat:13.3499 ,lon:74.7854,name:t("ngo2"), icon:NGOIcon, phone:"+91 9087654321"}
  ]
  const [zoom, setZoom] = useState(5);
  const [center] = useState([20.5937, 78.9629]); // Default center
  const [help, setHelp] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(markerIcon);
  const [locationName,setLocationName]=useState('Fetching location...')
  const [ngoDetails, setNGODetails] = useState(NGOLocations); 
  const mapRef = useRef();
  

  useEffect(() => {
    if (userLocation) {
      fetchLocationName(userLocation.lat, userLocation.lon).then((name) =>
        setLocationName(name)
      );
    }
  }, [userLocation]);


  

  

  const fetchLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      console.log(data);
      return data.display_name||'location not found' // Returns the location name
    } catch (error) {
      console.error('Error fetching location name:', error);
      return 'Location name not available';
    }
  };

  const handleMarkerClick = (lat,lon) => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      const zoomOnClick = zoom === 5 ? 18 : 5;
      setZoom(zoomOnClick);
      map.setView([lat,lon], zoomOnClick);
    }
  };

  const handleHelp = (e) => {
    const isChecked = e.target.checked;
    setHelp(isChecked);
    setCurrentIcon(isChecked ? helpIcon : markerIcon);
  };

  return (
    // <div className=" h-screen w-full flex">
    <div className='animate-fadeIn relative w-screen flex h-screen' id='Map'>
      <div className="w-1/4 h-screen bg-white">
        <div className="form-row top-10" style={{ textAlign: 'left' }}>
          {userLocation ? (
            <div className={`max-w-xl ${help?'bg-green-300':'bg-red-300'}  rounded-lg px-2 py-2 mt-2 mr-2 ml-2`}>
              <label className='text-md px-2'htmlFor="help">
                {t("lat")}: {userLocation.lat}, {t("long")}: {userLocation.lon}
              </label>
             
              <p className='text-md px-2 py-2'>{t("loc")}: {locationName}</p>
              <input className='w-5 h-5 border border-green-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-600'
            type="checkbox"
            name="help"
            id="help"
            checked={help}
            onChange={handleHelp}
          />
            </div>
          ) : (
            ""
          )}
         
        </div>
      </div>
      <div className="h-full w-3/4">
        <Map
          center={userLocation ? [userLocation.lat, userLocation.lon] : center}
          zoom={zoom}
          style={{ width: '100%', height: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=34AvhBoP0IkMaDddQxZ9"
            attribution="&copy; <a href='https://www.maptiler.com/copyright/'>MapTiler</a> &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
          />

          {NGOLocations.map((location,index)=>(
            <Marker
            key={index}
            position={[location.lat,location.lon]}
            icon={location.icon}

            onClick={()=>handleMarkerClick(location.lat,location.lon)}
           >
            <Popup>
            {location.name}
            <br />
            
            <span style={{color:'#0092ca'}} className='flex items-center mx-2 my-1'> 
              <PhoneIcon className='w-4 h-4'/>

            {location.phone}
            </span>
            
               

            </Popup>s
            </Marker>
          ))}

          
          {userLocation && (
            <Marker
              position={[userLocation.lat, userLocation.lon]}
              icon={currentIcon}
              onClick={()=>handleMarkerClick(userLocation.lat,userLocation.lon)}
            >
              <Popup>
                {t("lat")}: {userLocation.lat}, {t("long")}: {userLocation.lon}
                <br />
                {locationName}
              </Popup>
            </Marker>
          )}
        </Map>
      </div>
    </div>
  );
};

export default Hotspots;
