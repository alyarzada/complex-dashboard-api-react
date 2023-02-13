import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

const NativePickers = ({
  label = "Date",
  className = "w-full mb-6",
  defaultValue,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const [data, setData] = useState(defaultValue ? defaultValue : "");

  const handleChange = ({ target: { value } }) => {
    setData(value);
  };

  useEffect(() => {
    helpers.setValue(data);
  }, [data]);

  return (
    <TextField
      id="datetime-local"
      label={t([label])}
      type="datetime-local"
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        "& .MuiInputBase-input": {
          padding: "26.5px 14px",
          color: "#fff",
        },
      }}
      className={className}
      onChange={handleChange}
      defaultValue={defaultValue}
      {...props}
    />
  );
};

export default NativePickers;
