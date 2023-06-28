import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import FilterMenuItem from "./FilterMenuItem";

const FilterMenu = ({ setOpenDropdown }) => {
  const { categories } = useSelector((state) => state.restaurantMenu);
  const [categorys, setCategorys] = useState(
    categories.reduce(
      (values, item) => {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    )
  );

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      className="absolute top-12 left-0 z-50 lg:h-[40vh] text-text1 drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain dark:text-black w-full rounded-xl p-3"
    >
      <Typography variant="h6" component="h1" className="text-text1">
        Menu
      </Typography>
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 exl:grid-cols-6">
        {categorys.map((category, index) => (
          <FilterMenuItem
            key={index}
            category={category}
            setOpenDropdown={setOpenDropdown}
          />
        ))}
      </Box>
    </motion.div>
  );
};

export default FilterMenu;
