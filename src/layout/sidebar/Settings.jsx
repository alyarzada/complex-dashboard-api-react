import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Tooltip } from "@mui/material";
import { setOpenedSettingBar } from "../../app/Slicers/localStates/themes";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingBar from "../header/SettingBar";
import { useTranslation } from "react-i18next";

export const Settings = () => {
  const dispatch = useDispatch();
  const menuToggleRef = useRef();
  const { t } = useTranslation();

  return (
    <Box>
      <Tooltip title={t("Adjustments")} arrow>
        <IconButton
          ref={menuToggleRef}
          onClick={() => dispatch(setOpenedSettingBar(true))}
        >
          <SettingsOutlinedIcon className="animate-spin" />
        </IconButton>
      </Tooltip>
      <SettingBar ref={menuToggleRef} />
    </Box>
  );
};
