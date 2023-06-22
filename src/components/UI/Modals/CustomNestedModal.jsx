import { useEffect, useRef } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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

const CustomNestedModal = ({ children, name, handleClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleModal = (e) => {
  //     if (!e?.composedPath()?.includes(modalRef.current)) {
  //       handleClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleModal);

  //   return () => {
  //     document.removeEventListener("mousedown", handleModal);
  //   };
  // });

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm overflow-hidden bg-[#20202065] opacity-1 hidden last:flex last:items-center last:justify-center z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-[94%] sm:max-w-[500px] relative bg-bgLight dark:bg-bgSecond
        shadow-lg rounded-xl overflow-y-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
        ref={modalRef}
      >
        <Box className="px-2 sm:px-6 py-4 dark:text-text1 z-[5000] relative">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mb-6"
          >
            <Typography className="text-textDark2 dark:text-text1 text-lg">
              {t(name)}
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

export default CustomNestedModal;
