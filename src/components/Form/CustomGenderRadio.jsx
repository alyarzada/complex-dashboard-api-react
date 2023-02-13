import { useState, useEffect } from "react";
import { useField } from "formik";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomGenderRadio = (props) => {
  const [field, meta, helpers] = useField(props);
  const [value, setValue] = useState("female");
  const { t } = useTranslation();

  useEffect(() => {
    helpers.setValue(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl className="text-text1">
      <FormLabel id="demo-controlled-radio-buttons-group">
        {props.label}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label={t("Female")}
        />
        <FormControlLabel value="male" control={<Radio />} label={t("Male")} />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomGenderRadio;
