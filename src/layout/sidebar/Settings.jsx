// Tunar and Fuad
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton } from "@mui/material";
import { setOpenedSettingBar } from "../../app/Slicers/themes";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingBar from "../header/SettingBar";

export const Settings = () => {
  const dispatch = useDispatch();
  const menuRef = useRef();
  const menuToggleRef = useRef();

  return (
    <Box>
      <IconButton ref={menuToggleRef} onClick={() => dispatch(setOpenedSettingBar(true))}>
        <SettingsOutlinedIcon className="animate-spin" />
      </IconButton>

      <SettingBar ref={menuToggleRef}/>
    </Box>
  );
};
