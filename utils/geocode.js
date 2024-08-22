import axios from 'axios';

const API_KEY = 'f3e2e0b3c6a6481abe6558f9e8112cba'; // Replace with your actual API key

export const getLocation = async (latitude, longitude) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const results = response.data.results;
    if (results.length > 0) {
      return results[0].formatted; // Return the formatted address
    } else {
      return 'Location not found';
    }
  } catch (error) {
    console.error('Error fetching location:', error);
    return 'Error fetching location';
  }
};
