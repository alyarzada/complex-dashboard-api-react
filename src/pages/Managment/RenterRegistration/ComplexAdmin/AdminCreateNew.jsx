import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
} from "@mui/material";
import Header from "../../../../components/UI/Header";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import CustomTextField from "../../../../components/Form/CustomTextField";
import CustomDateRangePicker from "../../../../components/Form/CustomDateRangePicker";
import CustomSelect from "../../../../components/Form/CustomSelect";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CustomComplexSelection from "../../../../components/UI/CustomComplexSelection";
import BackButton from "../../../../components/UI/Buttons/BackButton";
import SuccessButton from "../../../../components/UI/Buttons/SuccessButton";
import { useNavigate } from "react-router-dom";

const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
  { label: "Crescent", value: "crescent" },
];

const AdminCreateNew = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      <Header
        currentPage={{
          title: t(["Tenant Registration"]),
          icon: PersonAddAltOutlinedIcon,
        }}
      />
      <Box className="my-4 rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Box className="p-6">
          <CustomComplexSelection />
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
                <Box className="">
                  <CustomTextField
                    readOnly
                    label={t(["Request"])}
                    name="request"
                  />
                  <Box className="mb-6">
                    <CustomDateRangePicker />
                  </Box>
                  <CustomSelect
                    name="newCard"
                    options={optionsProj}
                    label={t(["New card"])}
                  />
                  <CustomTextField name="amount" label={t(["Count"])} />
                  <CustomTextField name="comment" label={t(["Your comment"])} />
                </Box>
                <FormControl className="mb-6">
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
                  className="bg-slate-600 px-6 py-4"
                  direction="row"
                  justifyContent="space-between"
                >
                  <BackButton
                    variant="contained"
                    startIcon=<ReplyOutlinedIcon />
                    margin="m-0"
                    onClick={() => navigate(-1)}
                  >
                    {t("Back")}
                  </BackButton>
                  <SuccessButton
                    variant="contained"
                    startIcon=<TaskAltOutlinedIcon />
                    type="submit"
                  >
                    {t("Submit")}
                  </SuccessButton>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminCreateNew;
