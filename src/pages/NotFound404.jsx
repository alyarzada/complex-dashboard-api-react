import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <Box className="bg-bgLight dark:bg-bgMain w-full h-screen flex flex-col items-center justify-center">
      <Typography variant="h6" component="h1" className="text-text1 mb-1">
        Page Not Found
      </Typography>
      <Button
        varian="contained"
        onClick={() => navigate("/login")}
        className="text-text1 text-xs capitalize bg-rose-600 rounded"
      >
        Go to Login
      </Button>
    </Box>
  );
};

export default NotFound404;
