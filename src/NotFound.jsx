import React from 'react';
import { Link } from 'react-router-dom';
import Image from './utils/Image';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <Image
        src="/path/to/404-image.png" // Replace with the path to your 404 image
        alt="404 Not Found"
        className="w-1/2 max-w-md"
      />
      <h1 className="text-4xl font-bold mt-6">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-blue-500 underline">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
