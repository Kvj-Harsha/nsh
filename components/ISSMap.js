"use client";

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.icon({
  iconUrl: '/iss.png',
  iconSize: [70, 70],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ISSMap = ({ latitude, longitude }) => {
  return (
    <div className='px-10'>

    <MapContainer
      center={[latitude, longitude]}
      zoom={3}
      style={{ height: '500px', width: '100%' }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      <Marker position={[latitude, longitude]} icon={customIcon} />
    </MapContainer>
        </div>
  );
};

export default ISSMap;
