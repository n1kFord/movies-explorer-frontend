import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, element }) => {
  return loggedIn ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
