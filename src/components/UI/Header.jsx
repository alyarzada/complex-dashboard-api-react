import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const Icon = props.currentPage.icon;
  const { t } = useTranslation();
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Typography
        variant="h6"
        component="h1"
        className="font-bold text-textDark2 dark:text-text2 text-[16px] mb-1 lg:mb-6"
      >
        {t(props.currentPage.title)}
      </Typography>
      <Breadcrumbs className="mb-4 lg:mb-6" aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          className="text-logoColor font-bold"
          to="/"
        >
          <HomeIcon
            sx={{ mr: 0.5, mb: 0.3 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
          {t("Home")}
        </Link>
        {props.extra ? (
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            className="text-logoColor"
            to={"/" + props.to}
          >
            {/* <HomeIcon
              sx={{ mr: 0.5 }}
              className="text-logoColor align-middle"
              fontSize="inherit"
            /> */}
            {props.icon}
            {t(props.extra)}
          </Link>
        ) : null}
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <Icon className="text-base mr-1 text-textDark2" />
          {t(props.currentPage.title)}
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};

export default Header;
