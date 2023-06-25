import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../services/getRequests";
import { useDispatch } from "react-redux";
import { getUserData } from "../app/Slicers/localStates/user";

import LinearProgress from "@mui/material/LinearProgress";
import Cookies from "js-cookie";

const PrivateMainRoute = ({ children }) => {
  const [isFethced, setIsFetched] = useState(false);
  const dispatch = useDispatch();

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
  if (Cookies.get("token") && !isFethced) {
    refetch();
    setIsFetched(true);
  }

  // Loading...
  if (isLoading) return <LinearProgress color="logocolor" />;

  // if token is invalid
  if (isError) {
    Cookies.remove("token");
    return <Navigate to="/login" replace />;
  }

  // if token is valid
  if (isSuccess && user.id) {
    dispatch(getUserData(user));
    return children;
  }
};

export default PrivateMainRoute;
