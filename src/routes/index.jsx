import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import ForgetPassword from '../pages/forgotPassword';
import RegisterPage from '../pages/signUpPage';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import HouseDetailsPage from '../pages/HouseDetailPage';
import MapPage from '../pages/MapPage';
import ContactUs from '../pages/ContactUs';
import NotFoundPage from '../NotFound';
import ListingProfilePage from '../pages/ListingProfilePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/forgetpassword' element={<ForgetPassword/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path='/listing' element={<ListingProfilePage />} />
        <Route path="/houses/:id" element={<HouseDetailsPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/map" element={<MapPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
