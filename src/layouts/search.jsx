import React, { useState } from 'react';
import Text from '../utils/TextInput';
import { NavLink } from 'react-router-dom';
import SearchModal from '../component/searchModal'; // Import the modal component
import './style.css';

const SearchBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bottom-nav w-screen z-40">
      <nav className='flex justify-center items-center bg-orange-500 mx-5 my-[62px] py-4 px-9 space-x-12 rounded-full'>
        <NavLink to="#" exact onClick={toggleModal}>
          <Text className='text-white'>Search</Text>
        </NavLink>
      </nav>

      <SearchModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default SearchBtn;
