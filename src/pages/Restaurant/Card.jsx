import { useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Alert,
  AlertTitle,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import CardItem from "./CardItem";
import { setShowCardIcon } from "../../app/Slicers/themes";
import Header from "../../components/UI/Header";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ManatWhite from "../../assets/restaurantMenus/manatWhite.png"

const Card = () => {
  const { card } = useSelector((state) => state.restaurantMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setShowCardIcon(true));
    return () => {
      dispatch(setShowCardIcon(false));
    };
  }, []);

  return (
    <Box>
      <Header
        currentPage={{
          title: "Card",
          icon: ShoppingCartIcon,
        }}
        extra={"Restourant"}
        icon={
          <RestaurantMenuIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
        to="restaurant-menu-orders"
      />{" "}
      {card.length > 0 ? (
        <Box>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={3}
            className="p-3 dark:bg-gradient-to-r dark:from-mainPrimary min-h-[70vh] dark:to-mainSecondary"
          >
            <Box className="flex flex-1 flex-col gap-4 rounded-lg">
              <Box>
                <AnimatePresence>
                  {card.map((item) => {
                    return <CardItem key={item.id} item={item} />;
                  })}
                </AnimatePresence>
              </Box>
              <Box className="text-text1 xmd:flex justify-between items-center">
                <Box className="flex xmd:flex-col text-center gap-x-3 items-center w-full xmd:w-auto">
                  <Typography
                    className="font-semibold text-text1 capitalize"
                    color="success"
                    variant="outlined"
                  >
                    Ümumi məbləğ:
                  </Typography>
                  <Typography
                    className="font-semibold flex items-center text-white text-[20px] capitalize"
                    color="success"
                    variant="outlined"
                  >
                    {card.reduce((acc, item) => {
                      return acc + item.amount;
                    }, 0)}{" "}
                    <img className="ml-1 mb-[3px]" src={ManatWhite} width={14} height={14} />
                  </Typography>
                </Box>
                <Button
                  startIcon={<PlaylistAddCheckIcon />}
                  variant="contained"
                  className="bg-green-500 capitalize w-full xmd:w-auto"
                >
                  Sifarişi tamamla
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Box>
          <Alert severity="info">
            <AlertTitle>Səbətinizdə məhsul yoxdur</AlertTitle>
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default Card;
