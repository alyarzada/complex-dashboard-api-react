import { Box, IconButton } from "@mui/material";
import { Formik, Form, FieldArray } from "formik";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SaveIcon from "@mui/icons-material/Save";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomDatePicker from "../../components/Form/CustomDatePicker";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch } from "react-redux";
import CustomGenderRadio from "../../components/Form/CustomGenderRadio";
import { updateUser } from "../../app/Slicers/auth";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import DefaultButton from "../../components/UI/Buttons/DefaultButton";

const MyDetails = ({ user }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Box>
      <Box>
        <Formik
          initialValues={{
            name: user?.name,
            emailaddress: user?.user_details.emailaddress,
            phone: user?.user_details.phone,
            birthday: "",
            gender: "",
          }}
          onSubmit={(values) => {
            dispatch(updateUser({ body: values, token: Cookies.get("token") }));
          }}
        >
          {({ values }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CustomTextField
                className="col-span-1 md:col-span-2 mb-0"
                label={t("Name")}
                name="name"
                variant="outlined"
                defaultValue={user?.name}
              />
              <FieldArray name="phone">
                {({ insert, remove, push }) => (
                  <Box className="flex flex-col gap-y-4">
                    {values?.phone?.map((item, index) => (
                      <Box key={index} className="flex items-center gap-x-2">
                        <CustomTextField
                          label={t("Enter phone number")}
                          name={`phone.${index}`}
                          className="mb-0 flex-1"
                          variant="outlined"
                          defaultValue={
                            index === 0
                              ? user?.user_details?.phone[index]
                              : null
                          }
                        />
                        {index === 0 && (
                          <IconButton onClick={() => push("")}>
                            <AddOutlinedIcon />
                          </IconButton>
                        )}
                        {index !== 0 && (
                          <IconButton onClick={() => remove(index)}>
                            <DeleteOutlineOutlinedIcon />
                          </IconButton>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </FieldArray>
              <FieldArray name="emailaddress">
                {({ insert, remove, push }) => (
                  <Box className="flex flex-col gap-y-4">
                    {values?.emailaddress?.map((item, index) => (
                      <Box key={index} className="flex items-center gap-x-2">
                        <CustomTextField
                          label={t("Enter email address")}
                          name={`emailaddress.${index}`}
                          variant="outlined"
                          className="mb-0 flex-1"
                          defaultValue={
                            index === 0
                              ? user?.user_details?.emailaddress[index]
                              : null
                          }
                        />
                        {index === 0 && (
                          <IconButton onClick={() => push("")}>
                            <AddOutlinedIcon />
                          </IconButton>
                        )}
                        {index !== 0 && (
                          <IconButton onClick={() => remove(index)}>
                            <DeleteOutlineOutlinedIcon />
                          </IconButton>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </FieldArray>

              <CustomDatePicker
                name="birthday"
                label={t(["Date of birth"])}
                className="mb-0"
              />
              <CustomGenderRadio name="gender" label={t("Gender")} />

              <Box className="col-span-1 md:col-span-2 flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-logoColor shadow-lg shadow-[#C9B26D]/50 hover:shadow-[#C9B26D]/70"
                  startIcon={
                    <SaveIcon className="dark:text-white text-black" />
                  }
                >
                  {t(["Save"])}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default MyDetails;
