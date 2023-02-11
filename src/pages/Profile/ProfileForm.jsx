import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import MyDetails from "./MyDetails";
import MyPassword from "./MyPassword";
import NotificationMethod from "./NotificationMethod";
import { useTranslation } from "react-i18next";

const ProfileForm = ({ userData }) => {
  const [value, setValue] = useState("1");

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              sx={{ minWidth: "30%" }}
              className="dark:text-text3 capitalize"
              label={t("My Details")}
              value="1"
            />
            <Tab
              sx={{ minWidth: "30%" }}
              className="text-text3 capitalize"
              label={t(["My Password"])}
              value="2"
            />
            <Tab
              sx={{ minWidth: "30%" }}
              className="text-text3 capitalize"
              label={t(["Notification method"])}
              value="3"
            />
          </TabList>
        </Box>

        <TabPanel value="1" className="p-0 mt-5">
          <MyDetails userData={userData} />
        </TabPanel>
        <TabPanel value="2" className="p-0 mt-5">
          <MyPassword />
        </TabPanel>
        <TabPanel value="3" className="p-0 mt-5">
          <NotificationMethod />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProfileForm;
