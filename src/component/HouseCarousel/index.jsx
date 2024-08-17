import React from 'react';
import HouseCard from '../HouseCard';
import Text from '../../utils/TextInput';

const HouseCarousel = () => {
  const houses = [
    {
      imageSrc: '/housecard.jpg', 
      title: 'Cozy Cottage',
      features: ['Affordable'],
    },
    {
      imageSrc: '/housecard.jpg',
      title: 'Modern Villa',
      features: ['Affordable'],
    },
    {
      imageSrc: '/housecard.jpg',
      title: 'Family Home',
      features: ['Affordable'],
    },
    //  more houses 
    {
        imageSrc: '/housecard.jpg',
        title: 'Family Home',
        features: ['Affordable'],
      },
      {
        imageSrc: '/housecard.jpg',
        title: 'Family Home',
        features: ['Affordable'],
      },
      {
        imageSrc: '/housecard.jpg',
        title: 'Family Home',
        features: ['Affordable'],
      },
      {
        imageSrc: '/housecard.jpg',
        title: 'Family Home',
        features: ['Affordable'],
      },
  ];

  return (
    <div className="overflow-xscroll flex flex-nowrap py-4">
      <div className="flex flex-nowrap">
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

export default HouseCarousel;
