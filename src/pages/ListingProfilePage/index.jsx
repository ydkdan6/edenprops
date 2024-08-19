import React, { useState } from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Slider from "react-slick"; // For image slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ListingProfilePage = () => {
  const [filters, setFilters] = useState({
    bedrooms: '',
    electricity: false,
    space: '',
    priceMin: '',
    priceMax: '',
  });

  const houses = [
    { id: 1, title: 'Cozy Cottage', bedrooms: 2, electricity: true, space: 'Small', price: 1000, image: '/housecard1.jpg' },
    { id: 2, title: 'Modern Villa', bedrooms: 3, electricity: true, space: 'Large', price: 3000, image: '/housecard2.jpg' },
    { id: 3, title: 'Family Home', bedrooms: 4, electricity: false, space: 'Medium', price: 2500, image: '/housecard.jpg' },
    { id: 4, title: 'Compact Apartment', bedrooms: 1, electricity: true, space: 'Small', price: 800, image: '/housecard1.jpg' },
    // Add more house listings here...
  ];

  const filteredHouses = houses.filter(house => {
    return (
      (filters.bedrooms ? house.bedrooms === parseInt(filters.bedrooms) : true) &&
      (filters.electricity ? house.electricity === filters.electricity : true) &&
      (filters.space ? house.space === filters.space : true) &&
      (filters.priceMin ? house.price >= parseInt(filters.priceMin) : true) &&
      (filters.priceMax ? house.price <= parseInt(filters.priceMax) : true)
    );
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 mt-[70px] lg:mt-0">
        {/* Filter Section */}
        <div className="lg:w-1/4 bg-white p-6 lg:fixed lg:right-0 lg:top-0 lg:h-[410px] shadow-lg z-10 md:mt-[70px]">
          <h2 className="text-xl font-bold mb-4">Filter Houses</h2>
          <div className="space-y-4">
            {/* Bedrooms Filter */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Bedrooms</label>
              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Any</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
              </select>
            </div>

            {/* Electricity Filter */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Electricity</label>
              <input
                type="checkbox"
                name="electricity"
                checked={filters.electricity}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-gray-700">24/7 Electricity</span>
            </div>

            {/* Space Filter */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Space</label>
              <select
                name="space"
                value={filters.space}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Any</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price Range</label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="priceMin"
                  value={filters.priceMin}
                  onChange={handleInputChange}
                  placeholder="Min"
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="number"
                  name="priceMax"
                  value={filters.priceMax}
                  onChange={handleInputChange}
                  placeholder="Max"
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* House Listings Section */}
        <div className="lg:w-3/4 w-full lg:overflow-y-auto lg:p-6 mt-4 lg:mt-0 lg:ml-[0.2%]">
          <h2 className="text-2xl font-bold mb-4">House Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredHouses.map(house => (
              <div key={house.id} className="bg-white rounded-lg shadow-lg p-4">
                <Slider {...settings}>
                  <img src={house.image} alt={house.title} className="w-full h-48 object-cover rounded-lg" />
                  <img src={house.image} alt={house.title} className="w-full h-48 object-cover rounded-lg" />
                  {/* Add more images if available */}
                </Slider>
                <h3 className="text-xl font-bold mt-4">{house.title}</h3>
                <p className="mt-2 text-gray-600">Bedrooms: {house.bedrooms}</p>
                <p className="mt-2 text-gray-600">Space: {house.space}</p>
                <p className="mt-2 text-gray-600">Price: #{house.price}</p>
                <p className="mt-2 text-gray-600">{house.electricity ? '24/7 Electricity' : 'No Electricity'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListingProfilePage;
