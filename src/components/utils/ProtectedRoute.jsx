import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/", canActivate }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
