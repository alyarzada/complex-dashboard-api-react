import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";

const CustomSelect = ({
  options,
  label,
  defaultValue = "",
  errorMessage,
  variant,
  multiple = false,
  noTranslation,
  onlyValue,
  className,
  containerClassName,
  ...props
}) => {
  const [personName, setPersonName] = useState(defaultValue || []);
  const [field, meta, helpers] = useField(props);
  const { t } = useTranslation();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(value);
  };

  useEffect(() => {
    helpers.setValue(personName);
  }, [personName]);

  return (
    <Box className={containerClassName}>
      <FormControl
        fullWidth
        variant={variant}
        error={meta.error && meta.touched}
      >
        <InputLabel
          id={`${
            variant === "filled"
              ? "demo-simple-select-filled-label"
              : "demo-simple-select-label"
          }`}
        >
          {label}
        </InputLabel>
        <Select
          labelId={`${
            variant === "filled"
              ? "demo-simple-select-filled-label"
              : "demo-simple-select-label"
          }`}
          id={`${
            variant === "filled"
              ? "demo-simple-select-filled"
              : "demo-simple-select"
          }`}
          value={personName}
          label={label}
          onChange={handleChange}
          multiple={multiple}
          {...props}
        >
          {options?.length > 0
            ? options.map((option, index) => (
                <MenuItem key={index} value={onlyValue ? option.value : option}>
                  {noTranslation ? option.label : t([option.label])}
                </MenuItem>
              ))
            : null}
        </Select>
        {meta.error && meta.touched ? (
          <FormHelperText className="ml-0 mt-1">{errorMessage}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default CustomSelect;