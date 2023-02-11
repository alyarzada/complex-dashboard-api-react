import React from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Room = () => {
  return (
    <Box className="h-screen overflow-hidden">
      <Box className="bg-white cursor-pointer  h-[60px] ml-[400px] p-3 flex items-center gap-x-3">
        <IconButton className="text-black">
          <ReplyIcon />
        </IconButton>
        <Avatar />
        <Box>
          <Typography className="font-semibold">Rashad Huseynov</Typography>
          <Typography className="text-xs text-slate-500">
            Son gorunme 1 gun evvel
          </Typography>
        </Box>
      </Box>

      <Box className="w-full bg-image-chat h-full ml-[400px] p-3">
        <Box className="w-[200px] absolute top-24 right-5 flex gap-x-2">
          <Box className="rounded-xl bg-green-300 px-2 py-1">
            <Typography className="text-sm">Selam, Serkan ben</Typography>
            <Box className="flex justify-end gap-x-1 mt-1">
              <Typography className="text-xs">19:45</Typography>
              <DoneAllIcon className="text-sm" />
            </Box>
          </Box>
          <Avatar />
        </Box>
      </Box>

      <Box className="flex gap-x-3 items-center absolute bottom-[30px] rounded-[40px] right-[70px] w-[1000px] p-3 bg-white">
        <IconButton className="text-blue-400">
          <KeyboardVoiceIcon />
        </IconButton>
        <input
          className="w-full outline-none rounded-[40px] bg-white border p-3"
          placeholder="Mesaj yazin"
          type="text"
        />
        <IconButton className="text-blue-400">
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton className="text-blue-400">
          <AttachFileIcon />
        </IconButton>
        <IconButton className="text-slate-400">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Room;
