import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterMenu, getAllMenu } from "../../app/Slicers/restaurantMenu";

const FilterMenuItem = ({ category, setOpenDropdown }) => {
  const dispatch = useDispatch();

  const filterMenuHandler = () => {
    if (category === "all") {
      dispatch(getAllMenu());
    } else {
      dispatch(filterMenu(category));
    }
    setOpenDropdown(false);
  };

  return (
    <Box className="px-4 py-2">
      <Typography
        className="cursor-pointer bg-logoColor text-white drop-shadow-lg p-2 rounded text-center uppercase font-handwriting"
        onClick={() => filterMenuHandler()}
      >
        {category}
      </Typography>
    </Box>
  );
};

export default FilterMenuItem;
