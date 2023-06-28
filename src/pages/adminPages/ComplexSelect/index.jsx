import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import SuccessButton from "../../../components/UI/Buttons/SuccessButton";
import Header from "../../../components/UI/Header";

const ComplexSelect = () => {
  const [age, setAge] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Box>
      <Header currentPage={{ title: "Select Complex", icon: NewspaperIcon }} />
      <Box className="my-4 rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Box className="py-4 pl-6 px-4 flex flex-wrap">
          <Box className="w-full lg:w-[48%]  mr-2">
            <Typography className=" text-white py-1 px-4 rounded">
              {t("Housing cooperative")}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("Please select")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label={t("Please select")}
                onChange={handleChange}
              >
                <MenuItem value={1}>{t("PORT BAKU")}</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="w-full lg:w-[48%] mr-2">
            <Typography className=" text-white py-1 px-4 rounded">
              {t("Complex")}
            </Typography>

            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("Please select")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label={t("Please select")}
                onChange={handleChange}
              >
                <MenuItem value={1}>{t("PORT BAKU")}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="ml-8 pb-4">
          <SuccessButton
            variant="contained"
            startIcon={<CheckCircleOutlineIcon />}
            onClick={() => navigate("/complexpanel")}
          >
            {t("Next")}
          </SuccessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ComplexSelect;
