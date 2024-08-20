// src/components/ISSCoordinates.js

const ISSCoordinates = ({ latitude, longitude }) => {
  return (
    <div>
      <center>
      <br/><br/>
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-5xl" >ISS Coordinates</h1>
      <br/>
      <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-5xl">Latitude: {latitude}</p>
      <br/>
      <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-5xl">Longitude: {longitude}</p>
      <br/><br/>
      </center>
    </div>
  );
};

export default ISSCoordinates;
