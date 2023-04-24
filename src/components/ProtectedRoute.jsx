import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ to }) => {
  const { token, name } = useSelector((state) => state.auth);
  return token && name ? <Outlet /> : <Navigate to={to || "login"} />;
};

export default ProtectedRoute;
