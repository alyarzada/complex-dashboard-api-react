// Tunar
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { useMediaQuery, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SubSidebarItem from "./SubSidebarItem";

const SidebarItem = ({ sidebarItem, Icon }) => {
  const { openedSidebar } = useSelector((state) => state.themes);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [linksHeight, setLinksHeight] = useState("");

  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (sidebarItem.sublist) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (openSubMenu) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }
  }, [openSubMenu]);

  return (
    <li className={`text-gray-400 ${!openedSidebar && "group relative"}`}>
      <Link
        to={sidebarItem.path ? sidebarItem.path : ""}
        onClick={(e) => {
          if (!sidebarItem.path) {
            e.preventDefault();
            setOpenSubMenu(!openSubMenu);
          } else {
            matches && dispatch(setOpenedSidebar());
          }
        }}
        className={`hover:text-text1 flex gap-x-3 shrink-0 flex-nowrap basis-0 whitespace-nowrap items-center py-3  ${
          openedSidebar
            ? "text-text2 group hover-effect rounded w-[90%] mx-auto px-4"
            : "relative group px-7"
        }`}
      >
        <Icon className="w-[20px] group-hover:text-white" />
        {openedSidebar ? (
          <motion.div
            className="text-[15px] w-full flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t(sidebarItem.title)}
            {!sidebarItem.path && (
              <ChevronRightIcon
                className={
                  openSubMenu
                    ? "rotate-90 text-white transition-transform duration-500"
                    : "rotate-0 text-white transition-transform duration-500"
                }
              />
            )}
          </motion.div>
        ) : (
          <Box className="text-[15px] opacity-0 invisible -translate-x-5  text-center text-white bg-logoColor w-40 p-3 h-[44px] absolute top-0 left-[85px] rounded group-hover:translate-x-0 group-hover:visible group-hover:ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-[400ms]">
            {t(sidebarItem.title)}
          </Box>
        )}
      </Link>
      {sidebarItem.sublist ? (
        <Box
          ref={linksContainerRef}
          className={`transition-all duration-300 overflow-hidden ${
            openSubMenu ? `h-[${linksHeight}px]` : "h-0"
          }`}
        >
          <ul
            ref={linksRef}
            className={`text-text1 rounded transition-all duration-300 ${
              openedSidebar
                ? "static"
                : "absolute -top-1 left-[180px] bg-logoColor"
            }`}
          >
            {sidebarItem.sublist.map((sublistItem, index) => {
              return (
                <SubSidebarItem
                  ref={{
                    linksContainerRef,
                    linksRef,
                  }}
                  parentHeight={setLinksHeight}
                  key={index}
                  sublistItem={sublistItem}
                  Icon={Icon}
                />
              );
            })}
          </ul>
        </Box>
      ) : null}
    </li>
  );
};

export default SidebarItem;
