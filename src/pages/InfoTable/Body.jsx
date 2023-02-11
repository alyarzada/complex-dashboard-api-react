import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import GoBackButton from "../../components/UI/GoBackButton";
import "leaflet/dist/leaflet.css";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EachTab from "./EachTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Body = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const { informations } = useSelector((state) => state.informations);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabOneData = [
    {
      id: 1,
      key: "Housing cooperative",
      value: informations?.mtk?.name,
    },
    {
      id: 2,
      key: "Phone number",
      value: informations?.mtk?.data?.phone,
    },
    {
      id: 3,
      key: "Email address",
      value: informations?.mtk?.data?.email,
    },
    {
      id: 4,
      key: "Website",
      value: informations?.mtk?.data?.website,
    },
    {
      id: 5,
      key: "Address",
      value: informations?.mtk?.data?.address,
    },
    {
      id: 6,
      key: "Facebook",
      value: informations?.mtk?.data?.social_fb,
    },
  ];

  const tabTwoData = [
    { id: 1, key: "Complex", value: informations?.complex?.name },
  ];

  const tabThreeData = [
    {
      id: 1,
      key: "Building",
      value: informations?.building?.name,
    },
    {
      id: 2,
      key: "Floors",
      value: informations?.building?.floors,
    },
  ];

  const tabFourData = [
    {
      id: 1,
      key: "Blok",
      value: informations?.apartment?.blok,
    },
    {
      id: 2,
      key: "Apartment",
      value: informations?.apartment?.name,
    },
    {
      id: 3,
      key: "Floor",
      value: informations?.apartment?.floor,
    },
    {
      id: 4,
      key: "Square",
      value: informations?.apartment?.square,
    },
  ];

  return (
    <Box className="rounded dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
      <Box className="p-1 lg:p-4">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="capitalize"
              label=<div>
                <ViewInArIcon className="mr-0.5 w-5 mb-1" />{" "}
                {t(["Housing cooperative"])}{" "}
              </div>
              {...a11yProps(0)}
            />
            <Tab
              className="capitalize"
              label=<div>
                <HomeIcon className="mr-0.5 w-5 mb-1" /> {t(["Complex"])}{" "}
              </div>
              {...a11yProps(1)}
            />
            <Tab
              className="capitalize"
              label=<div>
                <ApartmentIcon className="mr-0.5 w-5 mb-1" />
                {t(["Building"])}
              </div>
              {...a11yProps(2)}
            />
            <Tab
              className="capitalize"
              label=<div>
                <MeetingRoomIcon className="mr-0.5 w-5 mb-1" />
                {t(["Apartment"])}
              </div>
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <EachTab datas={tabOneData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EachTab datas={tabTwoData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EachTab datas={tabThreeData} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EachTab datas={tabFourData} />
        </TabPanel>

        <Box className="rounded mb-6 dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
          <MapContainer
            center={[40.37665543757066, 49.85999537195368]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[500px] rounded z-10"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.37665543757066, 49.85999537195368]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
