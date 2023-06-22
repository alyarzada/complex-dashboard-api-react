import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataHandler } from "../app/Slicers/dataFetching/auth";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import NotFound404 from "../pages/NotFound404";
import LinearProgress from "@mui/material/LinearProgress";

const PrivateRoute = ({ children }) => {
  const { getDataStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get("token")) {
      dispatch(getUserDataHandler(Cookies.get("token")));
    }
  }, []);

  if (!Cookies.get("token")) return <Navigate to="/login" replace />;

  if (getDataStatus === "loading") {
    return <LinearProgress color="logocolor" />;
  }

  if (getDataStatus === "rejected") <NotFound404 />;

  return children;
};

export default PrivateRoute;
