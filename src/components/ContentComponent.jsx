// ContentComponent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function ContentComponent() {
  return (
    <div style={{ padding: '24px', margin: 0, minHeight: 280 }}>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}
