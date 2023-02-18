import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { getUserDataHandler } from "../app/Slicers/auth";
import { Navigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import Cookies from "js-cookie";
import NotFound404 from "../pages/NotFound404";

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
    return (
      <Box className="w-full h-screen bg-bgMain flex items-center justify-center">
        <SyncLoader color="#C9B26D" />
      </Box>
    );
  }

  if (getDataStatus === "rejected") <NotFound404 />;

  return children;
};

export default PrivateRoute;
