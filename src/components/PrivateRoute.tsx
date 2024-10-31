import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useReduxSelector } from '../hooks/reduxHooks';

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useReduxSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
