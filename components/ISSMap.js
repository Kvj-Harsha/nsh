// src/components/ISSMap.js

import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/iss.png',       // Path to your custom icon
  iconSize: [70,70],             // Size of the icon
  iconAnchor: [16, 32],           // Anchor point of the icon
  popupAnchor: [0, -32],          // Popup position relative to the icon
});

const ISSMap = ({ latitude, longitude }) => {


  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={3}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[latitude, longitude]}
        icon={customIcon}  // Use the custom icon
      />

    
    </MapContainer>
    
    
  );
};


export default ISSMap;
