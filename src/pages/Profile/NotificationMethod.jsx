import { Formik, Form } from "formik";
import { Typography, Box, Button } from "@mui/material";
import CustomTextField from "../../components/Form/CustomTextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SaveIcon from "@mui/icons-material/Save";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { useTranslation } from "react-i18next";
import DefaultButton from "../../components/UI/Buttons/DefaultButton";

const initialValues = {
  email: "",
  phone: "",
  telegramAccount: "",
};

const NotificationMethod = () => {
  const { t } = useTranslation();
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Box className="flex gap-x-2">
        <NotificationsActiveOutlinedIcon className="text-text1" />
        <Typography className="text-text1 mb-4">
          {t("Notification method")}
        </Typography>
      </Box>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Box className="mb-2 flex items-center text-text1 gap-x-1">
              <EmailOutlinedIcon className="text-xs" />
              <Typography className="text-xs">
                {t("Email address for receive notification")}
              </Typography>
            </Box>
            <CustomTextField label={t("Email address")} name="email" />
            <Box className="mb-2 flex items-center text-text1 gap-x-1">
              <LocalPhoneOutlinedIcon className="text-xs" />
              <Typography className="text-xs">
                {t("Phone number for receive notification")}
              </Typography>
            </Box>
            <CustomTextField label="Phone number" name="telegramAccount" />
            <Box className="col-span-1 md:col-span-2 flex justify-end">
              <DefaultButton
                variant="contained"
                type="submit"
                startIcon={<SaveIcon className="text-white dark:text-black" />}
              >
                {t(["Save"])}
              </DefaultButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NotificationMethod;
