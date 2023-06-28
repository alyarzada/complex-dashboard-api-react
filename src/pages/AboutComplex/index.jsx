import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import Header from "../../components/UI/Header";
import Body from "./Body";
import InfoIcon from "@mui/icons-material/Info";

const InfoTable = () => {
  const { t } = useTranslation();

  return (
    <Box className="w-full">
      <Header
        currentPage={{ title: t(["Information desk"]), icon: InfoIcon }}
      />
      <Body />
    </Box>
  );
};

export default InfoTable;
