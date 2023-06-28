import { useState } from "react";
import { Typography, Box, Stack, Avatar } from "@mui/material";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";

import CustomTextField from "../../../components/Form/CustomTextField";
import CustomPasswordField from "../../../components/Form/CustomPasswordField";
import CustomFile from "../../../components/Form/CustomFile";
import CustomDatePicker from "../../../components/Form/CustomDatePicker";
import CustomGenderRadio from "../../../components/Form/CustomGenderRadio";
import CustomSwitch from "../../../components/Form/CustomSwitch";
import CustomSelectNew from "../../../components/Form/CustomSelectNew";
import permissions from "../../../data/moderator/permissions.json";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Permission = () => {
  const { t } = useTranslation();
  const [firstLetters, setFirstLetters] = useState(null);

  return (
    <Box classname="mt-4 py-4 px-6 rounded bg-bgLight dark:bg-bgMain w-full drop-shadow-lg ">
      <Formik
        initialValues={{
          requestform_type: "",
          requestform_department: [],
          requestform_dep_employess: [],
          title: "",
          message: "",
        }}
      >
        <Form>
          <Box>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5]">
                {t(["E-Mail Address"])}
              </Typography>
              <Box className="w-[70%]">
                <CustomTextField
                  className="w-full"
                  label={t(["E-Mail Address"])}
                />
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5]">
                {t(["Password"])}
              </Typography>
              <Box className="w-[70%]">
                <CustomPasswordField
                  required
                  label={t(["Password"])}
                  name="password"
                />
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5]">
                {t(["Confirm Password"])}
              </Typography>
              <Box className="w-[70%]">
                <CustomPasswordField
                  required
                  label={t(["Confirm Password"])}
                  name="password"
                />
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5] mt-4">
                {t(["Roles"])}
              </Typography>
              <Box className="w-[70%]">
                <CustomSelectNew />
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="space-between"
              alignItems="start"
              direction="row"
              className="mb-4"
            >
              <Typography className="text-[#AAB8C5] mt-4">
                {t(["Permission"])}
              </Typography>
              <Box className="w-[70%]">
                <Typography className="text-[#AAB8C5] mt-4 font-bold">
                  {t(["Housing cooperative"])}
                </Typography>
                <CustomSelectNew />
                <Box>
                  <Typography className="text-[#AAB8C5] mt-4 font-bold">
                    {t(["Complex"])}
                  </Typography>

                  <CustomSelectNew />
                </Box>
                <Box>
                  <Typography className="text-[#AAB8C5] mt-4 font-bold">
                    {t(["Building"])}
                  </Typography>
                  <CustomSelectNew />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Form>
      </Formik>

      <Box className=" mt-4 py-4 px-6 rounded bg-[#050A2C] dark:bg=[#050A2C] w-full drop-shadow-lg mb-6">
        <Typography className="font-bold text-textDark2 dark:text-text1 text-[17px] mb-1 capitalize flex items-center gap-2">
          <SettingsOutlinedIcon /> {t(["Modules"])}{" "}
        </Typography>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {permissions.map((permission, permissionIndex) => {
          if (permission.title == "Müraciətlər / Şöbələr") {
            return (
              <Box
                key={permissionIndex}
                className="bg-[#050A2C] rounded text-text1 h-fit col-span-3"
              >
                <Box className="bg-slate-500 px-5 py-3 rounded-t">
                  <Typography>{permission.title}</Typography>
                </Box>
                <Box className="px-5 py-3 grid grid-cols-4 ">
                  {permission.options.map((option, optionIndex) => {
                    return (
                      <CustomSwitch
                        key={optionIndex}
                        label={option.label}
                        checked={option.enable}
                      />
                    );
                  })}
                </Box>
              </Box>
            );
          }

          return (
            <Box className="bg-[#050A2C] rounded text-text1 h-fit">
              <Box className="bg-slate-500 px-5 py-3 rounded-t">
                <Typography>{permission.title}</Typography>
              </Box>
              <Box className="px-5 py-3">
                {permission.options.map((option, optionIndex) => {
                  return (
                    <CustomSwitch label={option.label} key={optionIndex} />
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className=" mt-4 py-4 px-6 rounded bg-[#050A2C] dark:bg=[#050A2C] w-full drop-shadow-lg mb-6">
        <Typography className="font-bold text-textDark2 dark:text-text1 text-[17px] mb-1 capitalize flex items-center gap-2">
          <SettingsOutlinedIcon /> {t(["Personal Info"])}{" "}
        </Typography>
      </Box>
      <Formik
        initialValues={{
          phone: [],
          emailaddress: [],
        }}
      >
        <Form>
          <Box>
            <Typography className="text-[#AAB8C5] mt-4 font-bold py-3">
              {t(["Name"])}
            </Typography>
            <CustomTextField label={t(["Name"])} />
          </Box>
          <Box className="flex">
            {/* <FieldArray name="phone">
              <Typography className="text-[#AAB8C5] mt-4 font-bold py-3">
                {t(["Phone number"])}
              </Typography>

              <Box className="flex items-center gap-x-2 w-full">
                <CustomTextField
                  label={t("Enter phone number")}
                  name="phone"
                  className="mb-0 flex-1"
                  variant="outlined"
                />

                <IconButton>
                  <AddOutlinedIcon />
                </IconButton>

                <IconButton>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </FieldArray> */}
            {/* <FieldArray name="emailaddress">
              <Typography className="text-[#AAB8C5] mt-4 font-bold py-3">
                {t(["Email address"])}
              </Typography>

              <Box className="flex items-center gap-x-2 w-full">
                <CustomTextField
                  label={t("Enter email address")}
                  name="emailaddress"
                  className="mb-0 flex-1"
                  variant="outlined"
                />

                <IconButton>
                  <AddOutlinedIcon />
                </IconButton>

                <IconButton>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </FieldArray> */}
          </Box>
          <Box>
            <Typography className="text-[#AAB8C5] font-bold py-3">
              {t(["Birthday"])}
            </Typography>
            <Box>
              <CustomDatePicker
                name="birthday"
                label={t(["Date of birth"])}
                className="mb-0"
              />
              <Box className="mt-4">
                <CustomGenderRadio name="gender" label={t("Gender")} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography className="text-[#AAB8C5] mt-4 font-bold py-3">
              {t(["About Me"])}
            </Typography>
            <Box>
              <CustomTextField
                multiline
                rows="4"
                label={t(["Write something..."])}
              />
            </Box>
          </Box>
          <Box>
            <Typography className="text-[#AAB8C5] mt-4 font-bold py-3">
              {t(["Location"])}
            </Typography>
            <Box>
              <CustomTextField multiline rows="4" label={t(["Location"])} />
            </Box>
          </Box>
          <Box>
            <Typography className="text-[#AAB8C5] mt-4 font-bold py-3">
              {t(["Profile Image"])}
            </Typography>
            <Box>
              <CustomFile
                className="mb-0"
                title={t(["Choose file"])}
                name="date"
              />
            </Box>
          </Box>
          <Box className="mt-4">
            <Avatar
              alt=""
              className="cursor-pointer"
              sx={{ width: 140, height: 140 }}
              // src={user}
            >
              {firstLetters}
            </Avatar>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default Permission;
