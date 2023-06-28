import { Box, Typography, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Header from "../../../../components/UI/Header";
import CustomTextField from "../../../../components/Form/CustomTextField";
import CustomPasswordField from "../../../../components/Form/CustomPasswordField";
import CustomNative from "../../../../components/Form/CustomNative";
import CustomSelectNew from "../../../../components/Form/CustomSelectNew";
import SuccessButton from "../../../../components/UI/Buttons/SuccessButton";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const MTKUserCreate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Survey Manage"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"create"}
        to="surveymanage"
        icon={
          <AddCircleOutlinedIcon
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
        >
          <Form>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["Name"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomTextField
                    required
                    className="w-full"
                    label={t(["Name"])}
                  />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["E-Mail Address"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomTextField
                    className="w-full"
                    label={t(["E-Mail Address"])}
                    required
                  />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["Password"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomPasswordField
                    required
                    label={t(["Password"])}
                    name="password"
                  />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["Confirm Password"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomPasswordField
                    required
                    label={t(["Confirm Password"])}
                    name="password"
                  />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["Role"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomNative className="w-full" required />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5] mt-4">
                  {t(["Permission"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <Typography className="text-[#AAB8C5] mt-4 font-bold">
                    {t(["Housing cooperative"])}
                  </Typography>
                  <CustomSelectNew required />
                  <Box>
                    <Typography className="text-[#AAB8C5] mt-4 font-bold">
                      {t(["Complex"])}
                    </Typography>

                    <CustomSelectNew required />
                  </Box>
                  <Box>
                    <Typography className="text-[#AAB8C5] mt-4 font-bold">
                      {t(["Building"])}
                    </Typography>
                    <CustomSelectNew required />
                  </Box>
                </Box>
              </Stack>
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
        </Formik>
      </Box>
    </Box>
  );
};

export default MTKUserCreate;
