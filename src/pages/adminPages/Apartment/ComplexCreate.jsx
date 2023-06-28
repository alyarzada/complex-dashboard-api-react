import { Box, Typography, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import CustomTextField from "../../../components/Form/CustomTextField";
import CustomSelectNew from "../../../components/Form/CustomSelectNew";
import CustomFile from "../../../components/Form/CustomFile";
import Header from "../../../components/UI/Header";

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

const ComplexCreate = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Header
        currentPage={{
          title: t(["Create new"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"Complex"}
        to="surveymanage"
        icon={
          <LocationCityIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="mt-4 py-4 px-6 rounded text-text1 drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Formik
          initialValues={{
            requestform_type: "",
            requestform_department: [],
            requestform_dep_employess: [],
            title: "",
            message: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems={{ md: "start", lg: "center" }}
                direction={{ md: "column", lg: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] mt-4">
                  {t(["Housing cooperative"])}
                </Typography>
                <Box className="w-[70%] ">
                  <CustomSelectNew />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems={{ md: "start", lg: "center" }}
                direction={{ md: "column", lg: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] md:mb-3">
                  {t(["Complex"])}
                </Typography>
                <Box className="w-[70%] ">
                  <CustomTextField className="w-full" label={t(["Complex"])} />
                </Box>
              </Stack>
            </Box>

            <Box className=" mt-4 py-4 px-6 rounded bg-[#050A2C] dark:bg=[#050A2C] w-full drop-shadow-lg mb-6">
              <Typography className="font-bold text-textDark2 dark:text-text1 text-[17px] mb-1 capitalize flex items-center gap-2">
                <InsertPhotoOutlinedIcon /> {t(["Photos"])}
              </Typography>
            </Box>
            <Box className="w-full flex-wrap md:flex">
              {photoInputLabels.map((item) => {
                return (
                  <Box className="w-full px-3 my-3 md:w-1/2">
                    <Box className="w-[30%]">
                      <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                        {t(["Photo"])} {item.id}
                      </Typography>
                    </Box>
                    <Box className="flex  items-center rounded  drop-shadow-lg  bg-bgLight dark:bg-bgMain font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize  w-full">
                      <Button className="capitalize" variant="contained">
                        <CustomFile
                          className="mb-0"
                          title={t(["Choose file"])}
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
            <Box className=" mt-4 py-4 px-6 rounded bg-[#050A2C] dark:bg=[#050A2C] w-full drop-shadow-lg mb-6">
              <Typography className="font-bold text-textDark2 dark:text-text1 text-[17px] mb-1 capitalize flex items-center gap-2">
                <InsertPhotoOutlinedIcon /> {t(["Employees"])}
              </Typography>
            </Box>
            {/* <Box>//DATA GRID
          <CustomDataGrid />
        </Box> */}

            <Box className=" mt-4 py-4 px-6 rounded bg-[#050A2C] dark:bg=[#050A2C] w-full drop-shadow-lg mb-6">
              <Typography className="font-bold text-textDark2 dark:text-text1 text-[17px] mb-1 capitalize flex items-center gap-2">
                <InsertPhotoOutlinedIcon /> {t(["Additional information"])}
              </Typography>
            </Box>
            <Box>
              <Typography className="mb-3">{t(["Notes"])}</Typography>
              <CustomTextField
                multiline
                rows="7"
                label={t(["Write something..."])}
              />
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default ComplexCreate;
