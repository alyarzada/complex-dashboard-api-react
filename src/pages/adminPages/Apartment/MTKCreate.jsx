import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import Header from "../../components/UI/Header";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomFile from "../../components/Form/CustomFile";

const MTKUserCreate = () => {
  const { t } = useTranslation();

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Survey Manage"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"Survey Manage"}
        to="surveymanage"
        icon={
          <AddCircleOutlinedIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="my-4 py-4 px-6 rounded drop-shadow-lg bg-bgLights dark:bg-bgMain w-full">
        <Formik
          initialValues={{
            date: ["sad", "dasd"],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="w-full flex flex-col gap-3">
              <Box className=" mb-5 md:mb-0 md:flex h-[50px] w-full justify-between">
                <Box className="md:w-[30%]">
                  <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                    {t(["Housing cooperative"])}
                  </Typography>
                </Box>
                <Box className="w-full md:w-[70%]">
                  <CustomTextField
                    size="small"
                    className="w-full h-[40px]"
                    label={t(["Please select"])}
                    name="date"
                  />
                </Box>
              </Box>
              <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                {t(["Logo"])}
              </Typography>
              <Box className="flex items-center rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize  w-full">
                <Button className="capitalize" variant="contained">
                  <CustomFile
                    variant="contained"
                    className="mb-0"
                    title={t(["Choose file"])}
                    name="date"
                  />
                </Button>
                <Typography className="ml-3">No FIle Choosen</Typography>
              </Box>

              <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                {t(["Photos"])}
              </Box>
              <Box className="w-full flex-wrap md:flex">
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                      adornments={true}
                      endAdornmentIcon={
                        <AddCircleOutlinedIcon className="cursor-pointer" />
                      }
                    />
                  </Box>
                  <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                    "(xxx) xxx-xxxx"
                  </Typography>
                </Box>
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                      adornments={true}
                      endAdornmentIcon={
                        <AddCircleOutlinedIcon className="cursor-pointer" />
                      }
                    />
                  </Box>
                  <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                    "email@address.com"
                  </Typography>
                </Box>
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                      adornments={true}
                      endAdornmentIcon={
                        <AddCircleOutlinedIcon className="cursor-pointer" />
                      }
                    />
                  </Box>
                </Box>
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                  {t(["Logo"])}
                </Typography>
                <CustomTextField label="Qeyd" multiline rows={5} />
              </Box>
              <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                {t(["Photos"])}
              </Box>
              <Box className="w-full flex-wrap md:flex">
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                      adornments={true}
                      endAdornmentIcon={
                        <AddCircleOutlinedIcon className="cursor-pointer" />
                      }
                    />
                  </Box>
                  <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                    "(xxx) xxx-xxxx"
                  </Typography>
                </Box>
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                      adornments={true}
                      endAdornmentIcon={
                        <AddCircleOutlinedIcon className="cursor-pointer" />
                      }
                    />
                  </Box>
                  <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                    "email@address.com"
                  </Typography>
                </Box>
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                      adornments={true}
                      endAdornmentIcon={
                        <AddCircleOutlinedIcon className="cursor-pointer" />
                      }
                    />
                  </Box>
                </Box>
                <Box className="w-full px-3 my-3 md:w-1/2">
                  <Box className="w-[30%]">
                    <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                      {t(["Photo"])}
                    </Typography>
                  </Box>
                  <Box className="relative">
                    <CustomTextField
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                    />
                  </Box>
                </Box>
              </Box>

              <Box className="py-3 flex justify-end">
                {/* <SuccessButton
                  variant="contained"
                  startIcon=<CheckCircleOutlineIcon />
                  type="submit"
                >
                  {t("Submit")}
                </SuccessButton> */}
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default MTKUserCreate;
