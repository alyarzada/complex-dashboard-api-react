import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  MenuItem,
  Avatar,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomMenu from "../../components/UI/CustomMenu";
import { logoutHandler } from "../../app/Slicers/auth";
import Cookies from "js-cookie";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const userMenu = [
  {
    icon: <PersonIcon className="text-lg mr-2" />,
    content: "Profile",
    path: "/profile",
  },
  {
    icon: <LocalPhoneOutlinedIcon className="text-lg mr-2" />,
    content: "Contact",
    path: "/contact",
  },
  {
    icon: <LogoutIcon className="text-lg mr-2" />,
    content: "Log Out",
  },
];

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [firstLetters, setFirstLetters] = useState(null);
  const {
    user: {
      has_role: { role_name },
      name,
      username,
    },
    user,
    status,
  } = useSelector((state) => state.auth);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnRef = useRef(null);

  useEffect(() => {
    setFirstLetters(() => {
      const words = name?.split(" ");
      return words
        ?.map((word) => word.charAt(0))
        ?.reduce((acc, item) => acc + item, "");
    });
  }, [status]);

  const handleClick = () => setOpenMenu((prev) => !prev);

  return (
    <Box className="relative">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        className="bg-slate-200 dark:bg-slate-600 p-2 rounded cursor-pointer"
        onClick={handleClick}
        ref={btnRef}
      >
        <Avatar alt={firstLetters} className="cursor-pointer">
          <Typography className="text-sm">{firstLetters}</Typography>
        </Avatar>
        <Box className="hidden md:flex md:flex-col md:items-center md:justify-center">
          <Typography className="text-xs text-textDark2 dark:text-text1">
            {name}
          </Typography>
          <Typography className="text-xs text-textDark2 dark:text-text2">
            {role_name}
          </Typography>
        </Box>
      </Stack>

      {openMenu ? (
        <CustomMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          ref={btnRef}
          className="top-14 w-48 -right-1 sm:right-2 py-1"
        >
          <Box className="my-2 px-4">
            <Typography className="font-bold text-sm text-logoColor">
              {t("Welcome")}!
            </Typography>
            <Typography className="text-xs text-text2">{username}</Typography>
          </Box>
          <Divider />
          <Box>
            {userMenu.map((list, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  if (list.path) {
                    navigate(list.path);
                  } else {
                    dispatch(logoutHandler(Cookies.get("token")));
                  }
                  setOpenMenu(false);
                }}
                className="text-sm text-text1 mb-1"
              >
                {list.icon}
                {t(list.content)}
              </MenuItem>
            ))}
          </Box>
        </CustomMenu>
      ) : null}
    </Box>
  );
};

export default UserMenu;
