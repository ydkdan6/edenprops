import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import './style.css';
import LocationNotification from '../component/getDistanceFromLocation';
import Image from '../utils/Image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-40">
            <LocationNotification  />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black w-[140px]">
          <Image src='/logo.png' alt='logo-image' />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:scale-[1.2] hover:text-orange-500">Home</Link>
          <Link to="/listing" className="text-gray-800 hover:scale-[1.2] hover:text-orange-500">House Listing</Link>
          <Link to="/about" className="text-gray-800 hover:scale-[1.2]  hover:text-orange-500">About Us</Link>
          <Link to="/services" className="text-gray-800 hover:scale-[1.2] hover:text-orange-500">Services</Link>
          <Link to="/contact" className="text-gray-800 hover:scale-[1.2] hover:text-orange-500">Contact Us</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button className="text-black border bg-white border-orange-500 px-4 py-2 rounded-[26px] hover:bg-orange hover:text-white transition">
            <Link to='/login' className='text-black hover:text-black'>Login </Link>
          </Button>
          <Button className="bg-orange-500 text-white px-4 py-2 rounded-[26px] hover:bg-orange transition">
            <Link to='/register' className='text-white hover:text-white'>Sign Up </Link>
          </Button>
        </div>


{/* Mobile Menu Button */}
<div className="md:hidden flex items-center">
          <button
            className="text-gray-800 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>



      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white shadow-lg">
            <Link to="/" className="a block text-gray-800 px-4 py-2 hover:bg-orange-300">Home</Link>
            <Link to="/listing" className="a block text-gray-800 px-4 py-2 hover:bg-orange-300">House Listing</Link>
            <Link to="/about" className="a block text-gray-800 px-4 py-2 hover:bg-orange-300">About Us</Link>
            <Link to="/services" className="a block text-gray-800 px-4 py-2 hover:bg-orange-300">Services</Link>
            <Link to="/contact" className="a block text-gray-800 px-4 py-2 hover:bg-orange-300">Contact Us</Link>
            <div className="flex justify-around py-4">
              <Button className="text-black border bg-white border-orange-600 px-4 py-2 rounded hover:bg-orange hover:text-white transition">
                <Link to='/login' className='text-black hover:text-black'>Login </Link>
              </Button>
              <Button className="text-white px-4 py-2 rounded hover:bg-orange transition">
              <Link to='/register' className='text-white hover:text-white'>Sign Up </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
    
  );
};

export default Header;
