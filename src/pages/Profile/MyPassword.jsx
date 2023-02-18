import { useReducer } from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SaveIcon from "@mui/icons-material/Save";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomPasswordField from "../../components/Form/CustomPasswordField";
import { useTranslation } from "react-i18next";
import DefaultButton from "../../components/UI/Buttons/DefaultButton";

const initialState = {
  showCurrentPassword: false,
  showNewPassword: false,
  showConfirmPassword: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-current-password":
      return { ...state, showCurrentPassword: !state.showCurrentPassword };
    case "toggle-new-password":
      return { ...state, showNewPassword: !state.showNewPassword };
    case "toggle-confirm-password":
      return { ...state, showConfirmPassword: !state.showConfirmPassword };
  }
};

const MyPassword = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation();

  return (
    <div>
      <Box>
        <h5 className="text-text3 mb-8">
          <span className="mr-2">
            <AccountCircleIcon className="mr-2" />
          </span>
          {t("Change Password")}
        </h5>
      </Box>
      <Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {() => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomTextField
                required
                label="Email"
                name="email"
                className="mb-0"
              />
              <CustomPasswordField required label="Şifrə" name="password" />
              <CustomPasswordField
                label={t(["New Password"])}
                name="newPassword"
                required
              />
              <CustomPasswordField
                label={t(["Confirm new password"])}
                name="confirmNewPassword"
                required
              />
              <Box className="col-span-1 md:col-span-2 flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-logoColor shadow-lg shadow-[#C9B26D]/50 hover:shadow-[#C9B26D]/70"
                  startIcon={<SaveIcon className="dark:text-white" />}
                >
                  {t(["Save"])}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default MyPassword;
