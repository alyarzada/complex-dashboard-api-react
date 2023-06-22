import { useState, useEffect } from "react";
import { useField } from "formik";
import { TextField, Box, FormHelperText } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const CustomDatePicker = ({
  htmlFor,
  label,
  defaultValue,
  className,
  calendar,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [date, setDate] = useState(defaultValue ? defaultValue : "");
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    helpers.setValue(date);
  }, [date, helpers]);

  const dataStartHandler = (value) => {
    setDate(
      `${value.$y}-${
        value.$M.toString().length == 1 ? `0${value.$M + 1}` : value.$M
      }-${value.$D.toString().length == 1 ? `0${value.$D}` : value.$D}`
    );
  };
  return (
    <Box className={`mb-6 ${className}`}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          className="w-full"
          label={label}
          value={date}
          // open={open}
          onChange={dataStartHandler}
          inputFormat="DD/MM/YYYY"
          renderInput={(params) => (
            <TextField
              // onFocus={() => setOpen(true)}
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
          <FormHelperText className="text-red-500 ml-3">
            Tarix seçin!
          </FormHelperText>
        ) : null}
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDatePicker;
