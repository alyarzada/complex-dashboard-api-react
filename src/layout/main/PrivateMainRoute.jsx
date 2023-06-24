import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../services/getRequests";
import LinearProgress from "@mui/material/LinearProgress";
import Cookies from "js-cookie";

const PrivateMainRoute = ({ children }) => {
  const {
    refetch,
    isLoading,
    isError,
    isSuccess,
    data: user,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: getUserInfo,
    enabled: false,
  });

  // if there is no token
  if (!Cookies.get("token")) return <Navigate to="/login" replace />;

  // if there is token
  if (Cookies.get("token")) refetch();

  // Loading...
  if (isLoading) return <LinearProgress color="logocolor" />;

  // if token is invalid
  if (isError) {
    Cookies.remove("token");
    return <Navigate to="/login" replace />;
  }

  // if token is valid
  if (isSuccess && user.id) return children;
};

export default PrivateMainRoute;
