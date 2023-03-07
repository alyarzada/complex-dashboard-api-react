import { Box } from "@mui/material";
import { SyncLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <Box className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-bgLight dark:bg-bgMain flex items-center justify-center">
      <SyncLoader color="#C9B26D" />
    </Box>
  );
};

export default LoadingComponent;
