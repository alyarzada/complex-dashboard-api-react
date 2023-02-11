import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, Outlet } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { requestPanels } from "../../../data/apartment-owner/request-data";
import GoBackButton from "../../../components/UI/GoBackButton";
import Header from "../../../components/UI/Header";

import { useSelector, useDispatch } from "react-redux";
import { getAllRequests, getMyRequests } from "../../../app/Slicers/requests";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Cookies from "js-cookie";

const Requests = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (role_id === 8) {
      dispatch(getMyRequests(Cookies.get("token")));
    } else {
      dispatch(getAllRequests(Cookies.get("token")));
    }
  }, []);

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Requests", icon: CommentOutlinedIcon }} />
      <Stack direction={{ xs: "column-reverse", lg: "row" }} spacing={2}>
        <Box
          className="w-full lg:w-[24%] rounded p-6 text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
              dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white"
        >
          <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            className="w-full capitalize"
            variant="contained"
            onClick={() => navigate("/requests/createnewrequest")}
          >
            {t("New Request")}
          </Button>
          <List>
            {requestPanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <ListItem key={panel.id} className="p-0">
                  <ListItemButton
                    className={`rounded ${
                      active === panel.id ? "bg-[#ffffff14]" : ""
                    }`}
                    onClick={() => {
                      setActive(panel.id);
                      navigate(`${panel.path}/${panel.type}`);
                    }}
                  >
                    <Icon>{panel.icon}</Icon>
                    <ListItemText className="ml-3" primary={t(panel.title)} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box className="flex-1">
          <Outlet active={active} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Requests;
