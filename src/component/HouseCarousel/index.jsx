import React from 'react';
import Text from '../../utils/TextInput';
import HouseCard from '../HouseCard';
import Search from '../../component/Search';

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
    <div className="container my-[100px] mx-auto py-4 h-[350px] ">
        <div className='flex justify-between items-center'>
        <Text className='m-5 text-xl'>Near You</Text>
        <Search />
        </div>
        
      <div className="overflow-x-scroll flex flex-nowrap w-screen h-[345px] scrollbar-hide">
        <div className="flex flex-nowrap h-full mt-0">
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
