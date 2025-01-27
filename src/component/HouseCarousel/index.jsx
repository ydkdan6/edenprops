import React from 'react';
import Text from '../../utils/TextInput';
import HouseCard from '../HouseCard';
import Search from '../../component/Search';

const HouseCarousel = () => {
  const houses = [
    {
      id: 1,
      imageSrc: '/housecard.jpg', 
      title: 'Central Area, Kaduna',
      features: ['Affordable'],
      description: 'A beautiful luxury villa located in the heart of the city. Comes with all modern amenities and a stunning view.',
    bedrooms: 4,
    bathrooms: 3,
    price: 5000,
    space: 'Large',
    location: 'Downtown, City Center',
    electricity: true,
    whatsappNumber: '+123456789',
    email: 'info@realestate.com',
    phone: '+123456789',
    },
    {
      id:2,
      imageSrc: '/housecard2.jpg',
      title: 'Modern Villa, Sabo.',
      features: ['Affordable'],
      description: 'A Central Area, Kaduna perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
      bedrooms: 2,
      bathrooms: 1,
      price: 2000,
      space: 'Medium',
      location: 'Suburbs',
      electricity: true,
      whatsappNumber: '+2349110116348',
      email: 'edenprops@gmail.com',
      phone: '+2349110116348',
    },
    {
      id:3,
      imageSrc: '/housecard1.jpg',
      title: 'Abakpa Total, Kaduna',
      features: ['Affordable'],
      description: 'A Central Area, Kaduna perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
    bedrooms: 2,
    bathrooms: 1,
    price: 2000,
    space: 'Medium',
    location: 'Suburbs',
    electricity: true,
    whatsappNumber: '+2349110116348',
    email: 'edenprops@gmail.com',
    phone: '+2349110116348',

    },
    // more houses 
    {
      id:4,
      imageSrc: '/housecard.jpg',
      title: 'Abakpa Total, Kaduna',
      features: ['Affordable'],
      description: 'A Central Area, Kaduna perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
    bedrooms: 2,
    bathrooms: 1,
    price: 2000,
    space: 'Medium',
    location: 'Suburbs',
    electricity: true,
    whatsappNumber: '+2349110116348',
    email: 'edenprops@gmail.com',
    phone: '+2349110116348',
    },
    {
      id:5,
      imageSrc: '/housecard2.jpg',
      title: 'Abakpa Total, Kaduna',
      features: ['Affordable'],
      description: 'A Central Area, Kaduna perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
    bedrooms: 2,
    bathrooms: 1,
    price: 2000,
    space: 'Medium',
    location: 'Suburbs',
    electricity: true,
    whatsappNumber: '+2349110116348',
    email: 'edenprops@gmail.com',
    phone: '+2349110116348',
    },
    {
      id:6,
      imageSrc: '/housecard.jpg',
      title: 'Abakpa Total, Kaduna',
      features: ['Affordable'],
      description: 'A Central Area, Kaduna perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
    bedrooms: 2,
    bathrooms: 1,
    price: 2000,
    space: 'Medium',
    location: 'Suburbs',
    electricity: true,
    whatsappNumber: '+2349110116348',
    email: 'edenprops@gmail.com',
    phone: '+2349110116348',
    },
    {
      id:7,
      imageSrc: '/housecard1.jpg',
      title: 'Abakpa Total, Kaduna',
      features: ['Affordable'],
      description: 'A Central Area, Kaduna perfect for a small family. Located in a quiet neighborhood with easy access to local amenities.',
    bedrooms: 2,
    bathrooms: 1,
    price: 2000,
    space: 'Medium',
    location: 'Suburbs',
    electricity: true,
    whatsappNumber: '+2349110116348',
    email: 'edenprops@gmail.com',
    phone: '+2349110116348',
    },
  ];

  return (
    <div className="container my-[100px] mx-auto py-4 h-[350px] ">
        <div className='flex justify-between items-center'>
        <Text className='m-9 text-xl'>Near You</Text>
        <Search />
        </div>
        

      <div className="relative">
      <button
    className="absolute left-2 top-28 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
    onClick={() => {
      const container = document.querySelector('.overflow-x-scroll');
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }}
  >
    &#8592;
  </button>
  <button
    className="absolute right-0 top-28 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
    onClick={() => {
      const container = document.querySelector('.overflow-x-scroll');
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }}
  >
    &#8594;
  </button>
  <div className="overflow-x-scroll flex flex-nowrap w-screen h-[320px] scrollbar-hide">
        <div className="flex flex-nowrap h-full mt-0">
          {houses.map((house) => (
            <HouseCard
            key={house.id}
            id={house.id}
            imageSrc={house.imageSrc}
            title={house.title}
            description={house.description}
            features={house.features}
            electricity={house.electricity}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            price={house.price}
            phone={house.phone}
            email={house.email}
            location={house.location}
            space={house.space}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HouseCarousel;
