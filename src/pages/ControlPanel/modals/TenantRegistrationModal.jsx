import { Box, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomFile from "../../../components/Form/CustomFile";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { destroyModal } from "../../../app/Slicers/localStates/modals";

const TenantRegistrationModal = ({ modal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Box>
      <Formik
        initialValues={{
          id: [],
          files: [],
          name: "",
          date_range: "",
          phone: "",
          email: "",
          message: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <CustomTextField label="Tarix Araligi" name="date_range" />

            <CustomTextField name="name" label="Name" />

            {/* <CustomFile name="id" label="id" title="id"  setFieldValue={setFieldValue} /> */}

            <CustomFile
              name="photo"
              label="photo"
              title="photo"
              setFieldValue={setFieldValue}
            />

            <CustomTextField name="phone" label="Telefon" />

            <CustomTextField name="email" label="Email" />

            <CustomTextField
              multiline
              name="message"
              label="Müraciətiniz"
              rows={6}
            />

            <Stack direction="row" justifyContent="end" spacing={1}>
              <Button
                variant="contained"
                color="error"
                className="capitalize"
                onClick={() => {
                  dispatch(destroyModal());
                }}
              >
                {t("Back")}
              </Button>
              <Button
                variant="contained"
                color="success"
                className="capitalize"
                type="submit"
              >
                Yarat
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default TenantRegistrationModal;
