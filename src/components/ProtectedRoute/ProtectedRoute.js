import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, element }) => {
  if (localStorage.getItem('jwt')) {
    return element;
  }
  return loggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
