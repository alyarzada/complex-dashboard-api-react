import { Typography, Stack, Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import React from "react";
import azerisiq from "../../../assets/communal/azerisiq.png";
import azerqaz from "../../../assets/communal/azeriqaz2.png";
import azersu from "../../../assets/communal/azersu.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";

import Header from "../../../components/UI/Header";
import HomeIcon from "@mui/icons-material/Home";
const Communal = () => {
  const { t } = useTranslation();
  const { disableTransform } = useSelector((state) => state.themes);
  return (
    <div className={`w-full ${disableTransform ? "transform-none" : ""} `}>
      <Header currentPage={{ title: "Communal Services", icon: HomeIcon }} />

      <Stack
        className="gap-4"
        direction="row"
        sx={{ flexWrap: "wrap" }}
        spacing={3}
        max-w-full
      >
        <Box className="w-2/5 xs:[w-47%] lg:w-1/4 flex items-center justify-center flex-col py-6 px-10 rounded bg-slate-50 gap-y-4 drop-shadow-lg">
          <img className="w-40" src={azerisiq} alt="azerisiq" />
          <Typography className="mt-4">Azərişıq</Typography>
        </Box>
        <Box className="w-2/5 xs:w-[47%] lg:w-1/4 flex items-center justify-center flex-col ml-0 py-6 px-10 rounded bg-slate-50 gap-y-4 drop-shadow-lg">
          <img className="w-40" src={azerqaz} alt="azerqaz" />
          <Typography className="mb-1 text-textDark8 pb-4">Azərqaz</Typography>
        </Box>
        <Box className="w-2/5 xs:[w-47%] lg:w-1/4  flex items-center justify-center flex-col ml-0 py-6 px-10 rounded bg-slate-50 gap-y-4 drop-shadow-lg">
          <img className="w-40" src={azersu} alt="azersu" />
          <Typography className="mt-8 text-textDark7 mb-5">Azərisu</Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Communal;
