import React from "react";
import { motion } from "framer-motion";
import { Button, Typography, Box, Stack, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";
import { ReportOutlined } from "@mui/icons-material";

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

const CustomDialogModal = ({
  handleAgree,
  question = "Please confirm your request",
  className,
  title = "Confirmation",
  ref,
  handleClose,
  loadingData,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      ref={ref}
      className="top-0 left-0 fixed z-[1000] overflow-hidden h-full w-full bg-[#20202065] flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {" "}
      <motion.div
        ref={ref}
        className={`z-[10000] w-[94%] sm:w-[80%] md:w-[48%] bg-[#fff] dark:bg-[#020a15]
       rounded-xl modalScrollLight dark:modalScroll my-10 h-fit  ${
         className && className
       }`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
        onClick={(e) => e.stopPropagation()}
      >
        <Box className="px-2 sm:px-6 py-4 flex items-center justify-center flex-col">
          <Box className="flex items-center justify-center flex-col text-textDark2 dark:text-text1 text-lg mb-6">
            <ReportOutlined className="text-yellow-400 block mb-4 text-[50px]" />
            <Typography className="font-bold mb-2 text-lg">
              {t([title])}
            </Typography>
            <Typography>{t([question])}</Typography>
          </Box>

          <Stack direction="row" spacing={1} justifyContent="end">
            <Button
              className="capitalize bg-red-600 text-slate-50"
              variant="contained"
              onClick={handleClose}
            >
              {t("Cancel")}
            </Button>
            <LoadingButton
              className="capitalize bg-yellow-400"
              variant="contained"
              onClick={() => handleAgree()}
              loading={loadingData ? loadingData === "loading" : null}
            >
              {t("Yes")}
            </LoadingButton>
          </Stack>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default CustomDialogModal;
