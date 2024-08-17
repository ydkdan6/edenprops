import React, { useState } from 'react';
import Button from '../utils/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          Logo
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600">House Listing</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600">About Us</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600">Services</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600">Contact Us</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button className="text-black border bg-white border-orange-500 px-4 py-2 rounded-[26px] hover:bg-orange hover:text-white transition">
            Login
          </Button>
          <Button className="bg-orange-500 text-white px-4 py-2 rounded-[26px] hover:bg-orange transition">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            className="bg-white hover:bg-white hover:border-orange-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white shadow-lg">
            <a href="#" className="block text-gray-800 px-4 py-2 hover:bg-orange-300 hover:text-black">Home</a>
            <a href="#" className="block text-gray-800 px-4 py-2 hover:bg-orange-300 hover:text-black">House Listing</a>
            <a href="#" className="block text-gray-800 px-4 py-2 hover:bg-orange-300 hover:text-black">About Us</a>
            <a href="#" className="block text-gray-800 px-4 py-2 hover:bg-orange-300 hover:text-black">Services</a>
            <a href="#" className="block text-gray-800 px-4 py-2 hover:bg-orange-300 hover:text-black">Contact Us</a>
            <div className="flex justify-around py-4">
              <Button className="text-black border bg-white border-orange-600 px-4 py-2 rounded hover:bg-orange hover:text-white transition">
                Login
              </Button>
              <Button className="text-white px-4 py-2 rounded hover:bg-orange transition">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
