import { useState } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Checkbox, Autocomplete, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const CustomSearchFilter = ({
  hidden1,
  hidden2,
  hidden3,
  flex,
  hiddenHeader,
}) => {
  const [inputValue, setInputValue] = useState(0);
  const { t } = useTranslation();

  const MTK = [
    { title: "Port Baku" },
    { title: "Test 1" },
    { title: "Test 2" },
  ];
  const K = [{ title: "Port Baku" }, { title: "Test 3" }, { title: "Test 4" }];
  const B = [{ title: "Port Baku" }, { title: "Test 5" }, { title: "Test 6" }];
  const M = [{ title: "Port Baku" }, { title: "Test 7" }, { title: "Test 8" }];
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Box className="w-full">
      <Box
        className={
          hiddenHeader
            ? "hidden"
            : "mb-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-[#C9B26D] dark:from-mainPrimary text-white dark:text-text2 text-[16px] capitalize dark:to-mainSecondary w-full"
        }
      >
        <FilterAltOutlinedIcon /> {t(["Select residents"])}
      </Box>
      <Box
        className={
          flex == true ? "lg:flex justify-between gap-3" : "flex flex-col gap-3"
        }
      >
        <Box
          className={
            flex == true
              ? "w-full mb-5"
              : "flex mb-5 w-full justify-between items-center"
          }
        >
          <Typography
            component="h5"
            className="text-textDark2 dark:text-text2 text-[16px]"
          >
            {t(["Housing cooperative"])}
          </Typography>
          <Autocomplete
            className={flex == true ? "w-full" : "w-[70%]"}
            onChange={() => {
              setInputValue(inputValue + 1);
              console.log(inputValue);
            }}
            multiple
            id="checkboxes-tags-demo"
            options={MTK}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
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
            style={{ width: 280 }}
            renderInput={(params) => (
              <TextField
                style={{ paddingTop: 6 }}
                {...params}
                label={t("Please select")}
                placeholder=""
              />
            )}
          />
        </Box>
        <Box className={hidden1 == true ? "hidden" : "w-full"}>
          <Box
            className={
              flex == true
                ? "w-full mb-5"
                : "flex mb-5 w-full justify-between items-center"
            }
          >
            <Typography
              component="h5"
              className=" text-textDark2 dark:text-text2 text-[16px]"
            >
              {t("Complex")}
            </Typography>
            <Autocomplete
              multiple
              className={flex ? " w-full" : "w-[70%]"}
              onChange={() => {
                setInputValue(inputValue + 1);
              }}
              id="checkboxes-tags-demo"
              disabled={inputValue >= 1 ? false : true}
              options={K}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
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
              style={{ width: 280 }}
              renderInput={(params) => (
                <TextField
                  style={{ paddingTop: 6 }}
                  {...params}
                  label={t("Please select")}
                  placeholder=""
                />
              )}
            />
          </Box>
        </Box>
        <Box className={hidden2 == true ? "hidden" : "w-full"}>
          <Box
            className={
              flex == true
                ? "w-full mb-5"
                : "flex mb-5 w-full justify-between items-center"
            }
          >
            <Typography
              component="h5"
              className=" text-textDark2 dark:text-text2 text-[16px]"
            >
              {t("Building")}
            </Typography>
            <Autocomplete
              className={flex ? " w-full" : "w-[70%]"}
              onChange={() => {
                setInputValue(inputValue + 1);
              }}
              multiple
              disabled={inputValue >= 2 ? false : true}
              id="checkboxes-tags-demo"
              options={B}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
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
              style={{ width: 280 }}
              renderInput={(params) => (
                <TextField
                  style={{ paddingTop: 6 }}
                  {...params}
                  label={t("Please select")}
                  placeholder=""
                />
              )}
            />
          </Box>
        </Box>
        <Box className={hidden3 == true ? "hidden" : "w-full mb-5"}>
          <Box
            className={
              flex == true
                ? "w-full mb-5"
                : "flex mb-5 w-full justify-between items-center"
            }
          >
            <Typography
              component="h5"
              className="text-textDark2 dark:text-text2 text-[16px]"
            >
              {t("Apartment")}
            </Typography>
            <Autocomplete
              className={flex ? " w-full" : "w-[70%]"}
              multiple
              disabled={inputValue >= 3 ? false : true}
              id="checkboxes-tags-demo"
              options={M}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
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
              style={{ width: 280 }}
              renderInput={(params) => (
                <TextField
                  style={{ paddingTop: 6 }}
                  {...params}
                  label={t("Please select")}
                  placeholder=""
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomSearchFilter;
