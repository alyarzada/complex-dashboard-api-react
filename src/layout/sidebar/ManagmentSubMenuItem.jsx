// Tunar
import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { useMediaQuery, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ManagmentSubMenuItem = ({ sublistItem, Icon, parentHeight }, ref) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);
  const [onHover, setOnHover] = useState(false);
  const { openedSidebar } = useSelector((state) => state.themes);
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    if (sublistItem.managmentSublist) {
      setLinksHeight(linkRef.current.getBoundingClientRect().height);
      parentHeight(ref.linkRef.current.getBoundingClientRect().height);
    }
  }, [openSubMenu]);

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
            setOpenSubMenu(!openSubMenu);
          }
          if (sublistItem.path) matches && dispatch(setOpenedSidebar());
        }}
        className={`${
          openedSidebar
            ? "px-4 group mx-auto w-[90%] hover-effect rounded hover:text-white"
            : "w-[173px] pl-[3px]"
        } py-2 flex justify-between cursor-pointer`}
      >
        <span className={`text-[13px] ml-3 ${!openedSidebar && "text-text1 "}`}>
          <Icon className="w-[20px] group-hover:text-white" />
          <span className={`${openedSidebar && "ml-1 align-bottom"}`}>
            {t(sublistItem.title)}
          </span>
        </span>
        {sublistItem.managmentSublist ? (
          <ChevronRightIcon className="text-white" />
        ) : null}
      </Link>
      {sublistItem.managmentSublist ? (
        <Box
          className={`transition-all duration-300 overflow-hidden ${
            openSubMenu ? "h-[" + linksHeight + "px" + "]" : "h-0"
          }`}
          ref={linksContainerRef}
        >
          <ul
            ref={linkRef}
            className={`text-text1 rounded transition-all duration-300 ${
              openedSidebar
                ? "static"
                : "absolute -top-1 left-[180px] bg-logoColor"
            }`}
          >
            {sublistItem.managmentSublist.map(({ path, title }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`${
                    openedSidebar
                      ? "px-9 py-2 w-[80%] mx-auto hover-effect rounded hover:text-white"
                      : "w-28 py-2 pl-3"
                  } block`}
                  onClick={() => matches && dispatch(setOpenedSidebar())}
                >
                  {t(title)}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      ) : null}
    </li>
  );
};

export default forwardRef(ManagmentSubMenuItem);
