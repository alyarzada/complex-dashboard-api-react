import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import GoBackButton from "../../components/UI/GoBackButton";
import { Box } from "@mui/material";

const Footer = () => {
  const { t } = useTranslation();
  const { light } = useSelector((state) => state.themes);

  return (
    <Box className="mt-16">
      <GoBackButton />
      <Box
        className={`${
          light ? "bg-bgLight" : " "
        } py-4 px-2 rounded-sm  text-text2 mt-2 border-t-solid border-t border-t-text2"`}
      >
        © 2017 - 2023 RahatBina. Bütün hüquqlar qorunur.
      </Box>
    </Box>
  );
};

export default Footer;
