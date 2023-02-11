import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CommunalServicesPanel = ({ img, title, path }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={6} md={4} lg={3}>
      <a
        href="https://payments.portbaku.az/auth/login" target={"_blank"}
        className="text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
            dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white
          flex items-center justify-center gap-y-3 text-text5 rounded flex-col h-[240px] cursor-pointer group"
      >
        <img
          className="group-hover:-translate-y-3 transition-transform duration-300 w-[30%]"
          src={img}
          alt="image"
        />
        <Typography>{t(title)}</Typography>
      </a>
    </Grid>
  );
};

export default CommunalServicesPanel;
