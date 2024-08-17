import React from 'react';
import HouseCard from '../HouseCard';

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
    // more houses 
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
    <div className="container mx-auto py-4 h-[350px] ">
      <div className="overflow-x-scroll flex flex-nowrap w-screen h-full scrollbar-hide">
        <div className="flex flex-nowrap h-full">
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
    </div>
  );
};

export default HouseCarousel;
