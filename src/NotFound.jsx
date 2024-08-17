import React from 'react';
import { Link } from 'react-router-dom';
import Image from './utils/Image';

const NotFoundPage = () => {
  return (
    <div className="w-screen h-[90%] text-center bg-gray-100 flex flex-col justify-center items-center">
      <Image
        src="/404.png"
        className="w-[100%] h-full  md:w-[80%] md:h-auto md:m-auto"
      />
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-orange-500 underline">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;

