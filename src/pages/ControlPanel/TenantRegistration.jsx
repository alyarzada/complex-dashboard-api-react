import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomFile from "../../components/Form/CustomFile";
import CustomDateRangePicker from "../../components/Form/CustomDateRangePicker";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useTranslation } from "react-i18next";

const TenantRegistration = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box className="mb-3">
        <Typography className="dark:text-text1" variant="h6" component="h1">
          {t(["Tenant Registration"])}
        </Typography>
      </Box>

      <Box>
        <Formik
          initialValues={{
            dateRange: "",
            name: "",
            id: "",
            image: "",
            emails: [
              {
                id: uuidv4(),
                title: "",
              },
            ],
            mobiles: [
              {
                id: uuidv4(),
                title: "",
              },
            ],
            comment: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values }) => (
            <Form className="flex flex-col lg:flex-row gap-3">
              <Box className="w-1/2 flex flex-col gap-y-4">
                <CustomDateRangePicker
                  name="dateRange"
                  label={t(["Date range"])}
                />
                <CustomTextField name="name" label={t(["Name"])} />
                <Box
                  className="cursor-pointer border border-dashed border-black dark:border-[#ffffff4f]
                  py-[50px] text-center rounded-lg"
                >
                  <CustomFile name="id" label="İD" />
                </Box>
                <Box
                  className="cursor-pointer border border-dashed
                  border-black dark:border-[#ffffff4f]
                 py-[50px] text-center rounded-lg"
                >
                  <CustomFile name="image" label={t(["Photo"])} />
                </Box>
              </Box>
              <Box className="w-1/2 flex flex-col gap-y-4 xs:w-full sm:w-full xmd:w-full ">
                <FieldArray name="mobiles">
                  {({ insert, remove, push }) => (
                    <Box className="flex flex-col gap-y-4">
                      {values.mobiles.map((item, index) => (
                        <Box key={index} className="flex items-center gap-x-2">
                          <CustomTextField
                            label={t(["Enter phone number"])}
                            name={`mobiles.${index}.title`}
                            className="mb-0 flex-1"
                          />
                          {index === 0 && (
                            <IconButton
                              onClick={() => push({ id: uuidv4(), title: "" })}
                            >
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
                <FieldArray name="emails">
                  {({ insert, remove, push }) => (
                    <Box className="flex flex-col gap-y-4">
                      {values.emails.map((item, index) => (
                        <Box key={index} className="flex items-center gap-x-2">
                          <CustomTextField
                            label={t(["Enter email address"])}
                            name={`emails.${index}.title`}
                            className="mb-0 flex-1"
                          />
                          {index === 0 && (
                            <IconButton
                              onClick={() => push({ id: uuidv4(), title: "" })}
                            >
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
                <CustomTextField name="comment" label="Serhiniz" />
                <Box className="flex justify-end">
                  <Button
                    type="submit"
                    className="capitalize"
                    variant="contained"
                  >
                    {t(["Submit"])}
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default TenantRegistration;
