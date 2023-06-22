import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenedSidebar,
  toggleSidebarSubmenu,
} from "../../app/Slicers/localStates/themes";
import { useMediaQuery, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SubSidebarItem from "./SubSidebarItem";

const SidebarItem = ({ sidebarItem, Icon }) => {
  const { openedSidebar, sidebarSubmenu } = useSelector(
    (state) => state.themes
  );
  const [linksHeight, setLinksHeight] = useState("");
  const activeStyle = {
    backgroundColor: "#c9b26d",
    color: "#23272c",
  };

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
          isActive && sidebarItem.path ? activeStyle : { color: "#ced4da" }
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
        className={`group px-[24px] py-3 flex gap-x-3 rounded-lg mx-auto w-[90%] flex-nowrap whitespace-nowrap items-center sidebar-light-text dark:sidebar-dark-text    ${
          !openedSidebar && "relative"
        }`}
      >
        <Icon className="w-[20px]" />
        {openedSidebar && (
          <div className="flex">
            <span>{t(sidebarItem.title)}</span>
            {!sidebarItem.path && (
              <ChevronRightIcon
                className={
                  sidebarSubmenu.open && sidebarSubmenu.id == sidebarItem.id
                    ? "rotate-90 text-white transition-transform duration-500"
                    : "rotate-0 text-white  transition-transform duration-500"
                }
              />
            )}
          </div>
        )}
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
                    "group-hover:visible group-hover:transition-all group-hover:ease-out group-hover:opacity-100 group-hover:duration-[400ms] group-hover:translate-x-0 absolute rounded-xl top-0 left-[85px] w-fit p-2 bg-logoColor"
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
