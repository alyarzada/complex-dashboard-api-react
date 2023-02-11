import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Box, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomMenu from "../../components/UI/CustomMenu";
import az from "../../assets/sidebar/az.jpg";
import en from "../../assets/sidebar/en.jpg";
import rus from "../../assets/sidebar/rus-flag1.jpg";

export default function LanguageSwitcher() {
  const [openMenu, setOpenMenu] = useState(false);
  const { i18n } = useTranslation();
  const btnRef = useRef(null);
  
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box className="relative">
      <button onClick={() => setOpenMenu((prev) => !prev)} ref={btnRef}>
        <img
          src={
            i18n.language === "az"
              ? az
              : i18n.language === "en"
              ? en
              : i18n.language === "rus"
              ? rus
              : null
          }
          alt=""
          className="min-w-[15px] max-w-[18px] mr-1 inline-block align-baseline"
        />
        <span className="hidden xmd:inline text-textDark2 dark:text-white">
          {i18n.language === "az"
            ? "Azərbaycan"
            : i18n.language === "en"
            ? "English"
            : i18n.language === "rus"
            ? "Русский"
            : ""}
        </span>
        <KeyboardArrowDownIcon className="text-textDark2 dark:text-text1" />
      </button>

      {openMenu ? (
        <CustomMenu
          className="top-12 -right-20 sm:right-2 w-40"
          ref={btnRef}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        >
          <MenuItem
            onClick={() => {
              changeLang(
                i18n.language === "az"
                  ? "en"
                  : i18n.language === "rus"
                  ? "az"
                  : i18n.language === "en"
                  ? "az"
                  : ""
              );
              setOpenMenu(false);
            }}
          >
            <img
              src={
                i18n.language === "az"
                  ? en
                  : i18n.language === "en"
                  ? az
                  : i18n.language === "rus"
                  ? az
                  : null
              }
              alt=""
              className="w-[18px] mr-1"
            />
            <span>
              {i18n.language === "az"
                ? "English"
                : i18n.language === "rus"
                ? "Azərbaycan"
                : i18n.language === "en"
                ? "Azərbaycan"
                : ""}
            </span>
          </MenuItem>
          <MenuItem
            onClick={() => {
              changeLang(
                i18n.language === "az"
                  ? "rus"
                  : i18n.language === "rus"
                  ? "en"
                  : i18n.language === "en"
                  ? "rus"
                  : ""
              );
              setOpenMenu(false);
            }}
          >
            <img
              src={
                i18n.language === "az"
                  ? rus
                  : i18n.language === "en"
                  ? rus
                  : i18n.language === "rus"
                  ? en
                  : null
              }
              alt=""
              className="w-[18px] mr-1"
            />
            <span>
              {i18n.language === "az"
                ? "Русский"
                : i18n.language === "rus"
                ? "English"
                : i18n.language === "en"
                ? "Русский"
                : ""}
            </span>
          </MenuItem>
        </CustomMenu>
      ) : null}
    </Box>
  );
}
