import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomTextField from "../components/Form/CustomTextField";
import LoginIcon from "@mui/icons-material/Login";
import LoadingButton from "@mui/lab/LoadingButton";

const LoginWithPhoneNumber = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <Formik
        initialValues={{ phone: "" }}
        onSubmit={(values) => {
          navigate("/");
        }}
      >
        {() => (
          <Form className="h-[200px] flex flex-col justify-between items-center">
            <CustomTextField
              name="phone"
              label="Telefon Nomresi"
              variant="outlined"
              className="w-full"
            />
            <LoadingButton
              size="small"
              startIcon={<LoginIcon className="text-textDark4" />}
              variant="contained"
              className="bg-logoColor text-textDark4 capitalize"
              type="submit"
            >
              Daxil olun
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginWithPhoneNumber;
