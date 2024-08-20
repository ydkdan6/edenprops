import React from 'react';
import HouseCard from '../HouseCard';
import Text from '../../utils/TextInput';
import '../HouseCarousel/style.css';

const HouseList = () => {
  const houses = [
    {
      id:8,
      imageSrc: '/housecard1.jpg',
      title: 'Cozy Cottage',
      features: ['Affordable'],
      description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
      bedrooms: 2,
      bathrooms: 1,
      price: 2000,
      space: 'Medium',
      location: 'Suburbs',
      electricity: true,
      whatsappNumber: '+987654321',
      email: 'contact@realestate.com',
      phone: '+987654321',
    },
    {
      id:9,
      imageSrc: '/housecard.jpg',
      title: 'Modern Villa',
      features: ['Affordable'],
      description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
      bedrooms: 2,
      bathrooms: 1,
      price: 2000,
      space: 'Medium',
      location: 'Suburbs',
      electricity: true,
      whatsappNumber: '+987654321',
      email: 'contact@realestate.com',
      phone: '+987654321',
    },
    {
      id: 10,
      imageSrc: '/housecard2.jpg',
      title: 'Family Home',
      features: ['Affordable'],
      description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
      bedrooms: 2,
      bathrooms: 1,
      price: 2000,
      space: 'Medium',
      location: 'Suburbs',
      electricity: true,
      whatsappNumber: '+987654321',
      email: 'contact@realestate.com',
      phone: '+987654321',
    },
    // more houses
    {
      id: 11,
      imageSrc: '/housecard.jpg',
      title: 'Family Home',
      features: ['Affordable'],
      description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
      bedrooms: 2,
      bathrooms: 1,
      price: 2000,
      space: 'Medium',
      location: 'Suburbs',
      electricity: true,
      whatsappNumber: '+987654321',
      email: 'contact@realestate.com',
      phone: '+987654321',
    },
    {
      id:12, 
        imageSrc: '/housecard1.jpg',
        title: 'Cozy Cottage',
        features: ['Affordable'],
        description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
        bedrooms: 2,
        bathrooms: 1,
        price: 2000,
        space: 'Medium',
        location: 'Suburbs',
        electricity: true,
        whatsappNumber: '+987654321',
        email: 'contact@realestate.com',
        phone: '+987654321',
      },
      {
        id: 13,
        imageSrc: '/housecard2.jpg',
        title: 'Modern Villa',
        features: ['Affordable'],
        description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
        bedrooms: 2,
        bathrooms: 1,
        price: 2000,
        space: 'Medium',
        location: 'Suburbs',
        electricity: true,
        whatsappNumber: '+987654321',
        email: 'contact@realestate.com',
        phone: '+987654321',
      },
      {
        id: 14,
        imageSrc: '/housecard.jpg',
        title: 'Family Home',
        features: ['Affordable'],
        description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
        bedrooms: 2,
        bathrooms: 1,
        price: 2000,
        space: 'Medium',
        location: 'Suburbs',
        electricity: true,
        whatsappNumber: '+987654321',
        email: 'contact@realestate.com',
        phone: '+987654321',
      },
      // more houses
      {
        id: 15,
        imageSrc: '/housecard1.jpg',
        title: 'Family Home',
        features: ['Affordable'],
        description: 'A cozy cottage perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
        bedrooms: 2,
        bathrooms: 1,
        price: 2000,
        space: 'Medium',
        location: 'Suburbs',
        electricity: true,
        whatsappNumber: '+987654321',
        email: 'contact@realestate.com',
        phone: '+987654321',
      },
  ];

  return (
    <div className="container mx-2 py-4 px-7 ">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {houses.map((house, index) => (
          <HouseCard
            key={index}
            imageSrc={house.imageSrc}
            title={house.title}
            description={house.description}
            features={house.features}
            electricity={house.electricity}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            space={house.space}
            price={house.price}
            phone={house.phone}
            email={house.email}
            location={house.location}
          />
        ))}
      </div>
    </div>
    
  );
};

export default HouseList;
