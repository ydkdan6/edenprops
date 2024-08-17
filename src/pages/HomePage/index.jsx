import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../layouts/header';
import BottomNav from '../../layouts/bottomNavigation';
import HouseCarousel from '../../component/HouseCarousel';
import Text from '../../utils/TextInput';

function HomePage() {
  return (
    <div className='w-full'>
      <Header />
      
      {/* Other components for routes go here */}
      <Text className='m-4 text-xl'>Near You</Text>
      {/* <HouseCarousel  /> */}
      <BottomNav />
      </div>
    
  );
}

export default HomePage;
