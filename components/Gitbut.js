import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Gitbut = ({ href, text = "Check out our complete code on GitHub" }) => {
  return (
    <div className='p-10 bg-[#111827]'>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
    >
      <FaGithub className="mr-2" />
      {text}
    </a>
      </div>
  );
};

export default Gitbut;
