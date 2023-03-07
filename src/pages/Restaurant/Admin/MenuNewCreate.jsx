import Header from "../../../components/UI/Header";
import { Box, Stack, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import SuccessButton from "../../../components/UI/Buttons/SuccessButton";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import CustomTextField from "../../../components/Form/CustomTextField";

const MenuNewCreate = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header
        className="flex md:flex-col"
        currentPage={{
          title: "Create new",
          icon: IndeterminateCheckBoxOutlinedIcon,
        }}
        extra={"Menu categories"}
        to="menucategories"
        icon={
          <IndeterminateCheckBoxOutlinedIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-bgMain w-full flex flex-col gap-[25px]">
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
              alignItems={{ lg: "center", md: "start" }}
              direction={{ lg: "row", md: "column" }}
              spacing={2}
              className="mb-4  lg:flex-column"
            >
              <Typography className="text-[#AAB8C5] ">
                {t(["Category Azerbaijan"])}
              </Typography>
              <CustomTextField
                className="w-[100%] lg:w-[70%]"
                label={t(["Enter the category in your language"])}
              />
            </Stack>

            <Stack
              justifyContent="space-between"
              alignItems={{ lg: "center", md: "start" }}
              direction={{ lg: "row", md: "column" }}
              spacing={2}
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5]">
                {t(["Category Russian"])}
              </Typography>
              <CustomTextField
                className="w-[100%] lg:w-[70%]"
                label={t(["Enter the category in Russian"])}
              />
            </Stack>
            <Stack
              justifyContent="space-between"
              alignItems={{ lg: "center", md: "start" }}
              direction={{ lg: "row", md: "column" }}
              spacing={2}
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5] ">
                {t(["Category English"])}
              </Typography>
              <CustomTextField
                className="w-[100%] lg:w-[70%]"
                label={t(["Enter the category in English"])}
              />
            </Stack>
          </Form>
        </Formik>
        <Box className="flex justify-end">
          <SuccessButton variant="contained">{t(["Submit"])}</SuccessButton>
        </Box>
      </Box>
    </div>
  );
};

export default MenuNewCreate;
