import { Box, Typography, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

import Header from "../../../components/UI/Header";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomFile from "../../../components/Form/CustomFile";
import SuccessButton from "../../../components/UI/Buttons/SuccessButton";

const MTKUserCreate = () => {
  const { t } = useTranslation();
  const { light } = useSelector((state) => state.themes);

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Create new"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"Housing cooperative"}
        to="housing-cooperative"
        icon={
          <ViewInArIcon
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
                      endAdornment={true}
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
                      endAdornment={true}
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
                      endAdornment={true}
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
                      startAdornment={true}
                      startIcon={<FacebookRoundedIcon />}
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
                      startAdornment={true}
                      startIcon={<TwitterIcon />}
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
                      startAdornment={true}
                      startIcon={<InstagramIcon />}
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
                      startAdornment={true}
                      startIcon={<LinkedInIcon />}
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
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
                      startAdornment={true}
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="24px"
                          height="24px"
                          fill={light ? "gray" : "#FFFFFF"}
                        >
                          <path d="M26.884,16.579C26.953,16.061,27,15.536,27,15c0-6.627-5.373-12-12-12c-0.536,0-1.061,0.047-1.579,0.116 C12.279,2.413,10.939,2,9.5,2C5.358,2,2,5.358,2,9.5c0,1.439,0.413,2.779,1.116,3.921C3.047,13.939,3,14.464,3,15 c0,6.627,5.373,12,12,12c0.536,0,1.061-0.047,1.579-0.116C17.721,27.587,19.061,28,20.5,28c4.142,0,7.5-3.358,7.5-7.5 C28,19.061,27.587,17.721,26.884,16.579z M15.149,22c-3.896,0-6.133-2.042-6.133-4.046c0-1.022,1.07-1.349,1.498-1.349 c0.989,0,1.318,0.807,1.498,1.177c1.005,2.066,1.971,1.794,2.923,1.884c0.841,0.079,2.815-0.292,2.815-1.734 c0-0.138,0.217-1.076-1.487-1.541c-1.089-0.298-3.009-0.663-4.589-1.271c-1.486-0.572-2.358-1.75-2.358-3.268 C9.316,11.093,9.705,8,14.967,8c3.512,0,5.384,1.799,5.384,3.382c0,0.364-0.139,0.685-0.418,0.974 c-0.279,0.289-1.065,0.712-1.926,0.161c-0.217-0.139-0.396-0.428-0.61-0.803c-0.258-0.471-0.68-1.381-2.623-1.381 c-1.885,0-2.408,0.899-2.408,1.274c0,1.26,2.405,1.525,3.051,1.692c2.358,0.608,5.566,1.167,5.566,4.346 C20.983,21.295,17.185,22,15.149,22z" />
                        </svg>
                      }
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
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
                      startAdornment={true}
                      startIcon={<GitHubIcon />}
                      className="mb-0"
                      label={t(["Choose file"])}
                      name="date"
                    />
                  </Box>
                </Box>
              </Box>

              <Box className="py-3 flex justify-end">
                <SuccessButton
                  variant="contained"
                  startIcon=<CheckCircleOutlineIcon />
                  type="submit"
                >
                  {t("Submit")}
                </SuccessButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default MTKUserCreate;
