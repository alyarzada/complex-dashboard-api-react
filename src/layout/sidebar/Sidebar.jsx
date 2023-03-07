import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import logo from "../../assets/logo/logo_sm.png";
import logoDark from "../../assets/logo/logo.png";
import ios from "../../assets/logo/ios.png";
import android from "../../assets/logo/android.png";
import qrcode from "../../assets/logo/qrcode.png";

const SideBar = () => {
  const { openedSidebar, leftLight } = useSelector((state) => state.themes);
  const { sidebar } = useSelector((state) => state.data);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <Box
      className={`h-[94vh] top-4 left-4 overflow-auto print:hidden duration-500 ease-in-both text-sm scroll-design z-[500] select-none rounded-xl fixed ${
        openedSidebar ? "w-[250px] exl:w-[300px] " : "w-[80px] exl:w-[100px]"
      } ${leftLight === "light" ? "bg-bgLight drop-shadow-lg" : "bg-bgMain"}`}
    >
      <Box
        className="mb-6 mt-3 h-28"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        <img
          className={`mx-auto block mb-6 h-14 whitespace-nowrap overflow-hidden object-cover ${
            openedSidebar ? "w-20" : "w-12"
          }`}
          alt="logo"
          src={openedSidebar ? logoDark : logo}
        />

        {openedSidebar && (
          <Typography className="mx-auto mb-6 text-sm text-center text-text1 whitespace-nowrap overflow-hidden">
            {t(["Today"])}, {new Date().getDate()}{" "}
            {months[new Date().getMonth()]} {new Date().getFullYear()}
          </Typography>
        )}
      </Box>

      {/* today date */}

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
