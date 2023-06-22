import { forwardRef, useEffect, useRef } from "react";
import {
  setLight,
  setBoxed,
  setLeftLight,
  setScrollable,
} from "../../app/Slicers/localStates/themes";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedSettingBar } from "../../app/Slicers/localStates/themes";
import { setDraggable } from "../../app/Slicers/localStates/themes";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  IconButton,
  Switch,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useTranslation } from "react-i18next";
import ResetButton from "../../components/UI/Buttons/ResetButton";
import CustomSwitch from "../../components/Form/CustomSwitch";

const SettingBar = (props, ref) => {
  const { openedSettingBar } = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const barRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClose = (e) => {
      if (
        !e?.composedPath()?.includes(barRef.current) &&
        !e?.composedPath()?.includes(ref.current)
      ) {
        dispatch(setOpenedSettingBar(false));
      }
    };
    document.addEventListener("mousedown", handleClose);

    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  return (
    <Box
      ref={barRef}
      className={`${
        openedSettingBar ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 fixed rounded-bl-lg rounded-tl-lg z-20 justify-between top-0 right-0 w-[260px] sm:w-[300px] bg-[#37404A] h-screen shadow-shadowSettings `}
    >
      <Box className="bg-[#313A46] dark:bg-logoColor rounded-tl-lg flex items-center justify-between px-5 py-6">
        <h5 className="text-white text-[.9rem] font-semibold">
          {t("Adjustments")}
        </h5>
        <IconButton onClick={() => dispatch(setOpenedSettingBar(false))}>
          <HighlightOffRoundedIcon className="text-white" />
        </IconButton>
      </Box>

      <Box className="rounded-bl-lg settingsContainer bg-bgLight dark:bg-bgMain h-full py-10  overflow-y-auto">
        <Box className="mb-6 mx-4 mt-0 p-3 rounded bg-[#cbc8bd]">
          <Typography className="text-sm">
            {t("Customize the overall color scheme, sidebar menu, etc.")}
          </Typography>
        </Box>

        <Box className="px-4 mb-6 ">
          <h5 className="text-textDark dark:text-text3 text-[.9rem] font-bold">
            {t("Color Scheme")}
          </h5>
          <Divider className="my-2" />
          <CustomSwitch
            label="Light Mode"
            onChange={(param) => dispatch(setLight(param))}
          />
          <Divider className="my-2" />
          <CustomSwitch
            label="Light Mode"
            onChange={(param) => dispatch(setLeftLight(param))}
          />
          <Divider className="my-2" />
          <CustomSwitch
            label={t("Displacement of panels")}
            onChange={(param) => dispatch(setDraggable(param))}
          />
        </Box>

        <Box className="px-4 mb-10">
          <ResetButton variant="contained">{t("Reset to Default")}</ResetButton>
        </Box>
      </Box>
    </Box>
  );
};

export default forwardRef(SettingBar);
