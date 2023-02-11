import { useState, useRef, useEffect } from "react";
import {
  Box,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Typography,
  MenuItem,
  Divider,
} from "@mui/material";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSettingBar } from "../../app/Slicers/themes";
import CustomMenu from "../../components/UI/CustomMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import portBakuImg from "../../assets/port-baku-residence_16406207114647.jpg";
import LeafletMap from "./LeafletMap";
import "leaflet/dist/leaflet.css";
import GoBackButton from "../../components/UI/GoBackButton";
import { getAllNews } from "../../app/Slicers/news";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { setModal } from "../../app/Slicers/modals";

const Body = () => {
  const { openedSettingBar } = useSelector((state) => state.themes);
  const { modal } = useSelector((state) => state.modals);
  const { user } = useSelector((state) => state.auth);
  const { news } = useSelector((state) => state.news);
  const [active, setActive] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);

  const btnRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  // const modalList = [
  //   {
  //     id: 1,
  //     title: t("Housing cooperative"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 2,
  //     title: t("Complex"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 3,
  //     title: t("Building manager"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 4,
  //     title: t("Sales consultant"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 5,
  //     title: t("Leisure Club Administrator"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 6,
  //     title: t("Leisure Club Administrator"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 7,
  //     title: t("Logistic coordinator"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 8,
  //     title: t("Fit-out field inspector"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 9,
  //     title: t("Maintenance manager"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 10,
  //     title: t("Cleaning Services Supervisor"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 11,
  //     title: t("Cleaning Services Supervisor"),
  //     name: "PORT BAKU",
  //   },
  //   {
  //     id: 12,
  //     title: t("Notes"),
  //     name: "PORT BAKU",
  //   },
  // ];

  const words = user?.name.split(" ");
  const firstLetters = words
    .map((word) => word.charAt(0))
    .reduce((acc, item) => acc + item, "");

  useEffect(() => {
    dispatch(getAllNews(Cookies.get("token")));
  }, []);

  // const modalData = (
  //   <Box>
  //     <Box>
  //       <img
  //         className="h-[320px] w-full object-cover object-center"
  //         src={portBakuImg}
  //         alt="port-baku-image"
  //       />
  //     </Box>
  //     <Box>
  //       {modalList.map((item) => (
  //         <Stack
  //           key={item.id}
  //           justifyContent="space-between"
  //           direction="row"
  //           alignItems="center"
  //           className="dark:text-text1 p-3"
  //         >
  //           <Typography>{item.title}</Typography>
  //           <Typography>{item.name}</Typography>
  //         </Stack>
  //       ))}
  //     </Box>
  //   </Box>
  // );

  return (
    <Box>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box className="w-full md:w-[40%]">
          <Box className="rounded p-4 mb-4 dark:text-text1 dark:bg-gradient-to-r  dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg">
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
                  <Typography className="text-textDark2">
                    {user?.name}
                  </Typography>
                  <Typography className="text-textDark3 text-sm">
                    {user?.has_role.role_name}
                  </Typography>
                </Box>
              </Stack>
              <IconButton
                ref={btnRef}
                onClick={() => setOpenMenu((prev) => !prev)}
              >
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
                    <Link to="/profile">{t("Edit Profile")}</Link>
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
                        active === list.id ? "bg-[#ffffff14]" : ""
                      } rounded`}
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

          {/* <Box className="rounded p-6 mb-6 dark:text-text1 dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg">
            <Typography
              className="cursor-pointer select-none text-logoColor hover:text-yellow-600 text-lg w-fit font-semibold"
              onClick={() =>
                dispatch(
                  setModal({
                    isOpen: true,
                    title: "Port Baku",
                    children: modalData,
                  })
                )
              }
            >
              {t("Port Baku")}
            </Typography>
            <Typography className="text-textDark2">
              {t("The number of buildings included in the complex")} : 3
            </Typography>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem className="flex items-center" alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  className="text-textDark2 dark:text-text1"
                  primary="Tower A"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className="flex items-center" alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  className="text-textDark2 dark:text-text1"
                  primary="Tower B"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className="flex items-center" alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  className="text-textDark2 dark:text-text1"
                  primary="Tower C"
                />
              </ListItem>
            </List>
            <List className="ml-6">
              <ListItem
                className="flex items-center ml-5 "
                alignItems="flex-start"
              >
                <ListItemText
                  className="text-textDark2 dark:text-text1 "
                  primary={t("Total posts")}
                />
                <Typography className="bg-logoColor rounded text-sm text-white text-center w-[25px]">
                  {news.length}
                </Typography>
              </ListItem>
              <Divider variant="" component="li" />
              <ListItem
                className="flex items-center ml-5"
                alignItems="flex-start"
              >
                <ListItemText
                  className="text-textDark2 dark:text-text1"
                  primary={t("Total comments")}
                />
                <Typography className="bg-logoColor rounded text-sm text-white text-center w-[25px]">
                  {news.reduce((acc, item) => item.comments.length + acc, 0)}
                </Typography>
              </ListItem>
            </List>
          </Box> */}

          <Box className="rounded mb-6 dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg">
            <LeafletMap />
          </Box>
        </Box>

        <Box className="w-full md:w-[58%]">
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};

export default Body;
