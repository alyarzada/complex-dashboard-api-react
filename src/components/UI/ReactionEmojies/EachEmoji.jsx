import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../app/Slicers/dataFetching/emoji";

export const list = {
  visible: {
    opacity: 1,
    y: 0,
    transformOrigin: "50%",
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    transformOrigin: "50%",
    scale: 0,
  },
};

const EachEmoji = ({ name, id, image, children }) => {
  const dispatch = useDispatch();
  const { emoji } = useSelector((state) => state.emojies);

  return (
    <motion.div variants={list}>
      <Box
        className={`relative w-[45px] h-[45px] rounded-1/2 transition-all origin-center cursor-pointer hover:scale-150 hover:duration-150 after:content-[${name}] after:absolute after:-top-[25px] after:left-1/2 after:-translate-x-1/2 p-[5px] text-[12px] text-[#606770] rounded-[5px] capitalize font-semibold`}
        data-reaction-name={name}
        onClick={() => dispatch(setEmoji({ id, name, image }))}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default EachEmoji;
