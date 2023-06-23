import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PrivateMainRoute = ({ children }) => {
  // const { data } = useQuery({ querykey: ["auth"] });

  // console.log(data);

  // if (!data.token) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default PrivateMainRoute;
