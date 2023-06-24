import { useState, useRef } from "react";
import { Box, IconButton, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomMenu from "../../components/UI/CustomMenu";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import GridViewIcon from "@mui/icons-material/GridView";

import TelegramIcon from "@mui/icons-material/Telegram";

const data = [
  {
    id: 1,
    title: "Dashboard",
    icon: AdminPanelSettingsOutlinedIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Notifications",
    icon: NotificationsOutlinedIcon,
    path: "/notifications",
  },
  {
    id: 3,
    title: "Requests",
    icon: CommentOutlinedIcon,
    path: "/requests",
  },
  {
    id: 4,
    title: "Contact",
    icon: LocalPhoneOutlinedIcon,
    path: "/contact",
  },
  {
    id: 5,
    title: "Chat",
    icon: TelegramIcon,
    path: "/",
  },
];

const Navigation = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const btnRef = useRef(null);

  return (
    <Box className="relative">
      <IconButton ref={btnRef} onClick={() => setOpenMenu((prev) => !prev)}>
        <GridViewIcon />
      </IconButton>

      {openMenu ? (
        <CustomMenu
          className="w-screen sm:w-[364px] -right-28 xmd:right-2 top-14"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          ref={btnRef}
        >
          <Box className="p-5">
            <Typography className="mb-3">{t(["Navigation"])}</Typography>

            <Grid container>
              {data.map((item) => {
                const Icon = item.icon;
                return (
                  <Grid item xs={4}>
                    <Link
                      className="flex items-center justify-center gap-y-1 flex-col text-center p-2 group rounded hover:bg-logoColor hover:text-white transition-all duration-300"
                      to={item.path}
                      onClick={() => setOpenMenu(false)}
                    >
                      <Icon className="text-[28px] text-logoColor group-hover:text-white" />
                      <Typography className="text-xs">
                        {t([item.title])}
                      </Typography>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </CustomMenu>
      ) : null}
    </Box>
  );
};

export default Navigation;
