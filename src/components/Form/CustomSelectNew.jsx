import { Checkbox, Autocomplete, TextField } from "@mui/material";
import { CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";
import { useField } from "formik";

const CustomSelectNew = ({ className, options, multiple, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const icon = <CheckBoxOutlineBlank fontSize="small" />;
  const checkedIcon = <CheckBox fontSize="small" />;

  return (
    <Autocomplete
      className={`${className} mt-2`}
      multiple={multiple}
      id="checkboxes-tags-demo"
      options={options?.length > 0 ? options : []}
      disableCloseOnSelect
      getOptionLabel={(option) => {
        helpers.setValue(option.title);
        return option.title;
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          style={{ paddingTop: 6 }}
          {...params}
          label="Zəhmət olmasa seçin"
        />
      )}
      {...props}
    />
  );
};

export default CustomSelectNew;
