import React from 'react';
import Text from '../utils/TextInput';
import { NavLink } from 'react-router-dom';
import './style.css'; 

const SearchBtn = () => {

    const msFilter = 'rotate(-0.9deg)';

  return (
    <div className="bottom-nav w-screen z-40 ">
     <nav className='flex justify-center items-center bg-orange-500 mx-5 my-[62px] py-4 px-9 space-x-12 rounded-full'>
     <NavLink to="/" exact activeClassName="active">
     <Text className='text-white'>Search</Text>
      </NavLink>
     </nav>
    </div>
  );
};

export default SearchBtn;
