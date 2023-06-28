import { IconButton, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import {
  incrementAmount,
  decrementAmount,
  deleteCardItems,
} from "../../../app/Slicers/restaurantMenu";
import { setDialogModal } from "../../../app/Slicers/modals";

import DeleteIcon from "@mui/icons-material/Delete";
import manatLogoColor from "../../../assets/logo/manatLogoColor.png";
import manatWhite from "../../../assets/logo/manatWhite.png";

const CardItem = ({ item }) => {
  const { dialogModal } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography className="text-text1 flex xmd:hidden justify-start w-full text-sm xmd:text-base text-center">
        {item.name}
      </Typography>
      <Box
        key={item.id}
        className="flex xmd:gap-x-3 gap-x-1 xmd:px-4 pb-4 pt-1 justify-between items-center border-b "
      >
        <Box className="flex mr-3 flex-col items-center gap-1">
          <img
            src={item.img}
            // src={manatWhite}
            className="rounded-[50%] w-12 h-12  xmd:w-24 xmd:h-24 object-cover object-center"
          />
          <Typography className="xmd:hidden items-center justify-center flex text-xs text-[#C9B26D] ">
            {item.price}{" "}
            <img
              className="ml-1 mb-[1px]"
              src={manatLogoColor}
              width={9}
              height={9}
            />
          </Typography>
        </Box>
        <Box className="xmd:flex items-center w-[30%]">
          <Typography className="text-text1 hidden xmd:block mb-1 w-full text-sm xmd:text-base text-center">
            {item.name}
          </Typography>
          <Box className="rounded-[20px] xmd:py-1 px-4 border w-full border-text1 flex justify-between text-white items-center">
            <Typography
              onClick={() => dispatch(decrementAmount(item.id))}
              className="cursor-pointer select-none"
            >
              -
            </Typography>
            <Typography>{item.count}</Typography>
            <Typography
              onClick={() => dispatch(incrementAmount(item.id))}
              className="cursor-pointer select-none"
            >
              +
            </Typography>
          </Box>
        </Box>
        <Typography className=" hidden xmd:flex items-center justify-center text-sm xmd:text-base text-text1 text-center w-[20%]">
          <span className="inline-block mr-1 text-sm xmd:text-base font-semibold">
            Qiymət:
          </span>{" "}
          {item.price}{" "}
          <img
            className="ml-1 mb-[3px]"
            src={manatWhite}
            width={10}
            height={10}
          />
        </Typography>
        <Typography className="text-sm xmd:text-base text-text1 justify-center flex items-center text-center xmd:w-[20%] w-[40%]">
          <span className="inline-block mr-1 text-sm xmd:text-base  font-semibold">
            Məbləğ:
          </span>{" "}
          <span className="flex items-center">
            {item.amount}{" "}
            <img
              className="ml-1 mb-[3px]"
              src={manatWhite}
              width={10}
              height={10}
            />
          </span>
        </Typography>
        <IconButton
          onClick={() => {
            dispatch(
              setDialogModal({
                isOpen: true,
                question: "Bu məhsulu səbətdən silmək istədiyinizə əminsiniz?",
                handleAgree: () => {
                  dispatch(deleteCardItems(item.id));

                  setTimeout(() => {
                    toast.success(t("Deleted"), {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });

                    dispatch(
                      setDialogModal({
                        ...dialogModal,
                        isOpen: false,
                      })
                    );
                  }, 500);
                },
              })
            );
          }}
        >
          <Box className="flex p-0 items-center justify-center">
            <DeleteIcon className="text-red-500" />
          </Box>
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default CardItem;
