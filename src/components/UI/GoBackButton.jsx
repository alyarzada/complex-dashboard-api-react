import ReplyIcon from "@mui/icons-material/Reply";
import { Box, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    // <Box className="flex justify-between items-center gap-x-1 bg-bgLight dark:bg-[#194C5D] py-5 px-3 sm:px-6 rounded mt-2">
      <IconButton
        onClick={() => navigate(-1)}
          className="bg-[#C9B26D] fixed bottom-5 left-4 z-[9999] sizeLarge drop-shadow-lg"
          size="large"
          
      >
      <ReplyIcon className="text-white" />

      </IconButton>
    // </Box>
  );
};

export default GoBackButton;
