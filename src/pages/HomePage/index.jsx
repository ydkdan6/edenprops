import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../layouts/header';
import BottomNav from '../../layouts/bottomNavigation';

function HomePage() {
  return (
    <div className='w-full'>
      <Header />
      {/* Other components for routes go here */}
      <BottomNav />
      </div>
    
  );
}

export default HomePage;
