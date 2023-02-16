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
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import CustomComplexSelection from "../../../../components/UI/CustomComplexSelection";

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
                  <Button startIcon={<ReplyOutlinedIcon />} variant="contained">
                    {t("Back")}
                  </Button>
                  <Button
                    startIcon={<TaskAltOutlinedIcon />}
                    variant="contained"
                  >
                    {t("Submit")}
                  </Button>
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
