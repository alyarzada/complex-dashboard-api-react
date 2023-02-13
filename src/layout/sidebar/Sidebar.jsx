import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMediaQuery, Box, Stack, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import logo from "../../assets/logo/logo_sm.png";
import logoDark from "../../assets/logo/logo.png";
import ios from "../../assets/logo/ios.png";
import android from "../../assets/logo/android.png";
import qrcode from "../../assets/logo/qrcode.png";

const SideBar = () => {
  const { openedSidebar, leftLight } = useSelector((state) => state.themes);
  const { sidebar } = useSelector((state) => state.data);

  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");

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

  return (
    <motion.div
      className={`text-sm scroll-design z-[500] select-none ${
        openedSidebar ? "overflow-auto" : "overflow-hidden md:overflow-visible"
      }   h-screen z-10 fixed left-0 top-[70px] md:top-0 ${
        leftLight === "light"
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }`}
      animate={
        matches
          ? { x: openedSidebar ? "0" : "-100%", width: "250px" }
          : { width: openedSidebar ? "250px" : "80px" }
      }
      transition={{ type: "spring", duration: 0.5 }}
    >
      <Box className="mb-6 mt-3 h-16" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/">
          <img
            className={`mx-auto ${openedSidebar ? "w-20" : "w-12"}`}
            alt="logo"
            src={openedSidebar ? logoDark : logo}
          />
        </Link>
      </Box>

      {/* today date */}
      {openedSidebar ? (
        <Box className="mb-2">
          <Typography className="mx-auto mb-6 text-sm text-center text-text1">
            {t(["Today"])}, {new Date().getDate()}{" "}
            {months[new Date().getMonth()]} {new Date().getFullYear()}
          </Typography>
        </Box>
      ) : null}

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
    </motion.div>
  );
};

export default SideBar;
