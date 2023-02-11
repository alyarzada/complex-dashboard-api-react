import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Typography,
  Badge,
  Button,
  Stack,
  Tooltip
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomMenu from "../../components/UI/CustomMenu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { getAllNotifications } from "../../app/Slicers/notifications";
import Cookies from "js-cookie";
import { format } from "date-fns";

export default function Notifications() {
  const [openMenu, setOpenMenu] = useState(false);
  const { notifications, status } = useSelector((state) => state.notifications);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotifications(Cookies.get("token")));
  }, []);

  return (
    <Box className="relative">
    
      <Tooltip title={t("Notifications")} arrow>
      <IconButton>
      <Badge badgeContent={notifications.length} color="error">
      <NotificationsIcon />
    </Badge>
      </IconButton>
    </Tooltip>

      {openMenu ? (
        <CustomMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          ref={btnRef}
          className="top-14 -right-6 sm:right-2 w-[300px] "
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="p-4"
          >
            <Typography>{t(["Notifications"])}</Typography>
            <Typography className="bg-logoColor rounded px-2 py-[2px] text-xs">
              {notifications.length}
            </Typography>
          </Stack>
          <Box className="h-[230px] overflow-auto scroll-design">
            {notifications.length > 0 ? (
              notifications
                ?.map((item) => {
                  return {
                    ...item,
                    created_at: new Date(item.created_at.replace(" ", "T")),
                  };
                })
                ?.sort((a, b) => b.created_at - a.created_at)
                ?.map((item) => {
                  return {
                    ...item,
                    created_at: format(item?.created_at, "dd MMMM yyyy, HH:mm"),
                  };
                })
                .map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      navigate("/notifications");
                      setOpenMenu(false);
                    }}
                    className="flex items-start"
                  >
                    <LightbulbOutlinedIcon className="text-xl mr-2 text-rose-500 translate-y-1" />
                    <Box>
                      <Typography className="font-semibold text-sm text-text1">
                        {item?.subject}
                      </Typography>
                      <span className="text-xs text-text1">
                        {item?.created_at}
                      </span>
                    </Box>
                  </MenuItem>
                ))
                .slice(0, 8)
            ) : (
              <Box className="p-3">
                <Typography>{t(["No notification!"])}</Typography>
              </Box>
            )}
          </Box>
          <Box className="flex items-center justify-center mb-2">
            <Button
              className="capitalize text-logoColor"
              onClick={() => {
                navigate("/notifications");
                setOpenMenu(false);
              }}
            >
              {t(["View all"])}
            </Button>
          </Box>
        </CustomMenu>
      ) : null}
    </Box>
  );
}
