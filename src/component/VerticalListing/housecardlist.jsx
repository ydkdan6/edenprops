import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBath, FaBed } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    imageSrcs: ['/housecard.jpg', 'housecard.jpg', 'housecard.jpg'], // changed from image to imageSrcs
    title: 'Four bedroom duplex',
    description: 'Four bedroom duplex with 2 room boys quarters, gym and...',
    features: ['24/7 Security'],
    bedrooms: 4,
    bathrooms: 4,
    price: 'N360,000,000',
    space: 'Large',
    location: 'Downtown, City Center',
    electricity: true,
    whatsappNumber: '+123456789',
    email: 'info@realestate.com',
    phone: '+123456789',
  },
  {
    id: 2,
    imageSrcs: ['/housecard1.jpg'], // changed from image to imageSrcs
    title: 'The Shore',
    description: 'One Bedroom Apartments: Our one-bedroom apartments are designed for modern...',
    brief: "This is a stunning 3-bedroom apartment located in the heart of the city, offering breathtaking views and modern amenities.",
    bedrooms: 1,
    bathrooms: 1,
    price: 'N120,000,000',
    space: 'Medium',
    location: 'Suburbs',
    electricity: true,
    whatsappNumber: '+987654321',
    email: 'contact@realestate.com',
    phone: '+987654321',
  },
  {
    id: 3,
    imageSrcs: ['/housecard2.jpg'], // changed from image to imageSrcs
    title: "Governor's consent",
    description: 'Newly built 4 Bedroom Fully Detached Duplex With Bq...',
    features: ['good electricity'],
    bedrooms: 4,
    bathrooms: 3,
    price: 'N85,000,000',
    space: 'Medium',
    location: 'City Outskirts',
    electricity: false,
    whatsappNumber: '+1122334455',
    email: 'sales@realestate.com',
    phone: '+1122334455',
  },
];

const PropertyCard = ({
  id,
  imageSrcs, // changed from image to imageSrcs
  title,
  description,
  brief,
  bedrooms,
  bathrooms,
  price,
  space,
  location,
  electricity,
  whatsappNumber,
  email,
  phone,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/houses/${id}`, {
      state: {
        id,
        imageSrcs, // updated this as well
        title,
        description,
        brief,
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img src={imageSrcs[0]} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between text-gray-800 mb-4">
          <div className="flex items-center">
            <FaBed className="mr-2" />
            <span>{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-2" />
            <span>{bathrooms} Bathrooms</span>
          </div>
        </div>
        <p className="text-green-600 font-bold text-lg">For Sale</p>
        <p className="text-xl font-semibold text-green-600">{price}</p>
      </div>
      <button
        onClick={handleViewDetails}
        className="h-[30px] w-[90px] bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded absolute right-2 bottom-2"
      >
        View
      </button>
    </div>
  );
};

const PropertyGrid = () => (
  <div className="container mx-auto p-6">
    <div className="grid gap-6 md:grid-cols-2">
      {properties.map(property => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  </div>
);

export default PropertyGrid;
