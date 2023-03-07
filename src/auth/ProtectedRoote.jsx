import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const LoginProtectedRoote = ({ children }) => {
  useEffect(() => {
    console.log = console.warn = console.error = () => {};
  });

  if (Cookies.get("token")) {
    return <Navigate to="/" />;
  }

  return children;
};

export default LoginProtectedRoote;
