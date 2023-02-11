import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { mockData } from "../../../data/apartment-owner/communal-services";
import CommunalServicesPanel from "../../ControlPanel/CommunalServicesPanel";
import GoBackButton from "../../../components/UI/GoBackButton";
import Header from "../../../components/UI/Header";
import ViewComfyAltOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const CommunalServices = () => {
  const { t } = useTranslation();
  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: "Communal Services",
          icon: ViewComfyAltOutlinedIcon,
        }}
      />

      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 exl:grid-cols-5 gap-4">
        {mockData.map((item) => (
          <CommunalServicesPanel key={item.id} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default CommunalServices;
