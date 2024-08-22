import { useEffect, useState } from 'react';
import { getLocation } from '../utils/geocode'; // Adjust the path if necessary

const ISSCoordinates = ({ latitude, longitude }) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      const loc = await getLocation(latitude, longitude);
      setLocation(loc);
    };

    fetchLocation();
  }, [latitude, longitude]);

  return (
    <div>
        <center>
          <br/><br/>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-3xl 
                        hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-pink-600 hover:bg-clip-text">
            International Space Station Real-time Coordinates & Locatiion 
          </h1>
          <br/>
          <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent sm:text-2xl 
                        hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-pink-600 hover:bg-clip-text">
            Latitude: {latitude}
          </p>
          <br/>
          <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent sm:text-2xl 
                        hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-pink-600 hover:bg-clip-text">
            Longitude: {longitude}
          </p>
          <br/>
          <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent sm:text-2xl 
                        hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-pink-600 hover:bg-clip-text">
            Location: {location}
          </p>
          <br/><br/>
        </center>

    </div>
  );
};

export default ISSCoordinates;
