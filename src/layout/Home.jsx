import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SideBar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MobileNavigation from "./MobileNavigation";
import "./styles/styles.css";
import { useScrollToUp } from "../hooks/useScrollToUp";
import { getDashboardPanels, getSidebarData } from "../app/Slicers/data";
import { sidebarMenu } from "../data/apartment-owner/sidebar-menu";
import { dashboardPanels } from "../data/apartment-owner/dashboard-menu";
import { adminSidebarMenu } from "../data/admin/sidebar-menu";
import { adminDashboardPanels } from "../data/admin/dashboard-menu";
import { restaurantsidebarMenu } from "../data/restaurant-admin/sidebar-menu";
import { restaurantDashboard } from "../data/restaurant-admin/restaurant-dashboard";
import { setLight } from "../app/Slicers/themes";
import Modals from "./Modals";

const Home = () => {
  useScrollToUp();
  const matches = useMediaQuery("(min-width:768px)");
  const { openedSidebar } = useSelector((state) => state.themes);
  const {
    user: {
      has_role: { role_id },
      user_layout_settings,
    },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const index = 0;

  useEffect(() => {
    console.warn = console.error = () => {};
  });

  useEffect(() => {
    if (role_id === 8) {
      dispatch(getDashboardPanels(dashboardPanels));
      dispatch(getSidebarData(sidebarMenu));
    } else if (role_id === 4) {
      dispatch(getDashboardPanels(adminDashboardPanels));
      dispatch(getSidebarData(adminSidebarMenu));
    } else if (role_id === 2) {
      dispatch(getDashboardPanels(restaurantDashboard));
      dispatch(
        getSidebarData(
          adminSidebarMenu.map((item) => {
            if (item.title === "Complex Wall") {
              return {
                ...item,
                path: "/complex-select",
              };
            }

            return item;
          })
        )
      );
    } else if (role_id === 9) {
      dispatch(getDashboardPanels(restaurantDashboard));
      dispatch(getSidebarData(restaurantsidebarMenu));
    }

    if (user_layout_settings.darkMode) {
      dispatch(setLight(false));
    } else {
      dispatch(setLight(true));
    }
  }, []);

  return (
    <Box className="bg-bgLight dark:bg-bgSecond">
      <Header />
      {matches ? <SideBar /> : null}
      <Box
        className={` px-3 pt-24 duration-500 ease-in-both flex flex-col justify-between min-h-screen overflow-x-hidden"
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

export default Home;
