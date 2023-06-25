import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";
import { getSidebarData } from "../../app/Slicers/localStates/data";
import { adminSidebarMenu } from "../../data/admin/sidebar-menu";
import { sidebarMenu } from "../../data/apartment-owner/sidebar-menu";
import { restaurantsidebarMenu } from "../../data/restaurant-admin/sidebar-menu";

import SidebarItem from "./SidebarItem";
import logo from "../../assets/logo/logo_sm.png";
import logoDark from "../../assets/logo/logo.png";
import ios from "../../assets/logo/ios.png";
import android from "../../assets/logo/android.png";
import qrcode from "../../assets/logo/qrcode.png";

const SideBar = () => {
  const { openedSidebar } = useSelector((state) => state.themes);
  const { sidebar } = useSelector((state) => state.data);
  const { role_id } = useSelector((state) => state.user);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const months = [
    t(["January"]),
    t(["February"]),
    t(["March"]),
    t(["April"]),
    t(["May"]),
    t(["June"]),
    t(["July"]),
    t(["August"]),
    t(["September"]),
    t(["October"]),
    t(["November"]),
    t(["December"]),
  ];

  useEffect(() => {
    if (role_id === 8) {
      dispatch(getSidebarData(sidebarMenu));
    } else if (role_id === 4) {
      dispatch(getSidebarData(adminSidebarMenu));
    } else if (role_id === 2) {
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
      dispatch(getSidebarData(restaurantsidebarMenu));
    }

    // if (user_layout_settings.darkMode) {
    //   dispatch(setLight(false));
    // } else {
    //   dispatch(setLight(true));
    // }
  });

  // open olanda: 16px + 250px = 266px
  // close olanda: 16px + 80px = 96px
  // open olanda: exl: 16px + 300px = 316px
  // close olanda: exl: 16px + 100px = 116px

  return (
    <Box
      className={`bg-bgLight dark:bg-bgMain h-[94vh] top-4 left-4 overflow-auto print:hidden duration-500 ease-in-both text-sm scroll-design z-[500] select-none rounded-xl fixed ${
        openedSidebar ? "w-[250px] exl:w-[300px]" : "w-[80px] exl:w-[100px]"
      }`}
    >
      <Box
        className="mb-6 mt-3 h-28"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        <img
          className={`mx-auto block mb-6 h-16 whitespace-nowrap overflow-hidden object-cover ${
            openedSidebar ? "w-22" : "w-12"
          }`}
          alt="logo"
          src={openedSidebar ? logoDark : logo}
        />

        {/* today date */}
        {openedSidebar && (
          <Typography className="mx-auto mb-6 text-sm text-center text-text1 whitespace-nowrap overflow-hidden">
            {t(["Today"])}, {new Date().getDate()}{" "}
            {months[new Date().getMonth()]} {new Date().getFullYear()}
          </Typography>
        )}
      </Box>

      {/* sidebar navigation list */}
      <nav className="sidebar-nav">
        {sidebar.map((sidebarItem, index) => {
          const Icon = sidebarItem.icon;
          return (
            <SidebarItem
              key={sidebarItem.id}
              sidebarItem={sidebarItem}
              Icon={Icon}
            />
          );
        })}
      </nav>

      {/* navigations images */}
      <Box className="px-3 mt-8 mb-4">
        <Stack
          direction={openedSidebar ? "row" : "column"}
          justifyContent="space-between"
          alignItems="center"
          className="mb-6"
          spacing={1}
        >
          <img
            className={openedSidebar ? "w-24" : "w-14"}
            src={ios}
            alt="ios"
          />
          <img
            className={openedSidebar ? "w-24" : "w-14"}
            src={android}
            alt="android"
          />
        </Stack>
        <Box>
          <img
            className={openedSidebar ? "w-24 m-auto" : "w-10 m-auto"}
            src={qrcode}
            alt="qrcode"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
