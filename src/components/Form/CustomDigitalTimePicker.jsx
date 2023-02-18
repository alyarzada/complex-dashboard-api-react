import { useEffect, useState } from "react";
import { useField } from "formik";
import { TextField, FormHelperText, Box } from "@mui/material";

const CustomDigitalTimePicker = ({
  className,
  containerClassName,
  errorMessage,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [date, setDate] = useState("");

  useEffect(() => {
    helpers.setValue(date);
  }, [date]);

  const dataStartHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <Box className={containerClassName}>
      <TextField
        sx={{
          "& .MuiInputBase-input": {
            height: "50px",
            // backgroundImage:
            //   "linear-gradient(rgba(255, 255, 255, 0.12), rgba(255,255, 255, 0.12))",
            // backgroundColor: "#121212",
          },
        }}
        id="time"
        type="time"
        value={date}
        defaultValue={null}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        onChange={dataStartHandler}
        error={meta.error && meta.touched}
        className={className}
        {...props}
      />
      {meta.error && meta.touched ? (
        <FormHelperText className="text-red-500">{errorMessage}</FormHelperText>
      ) : null}
    </Box>
  );
};

export default CustomDigitalTimePicker;
