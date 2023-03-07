import { Box } from "@mui/material";
import Header from "../../components/UI/Header";
import { useTranslation } from "react-i18next";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import ApartmentIcon from '@mui/icons-material/Apartment';

const MTKUserCreate = () => {
  const { t } = useTranslation();
  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Create new"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"Building"}
        to="building"
        icon={
          <ApartmentIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="my-4 py-4 px-6 rounded  drop-shadow-lg bg-bgLights dark:bg-bgMain w-full">
        asdas
      </Box>
    </Box>
  );
};

export default MTKUserCreate;
