import React from 'react';
import HouseCard from '../HouseCard';
import Text from '../../utils/TextInput';
import '../HouseCarousel/style.css';

const HouseList = () => {
  const houses = [
    {
      imageSrc: '/housecard1.jpg',
      title: 'Cozy Cottage',
      features: ['Affordable'],
    },
    {
      imageSrc: '/housecard.jpg',
      title: 'Modern Villa',
      features: ['Affordable'],
    },
    {
      imageSrc: '/housecard2.jpg',
      title: 'Family Home',
      features: ['Affordable'],
    },
    // more houses
    {
      imageSrc: '/housecard.jpg',
      title: 'Family Home',
      features: ['Affordable'],
    },
    {
        imageSrc: '/housecard1.jpg',
        title: 'Cozy Cottage',
        features: ['Affordable'],
      },
      {
        imageSrc: '/housecard2.jpg',
        title: 'Modern Villa',
        features: ['Affordable'],
      },
      {
        imageSrc: '/housecard.jpg',
        title: 'Family Home',
        features: ['Affordable'],
      },
      // more houses
      {
        imageSrc: '/housecard1.jpg',
        title: 'Family Home',
        features: ['Affordable'],
      },
  ];

  return (
    <div className="container mx-auto py-4 px-7 ">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {houses.map((house, index) => (
          <HouseCard
            key={index}
            imageSrc={house.imageSrc}
            title={house.title}
            features={house.features}
          />
        ))}
      </div>
    </div>
    
  );
};

export default HouseList;
