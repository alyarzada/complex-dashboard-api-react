import { useState, useRef } from "react";
import {
  Box,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setOpenedSettingBar } from "../../app/Slicers/themes";

import CustomMenu from "../../components/UI/Modals/CustomMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const NavigationPanel = () => {
  const [active, setActive] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const { openedSettingBar } = useSelector((state) => state.themes);
  const { role_id, user } = useSelector((state) => state.user);

  const { t } = useTranslation();
  const btnRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const words = user?.name.split(" ");
  const firstLetters = words
    .map((word) => word.charAt(0))
    .reduce((acc, item) => acc + item, "");

  const lists = [
    {
      id: 1,
      title: t("News Feed"),
      path: "/complexpanel",
    },
    {
      id: 2,
      title: t("Saved Posts"),
      path: "/complexpanel/savedposts",
    },
    {
      id: 3,
      title: t("Chat"),
      path: "/chat",
    },
  ];

  return (
    <Box className="w-full">
      {role_id === 2 && (
        <Box className="pb-4">
          <Button
            variant="contained"
            className="bg-rose-500 capitalize w-full hover:bg-rose-600 py-3 tracking-wider text-base	"
            onClick={() => navigate("/complex-select")}
          >
            {t("Change Complex")}
          </Button>
        </Box>
      )}

      <Box className="rounded-xl p-4 mb-4 dark:text-text1 bg-bgLight dark:bg-bgMain  drop-shadow-lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          className="relative mb-3"
        >
          <Stack direction="row" spacing={1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
              {firstLetters}
            </Avatar>
            <Box>
              <Typography className="text-textDark2">{user?.name}</Typography>
              <Typography className="text-textDark3 text-sm">
                {t(user?.has_role.role_name)}
              </Typography>
            </Box>
          </Stack>
          <IconButton ref={btnRef} onClick={() => setOpenMenu((prev) => !prev)}>
            <MoreHorizIcon />
          </IconButton>

          {openMenu ? (
            <CustomMenu
              className="top-12 right-4 width-40"
              ref={btnRef}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              <MenuItem>
                <Link to="/profile">{t("As read")}</Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(setOpenedSettingBar(!openedSettingBar));
                  setOpenMenu(false);
                }}
              >
                {t("Settings")}
              </MenuItem>
            </CustomMenu>
          ) : null}
        </Stack>

        {/* Navigation bar */}
        <Box className="text-textDark2 dark:text-text1">
          <List>
            {lists.map((list) => (
              <ListItem key={list.id} className="p-0">
                <ListItemButton
                  onClick={(e) => {
                    navigate(list.path);
                    setActive(list.id);
                  }}
                  className={`${
                    active === list.id ? "dark:bg-[#ffffff14] bg-[#F5F5F5]" : ""
                  } rounded-xl`}
                >
                  <ListItemIcon>
                    <NewspaperIcon />
                  </ListItemIcon>
                  <ListItemText primary={list.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationPanel;
