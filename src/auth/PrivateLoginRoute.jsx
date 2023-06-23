import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateLoginRoute = ({ children }) => {
  if (Cookies.get("token")) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateLoginRoute;
