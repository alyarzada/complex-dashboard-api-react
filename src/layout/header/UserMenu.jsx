import { useRef, useState, useEffect } from "react";
import { Box, MenuItem, Avatar, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomMenu from "../../components/UI/Modals/CustomMenu";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { logoutHandler } from "../../servers/authRequests";

const UserMenu = ({ data, isLoading, isError, error }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [firstLetters, setFirstLetters] = useState(null);
  const [randomColor, setRandomColor] = useState("");
  const { mutate } = useMutation({
    mutationFn: logoutHandler,
    onSuccess: () => {
      Cookies.remove("token");
    },
  });

  const { t } = useTranslation();
  const navigate = useNavigate();
  const btnRef = useRef(null);

  const userMenu = [
    {
      icon: <PersonIcon className="text-lg mr-2 " />,
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
      const words = data.user.name?.split(" ");
      return words
        ?.map((word) => word.charAt(0))
        ?.reduce((acc, item) => acc + item, "");
    });
  }, [isLoading, data.user.name]);

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
        className="bg-transparent bg-slate-200 dark:bg-bgSecond p-2 rounded cursor-pointer"
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
            {data.user.name}
          </Typography>
          <Typography className="text-xs text-textDark2 dark:text-text2">
            {t([data.user.has_role.role_name])}
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
                    mutate();
                  }
                  setOpenMenu(false);
                }}
                className="text-sm dark:text-text1 text-textDark8 mb-1"
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
