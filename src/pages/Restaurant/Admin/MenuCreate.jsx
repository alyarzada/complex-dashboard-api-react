import { Box, Stack, Typography, Button, Input } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../../../components/UI/Header";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SuccessButton from "../../../components/UI/Buttons/SuccessButton";
import { Formik, Form } from "formik";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomFile from "../../../components/Form/CustomFile";
import OutlinedInput from "@mui/material/OutlinedInput";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const MenuCreate = () => {
  const { t } = useTranslation();

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const photoInputLabels = [
    {
      id: 1,
      label: "No File Choosen",
    },
    {
      id: 2,
      label: "No File Choosen",
    },
    {
      id: 3,
      label: "No File Choosen",
    },
    {
      id: 4,
      label: "No File Choosen",
    },
  ];

  return (
    <div>
      <Header
        currentPage={{
          title: "Create new",
          icon: IndeterminateCheckBoxOutlinedIcon,
        }}
        extra={t(["Menu"])}
        to="menucategories"
        icon={
          <IndeterminateCheckBoxOutlinedIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-bgMain w-full">
        <Box>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            className="mb-4"
          >
            <Typography className="text-[#AAB8C5] pb-2">
              {t(["Category"])}
            </Typography>
            <FormControl sx={{ width: "70%" }}>
              <InputLabel id="demo-multiple-name-label">
                {t(["Please select"])}
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                input={<OutlinedInput label="Name" />}
              >
                {names}
              </Select>
            </FormControl>
          </Stack>
          <Formik
            initialValues={{
              requestform_type: "",
              requestform_department: [],
              requestform_dep_employess: [],
              title: "",
              message: "",
            }}
          >
            <Form>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] ">
                  {t(["Menu name Azerbaijan"])}
                </Typography>
                <CustomTextField
                  className="w-[70%]"
                  label={t(["Enter the menu name in Azerbaijani language"])}
                />
              </Stack>

              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] ">
                  {t(["Menu name Russian"])}
                </Typography>
                <CustomTextField
                  className="w-[70%]"
                  label={t(["Enter the menu name in Russian language"])}
                />
              </Stack>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] ">
                  {t(["Menu name English"])}
                </Typography>
                <CustomTextField
                  className="w-[70%]"
                  label={t(["Enter the menu name in English language"])}
                />
              </Stack>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] ">
                  {t(["Price"])}(AZN)
                </Typography>
                <CustomTextField className="w-[70%]" label={t(["Price"])} />
              </Stack>

              <Box className="w-full flex-wrap md:flex">
                <Box className="mb-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-[#C9B26D]  text-white dark:text-text2 text-[16px] capitalize w-full">
                  <PhotoSizeSelectActualOutlinedIcon /> {t(["Photos"])}
                </Box>
                {photoInputLabels.map((item) => {
                  return (
                    <Box className="w-full  my-3 md:w-1/2">
                      <Box className="w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                          {t(["Photo"])} {item.id}
                        </Typography>
                      </Box>
                      <Box className="flex  items-center rounded bg-bgLight drop-shadow-lg dark:bg-bgMain font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize w-full">
                        <Button className="capitalize" variant="contained">
                          <CustomFile
                            className="mb-0"
                            title={t(["Choose file"])}
                            name="date"
                          />
                        </Button>
                        <Typography className="ml-3">
                          {t([item.label])}
                        </Typography>
                      </Box>
                      <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                        {" "}
                        {t(["Size"])}: 1000px-710px
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <Box>
                <Box className="mb-7 mt-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-[#C9B26D] dark:from-mainPrimary text-white dark:text-text2 text-[16px] capitalize dark:to-mainSecondary w-full">
                  <AccountCircleOutlinedIcon />{" "}
                  {t(["About the menu [Azerbaijan]"])}
                </Box>
                <CustomTextField
                  className="w-full"
                  label={t([
                    "Enter information about the content of the menu in Azerbaijani",
                  ])}
                  multiline
                  rows={5}
                />
              </Box>
              <Box>
                <Box className="mb-7 mt-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-[#C9B26D] dark:from-mainPrimary text-white dark:text-text2 text-[16px] capitalize dark:to-mainSecondary w-full">
                  <AccountCircleOutlinedIcon /> {t(["About the menu [Rus]"])}
                </Box>
                <CustomTextField
                  className="w-full"
                  label={t([
                    "Enter information about the content of the menu in Russian",
                  ])}
                  multiline
                  rows={5}
                />
              </Box>
              <Box>
                <Box className="mb-7 mt-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-[#C9B26D] dark:from-mainPrimary text-white dark:text-text2 text-[16px] capitalize dark:to-mainSecondary w-full">
                  <AccountCircleOutlinedIcon />{" "}
                  {t(["About the menu [English]"])}
                </Box>
                <CustomTextField
                  className="w-full"
                  label={t([
                    "Enter information about the content of the menu in English",
                  ])}
                  multiline
                  rows={5}
                />
              </Box>
            </Form>
          </Formik>
        </Box>
        <Box className="flex justify-end mt-4">
          <SuccessButton variant="contained">{t(["Create"])}</SuccessButton>
        </Box>
      </Box>
    </div>
  );
};

export default MenuCreate;
