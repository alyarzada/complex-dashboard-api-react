import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate(-1)}
      className="bg-[#C9B26D] hidden md:fixed bottom-5 left-4 z-[9999] sizeLarge drop-shadow-lg"
      size="large"
    >
      <ReplyIcon className="text-white" />
    </IconButton>
  );
};

export default GoBackButton;
