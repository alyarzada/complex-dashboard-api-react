import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar, setSideabarSubmenu } from "../../app/Slicers/themes";
import { useMediaQuery } from "@mui/material";

const SubSidebarItem = ({ sublistItem }) => {
  const { openedSidebar, sidebarSubmenu } = useSelector(
    (state) => state.themes
  );

  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();
  const activeStyle = { backgroundColor: "#c9b26d", color: "white" };

  return (
    <li className="relative text-white">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
            ? "px-4 group mx-auto w-[90%]  rounded hover:text-white"
            : "w-[140px] pl-[3px]"
        } py-2 flex justify-between cursor-pointer`}
      >
        <span
          className={` ${
            !openedSidebar ? "text-white text-[15px]" : "align-bottom pl-6"
          }`}
        >
          {t(sublistItem.title)}
        </span>
      </NavLink>
    </li>
  );
};

export default SubSidebarItem;
