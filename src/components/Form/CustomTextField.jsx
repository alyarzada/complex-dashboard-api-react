import { useEffect, useState } from "react";
import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { useField } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputMask from "react-input-mask";

const CustomTextField = ({
  component,
  multiline,
  label,
  sx,
  className = "mb-6",
  number = false,
  regexp = false,
  mask,
  masseur,
  readyAnswer,
  endAdornment,
  startAdornment,
  startIcon,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (masseur) {
      helpers.setValue(masseur.value);
    } else if (readyAnswer) {
      helpers.setValue(readyAnswer);
    }
  }, [masseur]);

  useEffect(() => {
    if (readyAnswer) {
      helpers.setValue(readyAnswer);
    }
  }, [readyAnswer]);

  return (
    <Box className={`${className}`} sx={sx}>
      {!regexp ? (
        <TextField
          className="w-full"
          autoComplete="off"
          id="outlined-basic"
          multiline={multiline}
          label={label}
          size="small"
          value={readyAnswer && readyAnswer}
          error={meta.error && meta.touched}
          onChange={(e) =>
            number
              ? helpers.setValue(Number(e.target.value))
              : helpers.setValue(e.target.value)
          }
          sx={{
            "& .MuiInputBase-input": {
              height: "40px",
            },
          }}
          type={endAdornment ? (showPassword ? "text" : "password") : "text"}
          InputProps={
            endAdornment
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : startAdornment
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton> */}
                      {startIcon}
                    </InputAdornment>
                  ),
                }
              : null
          }
          {...props}
        />
      ) : (
        <InputMask mask={mask}>
          {(inputProps) => (
            <TextField
              className={`w-full ${className}`}
              autoComplete="off"
              id="outlined-basic"
              multiline={multiline}
              label={label}
              size="small"
              error={meta.error && meta.touched}
              onChange={(e) =>
                number
                  ? helpers.setValue(Number(e.target.value))
                  : helpers.setValue(e.target.value)
              }
              sx={{
                "& .MuiInputBase-input": {
                  height: "40px",
                },
              }}
              {...props}
              {...inputProps}
            />
          )}
        </InputMask>
      )}
    </Box>
  );
};

export default CustomTextField;
