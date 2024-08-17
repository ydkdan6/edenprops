import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../layouts/header';
import BottomNav from '../../layouts/bottomNavigation';
import HouseCarousel from '../../component/HouseCarousel';
import Text from '../../utils/TextInput';
import HouseList from '../../component/VerticalListing';
import SearchBtn from '../../layouts/search';
import Footer from '../../layouts/footer';

function HomePage() {
  return (
    <div className='w-full'>
      <Header />
      
      {/* Other components for routes go here */}
      <HouseCarousel  />
      <Text className='m-1 text-4xl text-center underline'>More listing for you</Text>
      <HouseList />
      <SearchBtn />
      <Footer />
      <BottomNav />
      </div>
    
  );
}

export default HomePage;
