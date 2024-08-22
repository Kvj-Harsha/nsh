import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const GoogleColabButton = () => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg max-w-sm mx-auto">
      <p className="mb-3 text-center">
        Access Google Colab for interactive Python notebooks:
      </p>
      <a
        href="https://colab.research.google.com/drive/1nPj0jFIkBhcN-fp3ZD45eGqMmQUopq3f?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full text-center"
      >
        <FaLaptopCode className="mr-2" /> Google Colab
      </a>
    </div>
  );
};

export default GoogleColabButton;
