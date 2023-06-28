import { Box } from "@mui/material";
import Room from "./Room";
import Inbox from "./Inbox";

const Chat = () => {
  return (
    <Box>
      <Inbox />
      <Room />
    </Box>
  );
};

export default Chat;
