import React from "react";
import { Typography, Box } from "@mui/material";
import Meal from "./Meal";

const SubCategory = ({ subCategory, content }) => {
  return (
    <Box>
      <Typography variant="h6" component="h3" className="capitalize my-6 text-lg font-handwriting">
        {subCategory}
      </Typography>
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 exl:grid-cols-6 gap-6">
        {content.length > 0
          ? content.map((item) => <Meal key={item.id} item={item} />)
          : null}
      </Box>
    </Box>
  );
};

export default SubCategory;
