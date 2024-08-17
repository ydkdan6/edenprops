import React, { useState } from 'react';
import Text from '../../utils/TextInput';
import './style.css'; // Import the CSS file for styling

const SearchModal = ({ isOpen, onClose }) => {
  const [type, setType] = useState('big');
  const [bedrooms, setBedrooms] = useState(1);
  const [minPrice, setMinPrice] = useState(500000);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search details:', { type, bedrooms, minPrice, maxPrice });
    onClose(); // Close the modal after searching
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content text-center" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Search Filters</h2>
        <label>
          <Text className='text-black'>Type of House:</Text>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="big">Big</option>
            <option value="flat">Flat</option>
          </select>
        </label>
        <label>
        <Text className='text-black'>No. of Bedrooms</Text>
          <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <label>
        <Text className='text-black'>Min.Price</Text>
          <input
            type="tel"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
        <Text className='text-black'>Max.Price:</Text>
          <input
            type="tel"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <button className='text-center w-full rounded-full h-[60px] font-bold bg-orange-500' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchModal;
