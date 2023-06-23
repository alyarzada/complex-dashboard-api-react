import { useSelector, useDispatch } from "react-redux";
import { Settings } from "../sidebar/Settings";
import { setOpenedSidebar } from "../../app/Slicers/localStates/themes";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import RestaurantCard from "./RestaurantCard";
import { setSideabarSubmenu } from "../../app/Slicers/localStates/themes";
import logo from "../../assets/logo/logo_sm.png";

import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../servers/getRequests";

const Header = () => {
  const { openedSidebar, showCardIcon } = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["userinfo"],
    queryFn: getUserInfo,
  });

  console.log(query);

  return (
    <header
      className={`print:hidden px-3 w-full fixed right-[10px] top-4 duration-500 ease-in-both flex rounded-xl h-[70px] z-30 bg-bgLight dark:bg-bgSecond ${
        openedSidebar
          ? "left-0 md:left-[266px] md:w-[calc(100%-276px)] exl:left-[316px]"
          : "left-0 md:left-[96px] md:w-[calc(100%-106px)]"
      }`}
    >
      <nav className={`w-full flex items-center justify-between`}>
        <IconButton
          className="hidden md:block cursor-pointer text-bgSecond dark:text-text1"
          onClick={() => {
            dispatch(setOpenedSidebar());
            dispatch(
              setSideabarSubmenu({
                open: false,
                id: null,
              })
            );
          }}
        >
          <MenuIcon className="text-textDark2" />
        </IconButton>

        <IconButton className="block md:hidden" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="logo"
            className="w-[30px] h-[30px] block object-cover object-center"
          />
        </IconButton>

        <Box className="flex items-center gap-x-2">
          <LanguageSwitcher />
          <Notifications />
          <Settings />
          {showCardIcon ? <RestaurantCard /> : null}
          {/* <UserMenu {...query} /> */}
        </Box>
      </nav>
    </header>
  );
};

export default Header;
