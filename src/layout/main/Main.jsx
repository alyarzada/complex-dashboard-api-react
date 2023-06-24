import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import MobileNavigation from "../MobileNavigation";
import SideBar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modals from "../Modals";
import "../styles/styles.css";

const Main = () => {
  useScrollToUp();
  const matches = useMediaQuery("(min-width:768px)");
  const { openedSidebar } = useSelector((state) => state.themes);

  return (
    <Box className="bg-bgLight dark:bg-bgSecond">
      <Header />
      {matches ? <SideBar /> : null}

      <Box
        className={`px-3 pt-24 duration-500 ease-in-both flex flex-col justify-between min-h-screen overflow-x-hidden"
     ${
       openedSidebar
         ? "ml-0 md:ml-[266px] exl:ml-[300px]"
         : "ml-0 md:ml-[96px] exl:ml-[100px]"
     }`}
      >
        <Outlet />
        <MobileNavigation />
        <Footer />
      </Box>

      <Modals />
    </Box>
  );
};

export default Main;
