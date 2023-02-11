import ReplyIcon from "@mui/icons-material/Reply";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box className="flex justify-between items-center gap-x-1 bg-bgLight dark:bg-[#404954] py-5 px-3 sm:px-6 rounded mt-2">
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ReplyIcon className="text-white dark:text-black" />}
        variant="contained"
        className="capitalize"
      >
        {t("Back")}
      </Button>
    </Box>
  );
};

export default GoBackButton;
