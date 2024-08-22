import React from 'react';
import { FaPython, FaDatabase, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

const TechStack = () => {
  const techStack = [
    { category: 'Programming Language', items: [{ name: 'Python', icon: <FaPython /> }] },
    {
      category: 'Data Processing and Analysis',
      items: [
        { name: 'Pandas', icon: <FaDatabase /> },
        { name: 'NumPy', icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Image Processing',
      items: [
        { name: 'OpenCV', icon: <FaLaptopCode /> },
        { name: 'Matplotlib', icon: <FaLaptopCode /> },
        { name: 'Seaborn', icon: <FaLaptopCode /> },
      ],
    },
    {
      category: 'Visualization',
      items: [
        { name: 'Plotly', icon: <FaProjectDiagram /> },
        { name: 'Matplotlib', icon: <FaProjectDiagram /> },
      ],
    },
    {
      category: 'Machine Learning and Model Training',
      items: [{ name: 'Scikit-learn', icon: <FaLaptopCode /> }],
    },
    {
      category: 'Experiment Tracking',
      items: [{ name: 'Weights & Biases (Wandb)', icon: <FaProjectDiagram /> }],
    },
    {
      category: 'Data Storage and Access',
      items: [{ name: 'Google Drive API', icon: <FaDatabase /> }],
    },
    {
      category: 'Development Environment',
      items: [{ name: 'Google Colab', icon: <FaLaptopCode /> }],
    },
    {
      category: 'File Handling',
      items: [{ name: 'OS Module', icon: <FaLaptopCode /> }],
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

export default TechStack;
