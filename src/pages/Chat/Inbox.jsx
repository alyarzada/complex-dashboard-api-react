import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const users = [
  {
    id: 1,
    name: "Demo User 1",
    message: "Selam, Erkan ben",
  },
  {
    id: 2,
    name: "Demo User 1",
    message: "Selam, Erkan ben",
  },
  {
    id: 3,
    name: "Demo User 1",
    message: "Selam, Erkan ben",
  },
  {
    id: 4,
    name: "Demo User 1",
    message: "Selam, Erkan ben",
  },
  {
    id: 5,
    name: "Demo User 1",
    message: "Selam, Erkan ben",
  },
];

const Inbox = () => {
  return (
    <Box className="h-screen fixed overflow-auto bg-white w-[400px] border-r">
      <Box className="fixed w-[400px] h-[50px] p-3">
        <input
          className="w-full py-2 px-4 rounded-[18px] border outline-none focus:border-slate-400"
          type="search"
          placeholder="Axtar..."
          name=""
          id=""
        />
      </Box>
      <Box className="mt-[60px] p-3">
        {users.map((user) => (
          <Box
            key={user.id}
            className={`flex cursor-pointer gap-x-2 mb-4 rounded-lg p-2 ${
              user.id === 1 && "bg-blue-500"
            }`}
          >
            <Avatar />
            <Box className="flex-1">
              <Typography className="text-sm">{user.name}</Typography>
              <Typography className="text-xs">{user.message}</Typography>
            </Box>
            <Typography className="text-xs">19:45</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Inbox;