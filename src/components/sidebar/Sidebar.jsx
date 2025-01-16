import React from 'react';
import { Layout } from 'antd';
import {  Route, Routes } from 'react-router-dom';
import LayoutComponent from '../layout/LayoutComponent';  
import Product from '../product/Product'; 
import User from '../User';       

export default function Sidebar() {
  return (
  
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    
  );
}
