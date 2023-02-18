import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Header from "../../../components/UI/Header";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { useTranslation } from "react-i18next";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import CustomTextField from "../../../components/Form/CustomTextField";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CustomSearchFilter from "../../../components/UI/CustomSearchFilter";
import { Link } from "react-router-dom";

const SendNotifications = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [focus, setFocus] = useState(false);
  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(false);

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };
  const handleCheck1 = (e) => {
    setCheck1(e.target.checked);
  };

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Informing residents"]),
          icon: NewspaperOutlinedIcon,
        }}
      />
      <Box className="my-4 py-4 px-6 rounded drop-shadow-lg  bg-bgLight dark:bg-bgMain w-full">
        <CustomSearchFilter
          hidden1={false}
          hidden2={false}
          hidden3={false}
          flex={true}
        />
        <hr className="dark:border-slate-800 border-[#C9B26D] mb-3" />
        <Box>
          <Box>
            <Formik
              initialValues={{
                date: ["sad", "dasd"],
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {() => (
                <Form className="w-full flex flex-col gap-3">
                  <Box className="flex flex-col items-center">
                    <Box className="lg:flex w-full items-center">
                      <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize w-[30%] ">
                        {t("Informing channel")}
                      </Typography>
                      <Box className=" flex gap-8  px-2 w-[70%]">
                        <FormControl component="fieldset">
                          <FormControlLabel
                            value="end"
                            control={
                              <Checkbox
                                checked={check}
                                onChange={handleCheck}
                              />
                            }
                            label={t("Internal & Email")}
                            labelPlacement="end"
                            style={{ color: "#888" }}
                          />
                        </FormControl>
                        <FormControl
                          component="fieldset"
                          style={{ color: "#888" }}
                        >
                          <FormControlLabel
                            value="end"
                            control={
                              <Checkbox
                                checked={check1}
                                onChange={handleCheck1}
                              />
                            }
                            label={t("SMS Message")}
                            labelPlacement="end"
                            style={{ color: "#888" }}
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    {check == true && (
                      <Box className="flex flex-col gap-2 mt-3">
                        <Box className=" mb-3 lg:mb-0 lg:flex h-[50px] w-full justify-between">
                          <Box className="md:w-[30%]">
                            <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                              {t(["Subject"])}
                            </Typography>
                          </Box>
                          <Box className="w-full lg:w-[70%]">
                            <CustomTextField
                              className="w-full"
                              label={t(["Subject"])}
                              name="date"
                            />
                          </Box>
                        </Box>
                        <Box className=" mt-5 lg:mb-0 lg:flex h-[50px] w-full justify-between">
                          <Box className="lg:w-[30%]">
                            <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                              {t(["Message"])}
                            </Typography>
                          </Box>
                          <Box className="w-full lg:w-[70%] mb-5">
                            <CustomTextField
                              className="w-full"
                              label={t(["Message"])}
                              name="date"
                              multiline
                              rows={5}
                            />
                          </Box>
                        </Box>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </Box>
                    )}
                    {check1 == true && (
                      <Box className="flex flex-col gap-3 mt-3">
                        <Box className=" mb-3 lg:flex h-auto w-full justify-between">
                          <Box className="md:w-[30%]">
                            <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                              {t(["SMS Message"])}
                            </Typography>
                          </Box>
                          <Typography className="w-full flex items-center dark:bg-[#256D85] bg-[#C9B26D] text-white dark:text-text1 text-sm rounded pl-3 py-1 lg:w-[70%]">
                            {t("For your information")} -{" "}
                            {t(
                              "The number of characters for English letters is 160. The number of characters for Azerbaijani and Russian letters is 70."
                            )}
                          </Typography>
                        </Box>
                        <Box className=" mt-1 lg:mb-0 lg:flex h-auto w-full justify-between">
                          <Box className="lg:w-[30%]"></Box>
                          <Box className="w-full lg:w-[70%] relative mb-5">
                            <CustomTextField
                              className="w-full font-thin"
                              label={t(["SMS Message"])}
                              name="date"
                              multiline
                              rows={5}
                              onFocus={() => {
                                setFocus(true);
                              }}
                              onBlur={() => {
                                setFocus(false);
                              }}
                              onChange={(e) => {
                                setValue(e.target.value);
                              }}
                              inputProps={{ maxLength: 160 }}
                            />
                            {focus && (
                              <Box className="flex justify-center ">
                                <Typography className="w-[250px] absolute flex items-center -m-8 dark:bg-[#256D85] bg-logoColor text-sm rounded text-white dark:text-text1 p-1 justify-center ">
                                  You typed {value.length} out of 160
                                  charachters
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-between items-center gap-x-1 bg-bgLight dark:bg-[#404954] py-5 px-3 sm:px-6 rounded mt-2">
        <Link to="/notifications-archive">
          <Button
            startIcon={
              <Inventory2OutlinedIcon className="text-dark dark:text-white" />
            }
            variant="contained"
            className="capitalize bg-amber-500"
          >
            {t(["Archive of Informing"])}
          </Button>
        </Link>
        <Box className="flex gap-3">
          <Button
            variant="contained"
            className="capitalize"
            startIcon={
              <CheckCircleOutlineOutlinedIcon className="text-dark dark:text-white" />
            }
          >
            {t(["Submit"])}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SendNotifications;
