import { Box, Typography, Stack } from "@mui/material";
import Header from "../../components/UI/Header";
import { useTranslation } from "react-i18next";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Formik, Form } from "formik";
import SuccessButton from "../../components/UI/Buttons/SuccessButton";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomSelectNew from "../../components/Form/CustomSelectNew";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CustomNative from "../../components/Form/CustomNative";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const MTKUserCreate = () => {
  const { t } = useTranslation();
  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Create new"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"Residents"}
        to="residents"
        icon={
          <PeopleAltIcon
            sx={{ mr: 0.5, mt: -0.3 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="my-4 py-4 px-6 rounded  drop-shadow-lg bg-bgLights dark:bg-bgMain w-full">
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
                alignItems="center"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["Housing cooperative"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomSelectNew required />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction={{ md: "row" }}
                className="mb-4"
              >
                <Typography className="text-[#AAB8C5]">
                  {t(["Complex"])}
                </Typography>
                <Box className="md:w-[70%] w-[100%]">
                  <CustomSelectNew required />
                </Box>
              </Stack>
            </Box>
            <Box className="w-[100%] bg-[#050A2C]">
              <Typography className="text-text2 border">
                <AccountCircleIcon className="text-text2 p-1" />{" "}
                {t("Contact information")}
              </Typography>
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
