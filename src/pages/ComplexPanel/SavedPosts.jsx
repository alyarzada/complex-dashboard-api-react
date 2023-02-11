import React, { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const SavedPosts = () => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      SavedPosts
    </motion.div>
  );
};

export default SavedPosts;
