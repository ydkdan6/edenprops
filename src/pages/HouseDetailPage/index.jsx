import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';


const HouseDetailPage = () => {
  const { id } = useParams(); // Get the house ID from the URL parameters
  const location = useLocation();

  // Use data from the state if available, otherwise find by ID
  const house = location.state || houses.find(h => h.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 md:w-screen">
      <div className="container mx-auto px-4">
        {/* House imageSrc */}
        <div className="mb-8">
          <img 
            src={house.imageSrc} 
            alt={house.title} 
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* House Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{house.title}</h1>

        {/* House Description */}
        <p className="text-lg text-gray-700 mb-6">
          {house.description}
        </p>

        {/* House Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Bedrooms</h2>
            <p className="text-gray-700">{house.bedrooms}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Bathrooms</h2>
            <p className="text-gray-700">{house.bathrooms}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Price</h2>
            <p className="text-gray-700">#{house.price}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Space</h2>
            <p className="text-gray-700">{house.space}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Location</h2>
            <p className="text-gray-700">{house.location}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Electricity</h2>
            <p className="text-gray-700">
              {house.electricity ? '24/7 Electricity' : 'No Electricity'}
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex justify-center space-x-4">
          <a 
            href={`https://wa.me/${house.whatsappNumber}`} 
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a 
            href={`mailto:${house.email}`} 
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a 
            href={`tel:${house.phone}`} 
            className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            <FaPhone size={24} />
          </a>
          <a 
            href={`sms:${house.phone}`} 
            className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
          >
            <FaCommentDots size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailPage;
