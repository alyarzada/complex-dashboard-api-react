import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

const names = [
  'Complex Admin',
  'Complex Accountant',
  'Complex Employee',
  'Restourant admin',
  
];

export default function MultipleSelectNative() {
  const [personName, setPersonName] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const { t } = useTranslation();

  return (
    <Box>
      <FormControl className="w-full">
        <InputLabel shrink htmlFor="select-multiple-native">
          {t("Role")}
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          onChange={handleChangeMultiple}
          label={t("Role")}
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}