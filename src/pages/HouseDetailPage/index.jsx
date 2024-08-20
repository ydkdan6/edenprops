import React from 'react';
import { useLocation } from 'react-router-dom';

const HouseDetailPage = () => {
  const location = useLocation();
  const { imageSrc, title, description, features } = location.state || {};

  if (!imageSrc) {
    return <div>Error: No house data available</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover rounded-lg shadow-md" />
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      <p className="mt-4 text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path>
              <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
            </svg>
            &nbsp; {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseDetailPage;
