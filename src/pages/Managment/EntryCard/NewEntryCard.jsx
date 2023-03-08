import React from "react";
import { useSelector } from "react-redux";
import CustomSelect from "../../../components/Form/CustomSelect";
import {
  Box,
  Stack,
  Typography,
  Breadcrumbs,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import CustomTextField from "../../../components/Form/CustomTextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import CustomComplexSelection from "../../../components/UI/CustomComplexSelection";
import { useTranslation } from "react-i18next";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import BackButton from "../../../components/UI/Buttons/BackButton";
import SuccessButton from "../../../components/UI/Buttons/SuccessButton";
import {useScrollToUp} from "../../../hooks/useScrollToUp";

const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
  { label: "Crescent", value: "crescent" },
];

const NewEntryCard = () => {
  useScrollToUp();
  const { t } = useTranslation();
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const navigate = useNavigate();


  return (
    <Box>
      <Box className="flex justify-between mb-6">
        <h4 className="text-textDark2 dark:text-white font-medium">
          {t("giriskarti")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-logoColor" />
              }
              aria-label="breadcrumb"
            >
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                {t(["Home"])}
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris kartlari
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris karti
              </Link>
              <Typography underline="hover" key="2" className="text-[#aab8c5]">
                Yenisini yaradin
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Box className="bg-bgLight dark:bg-bgMain">
        <Formik
          initialValues={{
            request: "",
            newCard: "",
            amount: "",
            comment: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <Box className="p-6">
                {role_id === 4 ? <CustomComplexSelection /> : null}
                <CustomTextField
                  readOnly
                  label={t(["Request"])}
                  name="request"
                />
                <CustomSelect
                  name="newCard"
                  options={optionsProj}
                  label="Yeni kart"
                />
                <CustomTextField name="amount" label="Sayi" />
                <CustomTextField name="comment" label="Serhiniz" />
              </Box>
              <FormControl className="px-6 mb-6">
                <FormLabel id="demo-radio-buttons-group-label">
                  Status
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="hazir"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="hazir"
                    control={<Radio />}
                    label="Hazir"
                    sx={{ color: "text.secondary" }}
                  />
                  <FormControlLabel
                    value="Gozleme"
                    control={<Radio />}
                    label="Gozleme"
                    sx={{ color: "text.secondary" }}
                  />
                </RadioGroup>
              </FormControl>
              <Stack
                className="px-6 py-4"
                direction="row"

              >
                <SuccessButton
                  variant="contained"
                  startIcon=<TaskAltOutlinedIcon />
                >
                  {t("Submit")}
                </SuccessButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default NewEntryCard;
