// Tunar
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar, setSideabarSubmenu } from "../../app/Slicers/themes";
import { useMediaQuery } from "@mui/material";

const SubSidebarItem = ({ sublistItem }) => {
  const { openedSidebar, sidebarSubmenu } = useSelector(
    (state) => state.themes
  );
  const [onHover, setOnHover] = useState(false);

  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();

  return (
    <li
      className="relative"
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <Link
        to={sublistItem.path ? sublistItem.path : ""}
        onClick={(e) => {
          if (!sublistItem.path) {
            e.preventDefault();
            dispatch(setSideabarSubmenu(!sidebarSubmenu));
          }
          if (sublistItem.path) matches && dispatch(setOpenedSidebar());
        }}
        className={`${
          openedSidebar
            ? "px-4 group mx-auto w-[90%] hover-effect rounded hover:text-white"
            : "w-[173px] pl-[3px]"
        } py-2 flex justify-between cursor-pointer`}
      >
        <span className={`text-[13px] pl-5 ${!openedSidebar && "text-text1"}`}>
          <span className={`${openedSidebar && "ml-3 align-bottom"}`}>
            {t(sublistItem.title)}
          </span>
        </span>
      </Link>
    </li>
  );
};

export default forwardRef(SubSidebarItem);
