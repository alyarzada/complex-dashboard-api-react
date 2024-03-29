import { forwardRef, useEffect, useRef } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";

const dropIn = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "easeIn",
    },
  },
  exit: {
    y: "-10vh",
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "easeIn",
    },
  },
};

const CustomModal = (
  { children, title, handleClose, className, status, changeStatus },
  ref
) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const modalRef = useRef(null);

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

  // useEffect(() => {
  //   const handleModal = (e) => {
  //     if (!e?.composedPath().includes(modalRef.current)) {
  //       handleClose();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleModal);
  //   return () => document.removeEventListener("mousedown", handleModal);
  // }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 overflow-hidden h-full w-full bg-[#20202065] backdrop-blur-sm flex justify-center z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        className={`w-[94%] sm:w-[80%] md:w-[48%] bg-[#fff] dark:bg-bgSecond
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
