import React from 'react';
import { Navigate } from 'react-router-dom';

const PreLoggedRoute = ({ loggedIn, element }) => {
  return !loggedIn ? element : <Navigate to="/movies" />;
};

export default PreLoggedRoute;
