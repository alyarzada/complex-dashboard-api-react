import { useEffect } from "react";
import Header from "../../components/UI/Header";
import Body from "./Body";
import { Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import { getInformations } from "../../app/Slicers/dataFetching/infoTable";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const InfoTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getInformations({
        token: Cookies.get("token"),
      })
    );
  }, []);

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
