import {
  Box,
  Typography,
  ListItemAvatar,
  Divider,
  List,
  ListItem,
  Stack,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import ApartmentIcon from "@mui/icons-material/Apartment";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import Body from "./Body";
import Header from "../../components/UI/Header";
import { setModal } from "../../app/Slicers/modals";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import portBakuImg from "../../assets/port-baku-residence_16406207114647.jpg";
import portBakuImage from "../../assets/logo/port-baku_image.jpg";
import portBakuAzerbaijan from "../../assets/logo/port-baku_azerbaijan.jpg";

const ComplexPanel = () => {
  useScrollToUp();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  const modalList = [
    {
      id: 1,
      title: t("Housing cooperative"),
      name: "PORT BAKU",
    },
    {
      id: 2,
      title: t("Complex"),
      name: "PORT BAKU",
    },
    {
      id: 3,
      title: t("Building manager"),
      name: "PORT BAKU",
    },
    {
      id: 4,
      title: t("Sales consultant"),
      name: "PORT BAKU",
    },
    {
      id: 5,
      title: t("Leisure Club Administrator"),
      name: "PORT BAKU",
    },
    {
      id: 6,
      title: t("Leisure Club Administrator"),
      name: "PORT BAKU",
    },
    {
      id: 7,
      title: t("Logistic coordinator"),
      name: "PORT BAKU",
    },
    {
      id: 8,
      title: t("Fit-out field inspector"),
      name: "PORT BAKU",
    },
    {
      id: 9,
      title: t("Maintenance manager"),
      name: "PORT BAKU",
    },
    {
      id: 10,
      title: t("Cleaning Services Supervisor"),
      name: "PORT BAKU",
    },
    {
      id: 11,
      title: t("Cleaning Services Supervisor"),
      name: "PORT BAKU",
    },
    {
      id: 12,
      title: t("Notes"),
      name: "PORT BAKU",
    },
  ];

  const modalData = (
    <Box>
      <Box>
        <img
          className="h-[320px] w-full object-cover object-center"
          src={portBakuImg}
          alt="port-baku-image"
        />
      </Box>
      <Box>
        {modalList.map((item) => (
          <Stack
            key={item.id}
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            className="dark:text-text1 p-3"
          >
            <Typography>{item.title}</Typography>
            <Typography>{item.name}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box className="flex flex-col items-center">
      <Box className="w-full">
        <Header
          currentPage={{
            title: t("Complex Wall"),
            icon: NewspaperOutlinedIcon,
          }}
        />
        <Box>
          <Box className="rounded-xl mb-6">
            <Box className="flex gap-[10px] h-[100%] flex-col lg:flex-row">
              <Box className="w-full lg:w-[70%]">
                <Box className="w-[100%] h-[284px]">
                  <img
                    className="rounded-t-xl w-full object-fit h-full"
                    src={portBakuImage}
                    alt="port-baku"
                  />
                </Box>

                <Box className="relative rounded-b-xl h-[138px] bg-bgLight dark:bg-bgMain  drop-shadow-lg ">
                  <Box className="absolute -top-5 left-1 md:left-7">
                    <img
                      className="w-36 h-36 border-4 rounded-[50%]"
                      src={portBakuAzerbaijan}
                      alt="port-baku-azerbaijan"
                    />
                  </Box>
                  <Box className="ml-[160px] md:ml-48  py-1 md:py-3 ">
                    <Typography
                      variant="h5"
                      component="h1"
                      className="font-semibold text-textDark4 dark:text-text1"
                    >
                      Port Baku Residence
                    </Typography>
                    <Typography className="text-textDark2 dark:text-text1">
                      {t(["Number of buildings in the complex"])}: 3
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="rounded-xl p-6 dark:text-text1 dark:bg-bgMain bg-white drop-shadow-lg flex-1">
                <Typography
                  className="cursor-pointer select-none text-logoColor hover:text-yellow-600 text-lg w-fit font-semibold"
                  onClick={() =>
                    dispatch(
                      setModal({
                        isOpen: true,
                        title: "Port Baku Residence",
                        children: modalData,
                      })
                    )
                  }
                >
                  {t("Port Baku Residence")}
                </Typography>
                <Typography className="text-textDark2">
                  {t("The number of buildings included in the complex")} : 3
                </Typography>
                <List sx={{ width: "100%", maxWidth: 360 }}>
                  <ListItem
                    className="flex items-center text-sm"
                    alignItems="flex-start"
                  >
                    <ListItemAvatar className="min-w-[36px]">
                      <ApartmentIcon />
                    </ListItemAvatar>
                    <ListItemText
                      className="mb-0 text-textDark2 dark:text-text1 text-sm"
                      primary="Tower A"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                        },
                      }}
                    />
                  </ListItem>
                  <Divider
                    variant="inset"
                    component="li"
                    className="ml-[17px]"
                  />
                  <ListItem
                    className="flex items-center text-sm"
                    alignItems="flex-start"
                  >
                    <ListItemAvatar className="min-w-[36px]">
                      <ApartmentIcon />
                    </ListItemAvatar>
                    <ListItemText
                      className="mb-0 text-textDark2 dark:text-text1 text-sm"
                      primary="Tower B"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                        },
                      }}
                    />
                  </ListItem>
                  <Divider
                    variant="inset"
                    component="li"
                    className="ml-[17px]"
                  />
                  <ListItem
                    className="flex items-center text-sm"
                    alignItems="flex-start"
                  >
                    <ListItemAvatar className="min-w-[36px]">
                      <ApartmentIcon />
                    </ListItemAvatar>
                    <ListItemText
                      className="mb-0 text-textDark2 dark:text-text1 text-sm"
                      primary="Tower C"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                        },
                      }}
                    />
                  </ListItem>
                </List>
                <List className="ml-6">
                  <ListItem
                    className="flex items-center ml-4 "
                    alignItems="flex-start"
                  >
                    <ListItemText
                      className="text-textDark2 dark:text-text1 "
                      primary={t("Total posts")}
                    />
                    <Typography className="bg-logoColor rounded-xl text-sm text-white text-center w-[25px]">
                      {news.length}
                    </Typography>
                  </ListItem>
                  <Divider variant="" component="li" />
                  <ListItem
                    className="flex items-center ml-4"
                    alignItems="flex-start"
                  >
                    <ListItemText
                      className="text-textDark2 dark:text-text1"
                      primary={t("Total comments")}
                    />
                    {/* <Typography className="bg-logoColor rounded text-sm text-white text-center w-[25px]">
                      {news.reduce(
                        (acc, item) => item.comments.length + acc,
                        0
                      )}
                      </Typography> */}
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>

        <Body />
      </Box>
    </Box>
  );
};

export default ComplexPanel;
