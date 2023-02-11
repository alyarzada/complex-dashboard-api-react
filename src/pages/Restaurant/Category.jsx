import React from "react";
import { Box } from "@mui/material";
import SubCategory from "./SubCategory";
import Meal from "./Meal";
import { motion } from "framer-motion";

const Category = ({ category, subCategory, content }) => {
  return (
    <Box className="text-text1">
      <Box className="my-8 text-center">
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="capitalize font-handwriting text-[26px]"
        >
          {category}
        </motion.p>
      </Box>

      <Box
        className={`${
          subCategory
            ? ""
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 exl:grid-cols-6 gap-6"
        }`}
      >
        {subCategory
          ? content.map((item) => <SubCategory key={item.id} {...item} />)
          : content.map((item) => <Meal key={item.id} item={item} />)}
      </Box>
    </Box>
  );
};

export default Category;
