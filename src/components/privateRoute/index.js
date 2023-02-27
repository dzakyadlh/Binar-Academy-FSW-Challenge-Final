import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../../utils";

const PrivateRoute = ({ children }) => {
  return isLogin(true) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
