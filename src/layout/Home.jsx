// Tunar
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./styles/styles.css";
import { useScrollToUp } from "../hooks/useScrollToUp";
import { getDashboardPanels, getSidebarData } from "../app/Slicers/data";
import { sidebarMenu } from "../data/apartment-owner/sidebar-menu";
import { dashboardPanels } from "../data/apartment-owner/dashboard-menu";
import { adminSidebarMenu } from "../data/admin/sidebar-menu";
import { adminDashboardPanels } from "../data/admin/dashboard-menu";
import { setLight } from "../app/Slicers/themes";
import Modals from "./Modals";

const Home = () => {
  useScrollToUp();
  const { openedSidebar } = useSelector((state) => state.themes);
  const {
    user: {
      has_role: { role_id },
      user_layout_settings,
    },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (role_id === 8) {
      dispatch(getDashboardPanels(dashboardPanels));
      dispatch(getSidebarData(sidebarMenu));
    } else if (role_id === 4) {
      dispatch(getDashboardPanels(adminDashboardPanels));
      dispatch(getSidebarData(adminSidebarMenu));
    } else if (role_id === 9) {
      dispatch(getDashboardPanels(adminDashboardPanels));
      dispatch(getSidebarData(adminSidebarMenu));
    } else if (role_id === 9) {
      dispatch(getDashboardPanels(adminDashboardPanels));
      dispatch(getSidebarData(adminSidebarMenu));
    }

    if (user_layout_settings.darkMode) {
      dispatch(setLight(false));
    } else {
      dispatch(setLight(true));
    }
  }, []);

  return (
    <Box>
      <Header />
      <SideBar />
      <Box
        className={`px-4 lg:px-8 pt-24 transition-all flex flex-col justify-between min-h-screen overflow-x-hidden ease-in-out dark:bg-bgMain bg-[#FAFBFE] "
     ${
       openedSidebar
         ? "content-wrapper-width-open ml-0 md:ml-[250px]"
         : "content-wrapper-width-close ml-0 md:ml-[80px]"
     }`}
      >
        <Outlet />
        <Footer />
      </Box>
      <Modals />
    </Box>
  );
};

export default Home;
