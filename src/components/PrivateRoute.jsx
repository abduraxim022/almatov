import React from 'react';
import { Navigate } from 'react-router-dom';

// This component will redirect the user to login if there's no token in localStorage
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    // Redirect to login page if there's no token
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
