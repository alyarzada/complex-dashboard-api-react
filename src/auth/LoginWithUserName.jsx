import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../validations/login_validation";
import { motion } from "framer-motion";
import { loginHandler } from "../app/Slicers/dataFetching/auth";
import CustomTextField from "../components/Form/CustomTextField";
import LoginIcon from "@mui/icons-material/Login";
import Cookies from "js-cookie";
import LoadingButton from "@mui/lab/LoadingButton";

const LoginWithUserName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth && Cookies.get("token")) navigate("/");
  }, [isAuth, navigate]);

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
                <Typography component="span" className="text-[#f44336] text-xs">
                  Zəhmət olmasa bütün xanaları doldurun{" "}
                </Typography>
              ) : null}

              {!isAuth && !loading ? (
                <Typography component="span" className="text-[#f44336] text-xs">
                  İstifadəçi və ya şifrə səhvdir
                </Typography>
              ) : null}
            </Box>

            <LoadingButton
              size="small"
              className="bg-logoColor capitalize text-textDark4"
              type="submit"
              loading={loading}
              loadingPosition="start"
              startIcon={<LoginIcon />}
              variant="contained"
            >
              Daxil olun
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginWithUserName;
