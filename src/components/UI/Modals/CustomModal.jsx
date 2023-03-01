import { forwardRef, useEffect } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const CustomModal = (
  { children, title, handleClose, className, status, changeStatus },
  ref
) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "succeeded") {
      toast.success(t("Your application has been sent successfully !"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        handleClose();
        dispatch(changeStatus());
      }, 1000);
    }

    if (status === "failed") {
      toast.error(t("Reservations are possible one week in advance."), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        dispatch(changeStatus());
      }, 1000);
    }
  }, [status]);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 overflow-hidden h-full w-full bg-[#20202065] backdrop-blur-sm flex justify-center z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={ref}
        className={`w-[94%] sm:w-[80%] md:w-[48%] bg-[#fff] dark:bg-[#020a15]
        shadow-lg rounded-xl modalScrollLight dark:modalScroll my-10 ${
          className && className
        }`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
        onClick={(e) => e.stopPropagation()}
      >
        <Box className="px-2 sm:px-6 py-4">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mb-6"
          >
            <Typography className="text-textDark2 dark:text-text1 text-lg">
              {title}
            </Typography>
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Stack>

          <Box>{children}</Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default forwardRef(CustomModal);
