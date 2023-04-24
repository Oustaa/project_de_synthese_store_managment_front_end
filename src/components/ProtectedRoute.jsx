import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../features/auth-slice";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ to }) => {
  const dispatch = useDispatch();
  let { token, name } = useSelector((state) => state.auth);
  if (!token && !name) {
    token = localStorage.getItem("token");
    name = localStorage.getItem("storename");
  }

  useEffect(() => {
    dispatch(login({ name, token }));
  }, [name, token, dispatch]);

  return token && name ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={to || "login"} />
  );
};

export default ProtectedRoute;
