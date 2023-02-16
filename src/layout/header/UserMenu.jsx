import { useRef, useState, useEffect } from "react";
import {
  Box,
  MenuItem,
  Avatar,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomMenu from "../../components/UI/Modals/CustomMenu";
import { logoutHandler } from "../../app/Slicers/auth";
import Cookies from "js-cookie";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";



const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [firstLetters, setFirstLetters] = useState(null);
  const [randomColor, setRandomColor] = useState("");
  const {
    user: {
      has_role: { role_name },
      name,
      username,
    },
    status,
  } = useSelector((state) => state.auth);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnRef = useRef(null);

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
      content: t(["Log Out"]),
    },
  ];

  useEffect(() => {
    setFirstLetters(() => {
      const words = name?.split(" ");
      return words
        ?.map((word) => word.charAt(0))
        ?.reduce((acc, item) => acc + item, "");
    });
  }, [status]);

  useEffect(() => {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);
    setRandomColor(color);
  }, []);

  return (
    <Box className="relative">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        className="bg-slate-200 dark:bg-slate-600 p-2 rounded cursor-pointer"
        onClick={() => setOpenMenu((prev) => !prev)}
        ref={btnRef}
      >
        <Avatar
          style={{
            backgroundColor: randomColor,
          }}
          alt={firstLetters}
          className="cursor-pointer text-text1"
        >
          <Typography className="text-sm">{firstLetters}</Typography>
        </Avatar>
        <Box className="hidden md:flex md:flex-col md:items-center md:justify-center">
          <Typography className="text-xs text-textDark2 dark:text-text1">
            {name}
          </Typography>
          <Typography className="text-xs text-textDark2 dark:text-text2">
            {t([role_name])}
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
