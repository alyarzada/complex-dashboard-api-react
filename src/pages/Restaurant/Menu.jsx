import { useEffect } from "react";
import { Box, Typography, Fab, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import { setShowCardIcon } from "../../app/Slicers/localStates/themes";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import Header from "../../components/UI/Header";
import { useNavigate } from "react-router-dom";
import RestaurantMenuIcons from "@mui/icons-material/RestaurantMenu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Menu = () => {
  const { menu, card } = useSelector((state) => state.restaurantMenu);
  const { openedSidebar } = useSelector((state) => state.themes);
  const matches = useMediaQuery("(max-width:768px)");

  const dispatch = useDispatch();
  useScrollToUp();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setShowCardIcon(true));
    return () => {
      dispatch(setShowCardIcon(false));
    };
  }, []);

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: "Restourant",
          icon: RestaurantMenuIcons,
        }}
      />
      <Box>
        {menu.length > 0 ? (
          menu.map((category) => {
            return <Category key={category.id} {...category} />;
          })
        ) : (
          <Typography className="text-red-500">Tezlikle...</Typography>
        )}
      </Box>

      {/* width: openedSidebar ? "250px" : "80px" */}

      {card.length > 0 ? (
        <Fab
          variant="extended"
          className={`fixed ${
            openedSidebar
              ? "w-[calc(100%-266px)] md:left-[256px] "
              : "w-[96%] left-[2%] md:w-[calc(100%-100px)] md:left-[90px]"
          } right-[10px] bottom-5 lowercase bg-green-500 text-black overflow-hidden rounded-lg`}
          onClick={() => navigate("/restaurant-menu-orders/card")}
        >
          <Box className="animated-container w-full justify-center flex items-center">
            <ShoppingCartCheckoutIcon className="mr-1 text-white" />
            <Typography className="animated-text text-white font-semibold">
              {" "}
              <span className="capitalize text-white">Səbətinizə</span> keçin
            </Typography>
            <span className="animated-highlight"></span>
          </Box>
        </Fab>
      ) : null}
    </Box>
  );
};

export default Menu;
