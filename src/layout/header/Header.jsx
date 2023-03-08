import { useSelector, useDispatch } from "react-redux";
import { Settings } from "../sidebar/Settings";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import RestaurantCard from "./RestaurantCard";
import { setSideabarSubmenu } from "../../app/Slicers/themes";
import logo from "../../assets/logo/logo_sm.png";

const Header = () => {
  const { openedSidebar, boxed, showCardIcon } = useSelector(
    (state) => state.themes
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header
      className={`print:hidden duration-500 ease-in-both flex top-4 rounded-xl bg-bgSecond px-3 sm:px-5 h-[70px] z-30 bg-bgSecond ${
        openedSidebar
          ? "left-[280px] exl:left-[300px] right-[10px] header-width-open"
          : "left-[80px] header-width-close right-[10px]"
      } w
      } ${boxed ? "absolute" : "fixed"}`}
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
          <UserMenu />
        </Box>
      </nav>
    </header>
  );
};

export default Header;
