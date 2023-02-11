import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";

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

const CustomNestedModal = ({ children, name, handleClose }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-[#20202065] opacity-1 hidden last:flex last:items-center last:justify-center z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-[94%] sm:max-w-[500px] relative bg-[#fff] dark:bg-[#020a15]
        shadow-lg rounded-xl overflow-y-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
        onClick={(e) => e.stopPropagation()}
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
