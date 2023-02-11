import React from "react";
import { Box, Typography } from "@mui/material";
import Body from "./Body";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import portBakuImage from "../../assets/images/port-baku_image.jpg";
import portBakuAzerbaijan from "../../assets/images/port-baku_azerbaijan.jpg";
import Header from "../../components/UI/Header";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { useTranslation } from "react-i18next";

const ComplexPanel = () => {
  useScrollToUp();
  const { t } = useTranslation();

  return (
    <Box className="flex flex-col items-center w-full">
      <Box className="w-full xl:w-[72%]">
        <Box>
          <Box className="rounded mb-6">
            <Box>
              <img
                className="rounded-t"
                src={portBakuImage}
                alt="port-baku-image"
              />
            </Box>
            <Box className="relative rounded-b h-28 dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg">
              <Box className="absolute -top-5 left-1 md:left-7">
                <img
                  className="w-36 h-36 border-4 rounded-[50%]"
                  src={portBakuAzerbaijan}
                  alt="port-baku-azerbaijan"
                />
              </Box>
              <Box className="ml-[160px] md:ml-48  py-1 md:py-3">
                <Typography
                  variant="h5"
                  component="h1"
                  className="font-semibold text-textDark4 dark:text-text1"
                >
                  Port Baku
                </Typography>
                <Typography className="text-textDark2 dark:text-text1">
                  {t(["Number of buildings in the complex"])}: 3
                </Typography>
              </Box>
            </Box>
          </Box>
          <Header
            currentPage={{
              title: t("Complex Wall"),
              icon: NewspaperOutlinedIcon,
            }}
          />
        </Box>
        <Body />
      </Box>
    </Box>
  );
};

export default ComplexPanel;
