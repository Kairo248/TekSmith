import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products';
import ProtectedRoute from './ProtectedRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />

      <Route
       path="/products" 
        element={
        <ProtectedRoute>
         <Products />
        </ProtectedRoute>
       } 
       />
      <Route
       path="/cart" 
       element={
        <ProtectedRoute>
         <Cart />
        </ProtectedRoute>
       } 
       />
      <Route
       path="/checkout" 
       element={
        <ProtectedRoute>
         <Checkout />
        </ProtectedRoute>
       } />
      
    </Routes>
  );
};

export default AppRoutes;
