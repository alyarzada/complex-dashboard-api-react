import { Box } from "@mui/material";
import { motion } from "framer-motion";
import EachEmoji from "./EachEmoji";

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

const emojies = [
  {
    id: 1,
    image: (
      <img
        src="https://media.tenor.com/_e4JAx0iHS0AAAAi/facebook-emoji.gif"
        alt=""
      />
    ),
    name: "like",
  },
  {
    id: 2,
    image: (
      <img
        src="https://media.tenor.com/RYibGej0GvcAAAAj/facebook-emoji.gif"
        alt=""
      />
    ),
    name: "love",
  },
  {
    id: 3,
    image: (
      <img
        src="https://media1.giphy.com/media/rmQqP0L0lwsozBydWk/giphy.gif?cid=6c09b952bd922561a1b6df62cdf54fd6a64095c3993e7c1e&rid=giphy.gif&ct=s"
        alt=""
      />
    ),
    name: "haha",
  },
  {
    id: 4,
    image: (
      <img
        src="https://thumbs.gfycat.com/DimSeparateHoneybadger-size_restricted.gif"
        alt=""
      />
    ),
    name: "wow",
  },
  {
    id: 5,
    image: (
      <img
        src="https://media.tenor.com/wXf73PxlrxgAAAAj/discord-discordgifemoji.gif"
        alt=""
      />
    ),
    name: "sad",
  },
  {
    id: 6,
    image: (
      <img
        src="https://i.pinimg.com/originals/f5/5c/14/f55c14873f7dd22d732eadb33bd1a63c.gif"
        alt=""
      />
    ),
    name: "angry",
  },
];

const EmojiesContainer = () => {
  return (
    <Box className="flex items-center absolute -top-5">
      <Box className="m-auto">
        <Box className="relative left-24 inline-flex items-center justify-center text-center w-[100px] font-semibold color-[#606770] fill-[#606770] py-[15px] px-[20px] rounded-[100px] shadow-lg cursor-pointer after:absolute after:content-['']">
          <motion.div
            className="absolute w-[350px] p-[10px] rounded-[100px] bg-white shadow-lg flex justify-between items-center"
            initial="hidden"
            variants={list}
          >
            {emojies.map((emoji) => (
              <EachEmoji key={emoji.id} {...emoji}>
                {emoji.image}
              </EachEmoji>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default EmojiesContainer;
