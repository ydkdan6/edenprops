import React, { useState } from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const ListingProfilePage = () => {

    const [filters, setFilters] = useState({
        bedrooms: '',
        electricity: false,
        space: '',
        priceMin: '',
        priceMax: '',
      });
    
      const houses = [
        { id: 1, title: 'Cozy Cottage', bedrooms: 2, electricity: true, space: 'Small', price: 1000, image: '/house1.jpg' },
        { id: 2, title: 'Modern Villa', bedrooms: 3, electricity: true, space: 'Large', price: 3000, image: '/house2.jpg' },
        { id: 3, title: 'Family Home', bedrooms: 4, electricity: false, space: 'Medium', price: 2500, image: '/house3.jpg' },
        { id: 4, title: 'Compact Apartment', bedrooms: 1, electricity: true, space: 'Small', price: 800, image: '/house4.jpg' },
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

    return (
        <div>
            <Header />
            <div className="flex min-h-screen bg-gray-100">
      {/* House Listings Section */}
      <div className="w-3/4 overflow-y-auto p-6">
        <h2 className="text-2xl font-bold mb-4">House Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredHouses.map(house => (
            <div key={house.id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={house.image} alt={house.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-bold mt-4">{house.title}</h3>
              <p className="mt-2 text-gray-600">Bedrooms: {house.bedrooms}</p>
              <p className="mt-2 text-gray-600">Space: {house.space}</p>
              <p className="mt-2 text-gray-600">Price: ${house.price}</p>
              <p className="mt-2 text-gray-600">{house.electricity ? '24/7 Electricity' : 'No Electricity'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-1/4 bg-white p-6 fixed right-0 top-0 h-full shadow-lg">
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
    </div>
            <Footer />
        </div>
    );
}

export default ListingProfilePage;