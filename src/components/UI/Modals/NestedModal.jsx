import { useEffect, forwardRef } from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setTransform } from "../../../app/Slicers/localStates/themes";
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

const NestedModal = (
  { children, title = "Nested Modal", handleClose },
  ref
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTransform(true));
    ref.current.classList.add("hidden");

    return () => dispatch(setTransform(false));
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-[#0000009a] flex items-center justify-center z-[4000] modalScroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-[94%] sm:w-[80%] md:w-[48%] bg-bgLight dark:bg-[#020a15]
      shadow-lg rounded-xl"
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

export default forwardRef(NestedModal);
