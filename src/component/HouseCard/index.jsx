import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../utils/Image';

const HouseCard = ({ id, imageSrc, title, description, brief, features, bedrooms, bathrooms, price, space, location, electricity, whatsappNumber, email, phone  }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/houses/${id}`, {
      state: {
        id,
        imageSrc,
        title,
        description,
        brief,
        features,
        bedrooms,
        bathrooms,
        price,
        space,
        location,
        electricity,
        whatsappNumber,
        email,
        phone,
      },
    });
  };

  return (
    <div className="w-[300px] h-[200px] m-4 mt-[10px] bg-white rounded-lg shadow-md relative">
      <div className="bg-white shadow-sm w-[250px] h-[100px] z-10 absolute right-6 top-[150px] rounded-lg p-4 z-7">
        <h2 className="text-xl md:text-xl font-bold text-gray-800">{title}</h2>
        <div className="flex justify-between mt-4 w-[270px]">
          <ul className="flex justify-start items-left w-full space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                  <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path>
                  <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                </svg>
                &nbsp; {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={handleViewDetails}
            className="h-[30px] w-[90px] bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded absolute right-2"
          >
            View
          </button>
        </div>
      </div>

      <Image src={imageSrc} alt={title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg" />
    </div>
  );
};

export default HouseCard;
