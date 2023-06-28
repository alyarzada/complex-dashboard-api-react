import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import { LoginSchema } from "../validations/login_validation";
import CustomTextField from "../components/Form/CustomTextField";
import { loginHandler } from "../services/authReqs";
import Cookies from "js-cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (payload) => loginHandler(payload),
    onSuccess: successHandler,
  });

  async function successHandler(payload) {
    const { success, token } = payload;

    if (success && token) {
      Cookies.set("token", token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      navigate("/");
    }
  }

  return (
    <Box className="flex bg-slate-50 items-center justify-center h-screen overflow-hidden">
      <div className="w-1/3">
        <div className="mb-4">
          <h2>Daxil ol</h2>
          <p>Giriş etmək üçün email və şifrənizi daxil edin</p>
        </div>

        <div>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => mutate(values)}
            validateOnChange={true}
            validateOnBlur={false}
            validateOnFocus={false}
            validationSchema={LoginSchema}
          >
            {({ errors, touched }) => (
              <Form className="h-[200px] flex flex-col justify-between items-center">
                <Box className="mb-3 w-full">
                  <CustomTextField
                    name="username"
                    label="İstifadəçi adı və ya e-poçt ünvanı"
                    variant="outlined"
                  />

                  <CustomTextField
                    label="Şifrənizi daxil edin"
                    type="password"
                    name="password"
                    variant="outlined"
                    className=" rounded"
                  />

                  {(errors.username || errors.password) &&
                  (touched.username || touched.password) ? (
                    <Typography
                      component="span"
                      className="text-[#f44336] text-xs"
                    >
                      Zəhmət olmasa bütün xanaları doldurun{" "}
                    </Typography>
                  ) : null}

                  {isError ? (
                    <Typography
                      component="span"
                      className="text-[#f44336] text-xs"
                    >
                      İstifadəçi və ya şifrə səhvdir
                    </Typography>
                  ) : null}
                </Box>

                <LoadingButton
                  className="bg-logoColor capitalize text-textDark4 w-full"
                  type="submit"
                  loading={isLoading}
                  loadingPosition="start"
                  startIcon={<LoginIcon />}
                  variant="contained"
                >
                  Daxil olun
                </LoadingButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Box>
  );
};

export default LoginPage;
