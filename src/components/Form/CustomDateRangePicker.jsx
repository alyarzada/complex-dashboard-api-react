import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { useField } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const CustomDateRangePicker = ({ label, ...props }) => {
  const [value, setValue] = useState([null, null]);
  const [field, meta, helpers] = useField(props);

  useEffect(() => {
    helpers.setValue(value);
  }, [value]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Baslangic tarixi", end: "Bitme tarixi" }}
    >
      <DateRangePicker
        value={value}
        className="dark:text-text1"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  height: "50px",
                },
              }}
              {...startProps}
            />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  height: "50px",
                },
              }}
              {...endProps}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;
