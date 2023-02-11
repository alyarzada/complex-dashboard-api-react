import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../app/Slicers/restaurantMenu";
import { setModal } from "../../app/Slicers/modals";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import manatWhite from "../../assets/restaurantMenus/manatWhite.png";
import soup from "../../assets/restaurantMenus/25097.jpg";

const Meal = ({
  item: { img, name, price, description, id, categoryId, subCategoryId },
  item,
}) => {
  const [mealCounter, setMealCounter] = useState(1);
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { card } = useSelector((state) => state.restaurantMenu);
  const { modal } = useSelector((state) => state.modals);

  useEffect(() => {
    dispatch(
      setModal({
        ...modal,
        children: modalData,
      })
    );
  }, [mealCounter]);

  const addToCardHandler = () => {
    dispatch(
      addToCard({
        ...item,
        count: mealCounter,
        amount: mealCounter * price,
      })
    );
    dispatch(
      setModal({
        ...modal,
        isOpen: false,
      })
    );
    toast(t("Məhsul səbətinizə əlavə edildi !"));
  };

  function findObject(array, id, categoryId, subCategoryId) {
    for (let i = 0; i < array.length; i++) {
      if (
        array[i].id === id &&
        array[i].categoryId === categoryId &&
        array[i].subCategoryId === subCategoryId
      ) {
        console.log("hello", array[i]);
        return array[i];
      }
      if (Array.isArray(array[i])) {
        let result = findObject(array[i], id, categoryId, subCategoryId);
        if (result) {
          console.log(array[i]);
          return result;
        }
      }
    }
    return null;
  }

  const modalData = (
    <Box className="flex flex-col md:flex-row gap-x-3">
      <Box>
        <img className="rounded" src={img} alt={name} />
      </Box>
      <Box>
        <Typography className="text-text1 mb-2">
          <span className="text-logoColor font-bold">Ingredientlər:</span>{" "}
          {description}
        </Typography>
        <Box className="flex items-center ">
          <Typography className="text-logoColor font-bold">Miqdar:</Typography>
          <IconButton
            onClick={() => {
              if (mealCounter <= 1) {
                setMealCounter(1);
              } else {
                setMealCounter(mealCounter - 1);
              }
            }}
          >
            <IndeterminateCheckBoxOutlinedIcon />
          </IconButton>
          <Typography className="text-text1 align-bottom">
            {mealCounter}
          </Typography>
          <IconButton onClick={() => setMealCounter(mealCounter + 1)}>
            <AddBoxOutlinedIcon />
          </IconButton>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography className="flex items-center text-text1">
            <span className="text-logoColor font-bold">Mebleg:</span>{" "}
            {price * mealCounter}{" "}
            <img
              className="ml-1 mb-[3px]"
              src={manatWhite}
              width={16}
              height={16}
            />
          </Typography>

          {card.includes(findObject(card, id, categoryId, subCategoryId)) ? (
            <Typography className="bg-red-500 text-white p-2 rounded">
              Bu məhsul səbətdə var!
            </Typography>
          ) : (
            <Button
              variant="contained"
              className="capitalize bg-logoColor"
              onClick={addToCardHandler}
            >
              Sebete at
            </Button>
          )}
        </Stack>
        <Typography className="text-red-500">{errorMessage}</Typography>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box
        className="hover:scale-[1.05] transition-transform duration-500 text-textDark relative drop-shadow-lg hover:drop-shadow-xl dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-bgLight dark:text-white text-text5 rounded-lg pt-4 pb-3 px-3"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Box
          onClick={() =>
            dispatch(
              setModal({
                isOpen: true,
                children: modalData,
                title: name,
                className: "h-fit",
              })
            )
          }
        >
          <img
            className={`rounded-[50%] w-28 h-28 object-cover object-center absolute -top-4 -left-1 ${
              hover ? "rotate-45 transition-transform duration-300" : ""
            }`}
            src={img}
            alt={name}
          />
          <Box className="h-20 flex justify-end items-center px-6 py-4">
            <Typography className="dark:text-white flex items-center font-bold text-lg">
              {price}{" "}
              <img
                className="ml-1 mb-[3px]"
                src={manatWhite}
                width={16}
                height={16}
              />
            </Typography>
          </Box>
          <Typography className="dark:text-logoColor mt-2 font-[500]">
            {name}
          </Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Rating
            color="red"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <IconButton
            onClick={() =>
              dispatch(
                setModal({
                  isOpen: true,
                  children: modalData,
                  title: name,
                  className: "h-fit",
                })
              )
            }
            className="dark:text-text1 text-sm select-none cursor-pointer dark:hover:text-logoColor"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Meal;
