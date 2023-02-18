import { Formik, Form } from "formik";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomTextField from "../components/Form/CustomTextField";
import LoginIcon from "@mui/icons-material/Login";

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
          <Form>
            <CustomTextField
              name="phone"
              label="Telefon Nomresi"
              variant="outlined"
            />
            <Stack
              direction="row"
              justifyContent="center"
              className="mt-3 mb-[16px]"
            >
              <Button
                startIcon={<LoginIcon className="text-black" />}
                variant="contained"
                className="bg-logoColor text-black capitalize"
                type="submit"
              >
                Daxil olun
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginWithPhoneNumber;
