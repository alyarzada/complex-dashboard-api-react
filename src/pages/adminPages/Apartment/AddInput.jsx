import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomTextField from "../../../components/Form/CustomTextField";

export const AddNumber = () => {
  const { t } = useTranslation();
  return (
    <Box className="w-full px-3 my-3 md:w-1/2">
      <Box className="w-[30%]">
        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
          {t(["Photo"])}
        </Typography>
      </Box>
      <Box className="relative">
        <CustomTextField
          className="mb-0"
          label={t(["Choose file"])}
          name="date"
          adornments={true}
          endAdornmentIcon={
            <AddCircleOutlinedIcon className="cursor-pointer" />
          }
        />
        {/* <Button variant="contained" className="h-full top-0 right-0 absolute">
          <AddCircleOutlinedIcon />
        </Button> */}
      </Box>
      <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
        {" "}
        {t(["Size"])}: 1000px-710px
      </Typography>
    </Box>
  );
};

export const AddMail = () => {
  const { t } = useTranslation();
  return (
    <Box className="w-full px-3 my-3 md:w-1/2">
      <Box className="w-[30%]">
        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
          {t(["Photo"])}
        </Typography>
      </Box>
      <Box className="relative">
        <CustomTextField
          className="mb-0"
          label={t(["Choose file"])}
          name="date"
          type="number"
        />
        <Button variant="contained" className="h-full top-0 right-0 absolute">
          <AddCircleOutlinedIcon />
        </Button>
      </Box>
      <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
        {" "}
        {t(["Size"])}: 1000px-710px
      </Typography>
    </Box>
  );
};
