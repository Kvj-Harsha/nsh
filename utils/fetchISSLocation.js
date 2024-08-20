// src/utils/fetchISSLocation.js

export const fetchISSLocation = async () => {
  const response = await fetch('http://api.open-notify.org/iss-now.json');
  const data = await response.json();
  return {
    latitude: data.iss_position.latitude,
    longitude: data.iss_position.longitude,
  };
};
