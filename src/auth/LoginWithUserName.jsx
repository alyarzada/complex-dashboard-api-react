import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../validations/login_validation";
import { motion } from "framer-motion";
import { loginHandler } from "../app/Slicers/auth";
import CustomTextField from "../components/Form/CustomTextField";
import LoginIcon from "@mui/icons-material/Login";
import Cookies from "js-cookie";

const LoginWithUserName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth && Cookies.get("token")) navigate("/");
  }, [status]);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => dispatch(loginHandler(values))}
        validateOnChange={true}
        validateOnBlur={false}
        validateOnFocus={false}
        validationSchema={LoginSchema}
      >
        {({ errors, touched, values, isValidating, isSubmitting }) => (
          <Form>
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
              className="mb-3  rounded"
            />
            {(errors.username || errors.password) &&
            (touched.username || touched.password) ? (
              <Typography component="span" className="text-[#f44336] text-xs">
                Zəhmət olmasa bütün xanaları doldurun{" "}
              </Typography>
            ) : null}

            {!isAuth && status === "failed" ? (
              <Typography component="span" className="text-[#f44336] text-xs">
                İstifadəçi və ya şifrə səhvdir
              </Typography>
            ) : null}

            <Stack
              direction="row"
              justifyContent="center"
              className="mt-3 mb-[16px]"
            >
              <LoadingButton
                size="small"
                className="bg-logoColor capitalize text-textDark4"
                type="submit"
                loading={status === "loading"}
                loadingPosition="start"
                startIcon={<LoginIcon />}
                variant="contained"
              >
                Daxil olun
              </LoadingButton>
            </Stack>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginWithUserName;
