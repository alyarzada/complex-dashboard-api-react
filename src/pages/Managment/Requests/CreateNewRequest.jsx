import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Box,
  Snackbar,
  IconButton,
  Autocomplete,
  TextField,
  Checkbox,
  TextareaAutosize,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomSelect from "../../../components/Form/CustomSelect";
import CustomTextField from "../../../components/Form/CustomTextField";
import { useDispatch, useSelector } from "react-redux";
import { createNewRequest } from "../../../app/Slicers/requests";
import { Close } from "@mui/icons-material";
import AdminCreateNewRequest from "../Requests/ComplexAdmin/AdminCreateNewRequest";
import SendIcon from "@mui/icons-material/Send";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Cookies from "js-cookie";
import CheckIcon from '@mui/icons-material/Check'; 
import ReplyIcon from '@mui/icons-material/Reply';
import BackButton from "../../../components/UI/Buttons/BackButton"
import SuccessButton from "../../../components/UI/Buttons/SuccessButton"

const applicationNumber = [];
const checkedIcon = <CameraAltOutlinedIcon />;
const icon = <CameraAltOutlinedIcon />;

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const CreateNewRequest = () => {
  const { allRequests, status } = useSelector((state) => state.requests);
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { new_request } = allRequests;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmit) {
      navigate("/requests");
      handleClick();
      setIsSubmit(false);
    }
  }, [isSubmit]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        {t("Close")}
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  if (user.has_role.role_id === 8) {
    return (
      <motion.div
        className="w-full p-6 rounded flex-1 text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
      >
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Yeni müraciət uğurla yaradıldı"
          action={action}
        />
        <BackButton
          variant="contained"
          startIcon=<ReplyIcon className="mr-2" />
          onClick={() => navigate(-1)}
        >
         {t("Back")}
        </BackButton>
        <Box>
          <Formik
            initialValues={{
              requestform_type: "",
              requestform_department: [],
              requestform_dep_employess: [],
              title: "",
              message: "",
            }}
            onSubmit={(values) => {
              dispatch(
                createNewRequest({
                  token: Cookies.get("token"),
                  body: values,
                })
              );
              setIsSubmit(true);
            }}
          >
            {() => (
              <Form>
                <CustomSelect
                  options={new_request?.RequestFormsTypes?.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                  name="requestform_type"
                  label={t("Request type")}
                />
                <CustomSelect
                  multiple
                  options={new_request?.RequestFormsDepartments?.map(
                    (item) => ({
                      value: item.id,
                      label: item.name,
                    })
                  )}
                  name="requestform_department"
                  label={t("Department")}
                />
                <CustomSelect
                  multiple
                  options={new_request?.requestform_dep_employess_list?.map(
                    (item) => ({
                      value: item.id,
                      label: item.name,
                    })
                  )}
                  name="requestform_dep_employess"
                  label={t("Employees of the department")}
                />
                <CustomTextField name="title" label={t(["Title"])} />
                <CustomTextField
                  multiline
                  name="message"
                  label="Your request"
                />
                <SuccessButton
                  variant="contained"
                  type="submit"
                  startIcon=<CheckIcon />
                >
                  {t("Submit")}
                </SuccessButton>
              </Form>
            )}
          </Formik>
        </Box>
      </motion.div>
    );
  } else {
    return (
      <Box className="dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg pt-4 p-2 mb-4">
        <Box className=" py-4 px-2">
          <tyography component="h5" className="dark:text-text2 text-textDark2">
            {t(["Applicant"])}
          </tyography>

          <Autocomplete
            className="mt-2"
            multiple
            id="checkboxes-tags-demo"
            options={applicationNumber}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                style={{ paddingTop: 6 }}
                {...params}
                label={t(["Please select"])}
                placeholder="Favorites"
              />
            )}
          />
        </Box>
        <Box className="flex flex-wrap justify-between py-4 px-2">
          <Box>
            <tyography
              component="h5"
              className="dark:text-text2 text-textDark2 mb-2"
            >
              {t(["Request type"])}
            </tyography>
            <Autocomplete
              className="mt-2"
              multiple
              id="checkboxes-tags-demo"
              options={applicationNumber}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 280 }}
              renderInput={(params) => (
                <TextField
                  style={{ paddingTop: 6 }}
                  {...params}
                  label={t(["Please select"])}
                  placeholder=""
                />
              )}
            />
          </Box>
          <Box>
            <tyography
              component="h5"
              className="dark:text-text2 text-textDark2"
            >
              {t(["Department"])}
            </tyography>
            <Autocomplete
              className="mt-2"
              multiple
              id="checkboxes-tags-demo"
              options={applicationNumber}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 280 }}
              renderInput={(params) => (
                <TextField
                  style={{ paddingTop: 6 }}
                  {...params}
                  label={["Please select"]}
                  placeholder=""
                />
              )}
            />
          </Box>
          <Box>
            <tyography
              component="h5"
              className="dark:text-text2 text-textDark2"
            >
              {t(["Employees"])}
            </tyography>
            <Autocomplete
              className="mt-2"
              multiple
              id="checkboxes-tags-demo"
              options={applicationNumber}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 280 }}
              renderInput={(params) => (
                <TextField
                  style={{ paddingTop: 6 }}
                  {...params}
                  label={t(["Please select"])}
                  placeholder=""
                />
              )}
            />
          </Box>
        </Box>
        <Box className="pt-4 p-2">
          <tyography
            component="h5"
            className="dark:text-text2 text-textDark2 mb-4"
          >
            {t(["Priority"])}
          </tyography>

          <Autocomplete
            className="mt-2"
            multiple
            id="checkboxes-tags-demo"
            options={applicationNumber}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                style={{ paddingTop: 6 }}
                {...params}
                label={t(["Please select"])}
                placeholder="Favorites"
              />
            )}
          />
        </Box>
        <Box className="pt-4 p-2">
          <tyography
            component="h5"
            className="dark:text-text2 text-textDark2 mb-8"
          >
            {t(["Title"])}
          </tyography>
          <TextField
            style={{ paddingTop: 9, marginBottom: 20 }}
            className="w-full mt-2"
            id="outlined-basic"
            label={t(["Title"])}
            variant="outlined"
          />

          <tyography component="h5" className="dark:text-text2 text-textDark2">
            {t(["Your request"])}
          </tyography>
          <TextareaAutosize
            className="w-full dark:bg-gradient-to-r rounded-lg dark:text-text2 p-1 px-3 mt-2"
            aria-label="minimum height"
            minRows={3}
            placeholder={t(["Message"])}
            style={{ border: "1px solid #a09f9f57" }}
          />
        </Box>
        <Box className="flex justify-between p-5">
          <Button
            variant="contained"
            className="capitalize text-[#000] bg-[#FDBD06] hover:bg-[#DBA31F]"
            type="submit"
          >
            <CameraAltOutlinedIcon className="text-base mr-1" /> {t(["Photo"])}
          </Button>
          <Button
            variant="contained"
            className="capitalize bg-[#10CB94] hover:bg-[#159483]"
            type="submit"
          >
            <SendIcon className="text-base mr-1" /> {t(["Submit"])}
          </Button>
        </Box>
      </Box>
    );
  }
};

export default CreateNewRequest;
