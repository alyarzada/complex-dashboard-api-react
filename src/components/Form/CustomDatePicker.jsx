import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { TextField, Box, FormHelperText } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomDatePicker = ({
  htmlFor,
  label,
  defaultValue,
  className,
  containerClassName,
  calendar,
  errorMessage,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const [date, setDate] = useState(defaultValue ? defaultValue : "");

  useEffect(() => {
    helpers.setValue(date);
  }, [date]);

  const dataStartHandler = (value) => {
    setDate(
      `${value.$y}-${
        value.$M.toString().length == 1 ? `0${value.$M + 1}` : value.$M
      }-${value.$D.toString().length == 1 ? `0${value.$D}` : value.$D}`
    );
  };

  return (
    <Box className={containerClassName}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          className={className}
          label={label}
          value={date}
          onChange={dataStartHandler}
          // inputFormat="YYYY/MM/DD"W
          inputFormat="DD/MM/YYYY"
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "28px",
                  paddingBottom: "29px",
                },
              }}
              {...params}
              error={meta.error && meta.touched}
            />
          )}
        />
        {meta.error && meta.touched ? (
          <FormHelperText className="text-red-500">
            {errorMessage}
          </FormHelperText>
        ) : null}
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDatePicker;
