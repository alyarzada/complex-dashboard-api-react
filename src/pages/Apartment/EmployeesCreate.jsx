import { Box, Typography, Stack } from "@mui/material";
import Header from "../../components/UI/Header";
import { useTranslation } from "react-i18next";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Formik, Form } from "formik";
import SuccessButton from "../../components/UI/Buttons/SuccessButton"
import CustomTextField from "../../components/Form/CustomTextField";
import CustomSelectNew from "../../components/Form/CustomSelectNew";  
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const MTKUserCreate = () => {
  const { t } = useTranslation();
  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Create new"]),
          icon: AddCircleOutlinedIcon,
        }}
        extra={"Employees"}
        to="employees"
        icon={
          <AddCircleOutlinedIcon
            sx={{ mr: 0.5, mt: -0.5 }}
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
            alignItems="start"
            direction={{md:"row"}}
            className="mb-4"
            
          >
            <Typography className="text-[#AAB8C5] mb-4">
              {t(["Name"])}
            </Typography>
            <Box className="md:w-[70%] w-[100%]">
              <CustomTextField required className="w-full" label={t(["Name"])} />
            </Box>
          </Stack>
        </Box>
        <Box>
        <Stack
          justifyContent="space-between"
          alignItems="start"
          direction={{md:"row"}}
          className="mb-4"
        >
          <Typography className="text-[#AAB8C5] mt-4">
            {t(["Permission"])}
          </Typography>
          <Box className="md:w-[70%] w-[100%]">
            <CustomSelectNew required />
          </Box>
        </Stack>
      </Box>
        <Box>
        <Stack
          justifyContent="space-between"
          alignItems="start"
          direction={{md:"row"}}
          className="mb-4"
        >
          <Typography className="text-[#AAB8C5] mt-4">
            {t(["Place of work"])}
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
