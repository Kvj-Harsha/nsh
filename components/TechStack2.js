import React from 'react';
import { FaRocket, FaMapMarkedAlt, FaSatellite, FaRegCompass, FaMap } from 'react-icons/fa';

const TechStack2 = () => {
  const techStack = [
    { category: 'Framework', items: [{ name: 'Next.js', icon: <FaRocket /> }] },
    {
      category: 'Live Location Tracking',
      items: [
        { name: 'Open Notify API (Coordinates)', icon: <FaSatellite /> },
        { name: 'OpenGate Reverse Geocoding', icon: <FaMapMarkedAlt /> },
      ],
    },
    {
      category: 'Map Visualization',
      items: [
        { name: 'Leaflet Map', icon: <FaMap /> },
        { name: 'React-Leaflet', icon: <FaRegCompass /> },
      ],
    },
  ];

  return (
    <div className="bg-[#111827] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Tech Stack Used</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {techStack.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-pink-900 hover:bg-opacity-30 transition-shadow duration-300 hover:box-shadow-[0_0_15px_5px_rgba(0,153,255,0.7)]"
          >
            <h2 className="text-lg font-semibold mb-3">{section.category}</h2>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center text-base pl-3">
                  {item.icon} {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack2;
