import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenedSidebar,
  toggleSidebarSubmenu,
} from "../../app/Slicers/themes";
import { useMediaQuery, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SubSidebarItem from "./SubSidebarItem";

const SidebarItem = ({ sidebarItem, Icon }) => {
  const { openedSidebar, sidebarSubmenu } = useSelector(
    (state) => state.themes
  );
  const [linksHeight, setLinksHeight] = useState("");
  const activeStyle = { backgroundColor: "#c9b26d", color: "white" };

  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (sidebarItem.sublist) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (sidebarSubmenu.open && sidebarSubmenu.id == sidebarItem.id) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }
  }, [sidebarSubmenu]);

  return (
    <li className={`${!openedSidebar && "group relative"}`}>
      <NavLink
        style={({ isActive }) =>
          isActive && sidebarItem.path ? activeStyle : undefined
        }
        to={sidebarItem.path ? sidebarItem.path : ""}
        onClick={(e) => {
          if (!sidebarItem.path) {
            e.preventDefault();
            dispatch(toggleSidebarSubmenu(sidebarItem.id));
          } else {
            matches && dispatch(setOpenedSidebar());
          }
        }}
        className={`group text-text1 flex gap-x-3 shrink-0 flex-nowrap basis-0 whitespace-nowrap items-center py-3  ${
          openedSidebar ? "rounded w-[90%] mx-auto px-4" : "relative px-7"
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
                  sidebarSubmenu.open && sidebarSubmenu.id == sidebarItem.id
                    ? "rotate-90 text-white transition-transform duration-500"
                    : "rotate-0 text-white transition-transform duration-500"
                }
              />
            )}
          </motion.div>
        ) : !sidebarItem.sublist ? (
          <Box className="text-[15px] opacity-0 invisible -translate-x-5  text-center text-white bg-logoColor w-40 p-3 h-[44px] absolute top-0 left-[85px] rounded group-hover:translate-x-0 group-hover:visible group-hover:ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-[400ms]">
            {t(sidebarItem.title)}
          </Box>
        ) : null}
      </NavLink>
      {sidebarItem.sublist ? (
        <Box
          ref={linksContainerRef}
          className={`transition-all duration-300 overflow-hidden ${
            sidebarSubmenu ? `h-[${linksHeight}px]` : "h-0"
          } ${
            !openedSidebar &&
            ` h-[${linksHeight}px] invisible group-hover:visible`
          }`}
        >
          <ul
            ref={linksRef}
            className={
              !openedSidebar
                ? `invisible fit-content opacity-0 -translate-x-5 ${
                    sidebarItem.sublist.length > 0 &&
                    "group-hover:visible group-hover:transition-all group-hover:ease-out group-hover:opacity-100 group-hover:duration-[400ms] group-hover:translate-x-0 absolute rounded top-0 left-[85px] w-fit p-2 bg-logoColor"
                  }`
                : null
            }
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
