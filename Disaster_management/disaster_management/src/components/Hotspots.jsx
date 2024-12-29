
import React, { useState, useRef, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import alertIcon from '@/assets/alert.png';
import checkIcon from '@/assets/check.png';

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

const Hotspots = ({ userLocation }) => {
  const [zoom, setZoom] = useState(2);
  const [center] = useState([40.712776, -74.005974]); // Default center
  const [help, setHelp] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(markerIcon);
  const [locationName,setLocationName]=useState('Fetching location...')
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
      return data.display_name; // Returns the location name
    } catch (error) {
      console.error('Error fetching location name:', error);
      return 'Location name not available';
    }
  };

  const handleMarkerClick = () => {
    if (userLocation) {
      const map = mapRef.current.leafletElement;
      const zoomOnClick = zoom === 2 ? 18 : 2;
      setZoom(zoomOnClick);
      map.setView([userLocation.lat, userLocation.lon], zoomOnClick);
    }
  };

  const handleHelp = (e) => {
    const isChecked = e.target.checked;
    setHelp(isChecked);
    setCurrentIcon(isChecked ? helpIcon : markerIcon);
  };

  return (
    <div className="h-screen w-full flex">
      <div className="w-1/4 h-screen bg-white">
        <div className="form-row top-10" style={{ textAlign: 'left' }}>
          {userLocation ? (
            <div className={`max-w-xl ${help?'bg-green-300':'bg-red-300'}  rounded-lg px-2 py-2 mt-2 mr-2 ml-2`}>
              <label className='text-md px-2'htmlFor="help">
                Latitude: {userLocation.lat}, Longitude: {userLocation.lon}
              </label>
             
              <p className='text-md px-2 py-2'>Location Name: {locationName}</p>
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
          {userLocation && (
            <Marker
              position={[userLocation.lat, userLocation.lon]}
              icon={currentIcon}
              onClick={handleMarkerClick}
            >
              <Popup>
                Latitude: {userLocation.lat}, Longitude: {userLocation.lon}
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
