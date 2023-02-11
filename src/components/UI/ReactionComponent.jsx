import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Wow from "../../components/UI/ReactionEmojies/Wow";
import Angry from "../../components/UI/ReactionEmojies/Angry";
import Love from "../../components/UI/ReactionEmojies/Love";
import Sad from "../../components/UI/ReactionEmojies/Sad";
import Haha from "../../components/UI/ReactionEmojies/Haha";
import Like from "../../components/UI/ReactionEmojies/Like";
import Reaction from "../../components/UI/ReactionEmojies/Reaction";

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
    emoji: <Like />,
    name: "like",
  },
  {
    id: 2,
    emoji: <Love />,
    name: "love",
  },
  {
    id: 3,
    emoji: <Haha />,
    name: "haha",
  },
  {
    id: 4,
    emoji: <Wow />,
    name: "wow",
  },
  {
    id: 5,
    emoji: <Sad />,
    name: "sad",
  },
  {
    id: 6,
    emoji: <Angry />,
    name: "angry",
  },
];

const ReactionComponent = ({ peer }) => {
  const [active, setActive] = useState(false);
  const [like, setLike] = useState(false);
  return (
    <Box className="flex items-center absolute -top-5">
      <Box className="m-auto">
        <Box className="relative left-24 inline-flex items-center justify-center text-center w-[100px] font-semibold color-[#606770] fill-[#606770] py-[15px] px-[20px] rounded-[100px] shadow-lg cursor-pointer after:absolute after:content-['']">
          <motion.div
          className="absolute w-[350px] p-[10px] rounded-[100px] bg-white shadow-lg flex justify-between items-center"
          initial="hidden"
          // animate={isHover ? "visible" : "hidden"}
          variants={list}
          >
            {emojies.map((emoji) => (
              <Reaction
                onClick={() => setActive(emoji.id)}
                key={emoji.id}
                name={emoji.name}
              >
                {emoji.emoji}
              </Reaction>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ReactionComponent;
