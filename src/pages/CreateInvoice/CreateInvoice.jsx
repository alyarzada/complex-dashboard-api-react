
import React from "react";
import { Formik, Form } from "formik";
import { Typography, Box, Button } from "@mui/material";
import CustomTextField from "../../components/Form/CustomTextField";
import Header from "../../components/UI/Header";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomFile from "../../components/Form/CustomFile";
import CustomDateRangePicker from "../../components/Form/CustomDateRangePicker";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const inputTextLabels = [
  {
    id: 1,
    title: "Bloks",
    placeholder: "Blok",
  },
  {
    id: 2,
    title: "Apartment",
    placeholder: "Apartment",
  },
  {
    id: 3,
    title: "Area",
    placeholder: "Area",
  },
  {
    id: 4,
    title: "Floor",
    placeholder: "Floor",
  },
  {
    id: 5,
    title: "Number of rooms",
    placeholder: "Number of rooms",
  },
  {
    id: 6,
    title: "Number of sanitary facilities",
    placeholder: "Number of sanitary facilities",
  },
  {
    id: 7,
    title: "Parking place number",
    placeholder: "Parking place number",
  },
  {
    id: 8,
    title: "Apartment owner name",
    placeholder: "Apartment owner name",
  },
];

const photoInputLabels = [
  {
    id: 1,
    label: "No File Choosen",
  },
  {
    id: 2,
    label: "No File Choosen",
  },
  {
    id: 3,
    label: "No File Choosen",
  },
  {
    id: 4,
    label: "No File Choosen",
  },
];

const CreateInvoice = () => {
  const { t } = useTranslation();

  return (
    <Box className="w-full">
      <Header
        currentPage={{ title: t(["Invoices"]), icon: ApartmentOutlinedIcon }}
      />
      <Box className="my-4 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="flex">
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
                <Box className="w-full flex flex-col gap-8">
                    <Box className=" mb-5 md:mb-0 md:flex h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Housing cooperative"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomSelect
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>
                    <Box className=" mb-5 md:flex md:mb-0 h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Complex"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomSelect
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>
                    <Box className=" mb-5 md:flex md:mb-0 h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Building"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomSelect
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>
                    <Box className=" md:flex mb-5 md:mb-0 h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Apartment type"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomSelect
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>

                    <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded  drop-shadow-lg bg-[#256D85] font-semibold text-white text-[16px] mb-1 capitalize w-full">
                        <ReceiptLongIcon /> {t(["Service"])}
                    </Box>
                    <Box className=" md:flex mb-5 md:mb-0 h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Service type"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomSelect
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>
                    <Box
                        className="md:flex mb-5 md:mb-0 h-[50px] w-full justify-between"
                      >
                        <Box className="md:w-[30%]">
                          <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Service cost"])}
                          </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%] flex">
                            <Box className="px-5 z-20 rounded bg-[#256D85] h-[50px] flex items-center font-semibold text-white text-[16px] mb-1 capitalize">
                                AZN
                            </Box>
                            <CustomTextField
                                className="w-full mb-0 -ml-[5px]"
                                label={t(["Service cost"])}
                                name="date"
                            />
                        </Box>
                    </Box>
                    <Box className=" md:flex mb-5 md:mb-0 h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Hesablama intervalı"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomSelect
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>
                    <Box className=" md:flex mb-5 md:mb-0 h-[50px] w-full justify-between">
                        <Box className="md:w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t(["Service date"])}
                        </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                        <CustomDateRangePicker
                            className="w-full"
                            label={t(["Please select"])}
                            name="date"
                        />
                        </Box>
                    </Box>
                    <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded  drop-shadow-lg bg-[#256D85] font-semibold text-white text-[16px] mb-1 capitalize w-full">
                        <AccountCircleIcon /> {t(["Additional information"])}
                    </Box>
                    <Box className="w-full">
                       <Box className="w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                          {t(["Write something..."])}
                        </Typography>
                        </Box> 
                        <CustomTextField
                            className="mb-0 font-semibold text-textDark2 dark:text-text2 text-[16px]"
                            label={t(["Write something..."])}
                            name="date"
                            multiline
                            rows={5}
                        />
                    </Box>
                  {/* {inputTextLabels.map((title) => {
                    return (
                      <Box
                        key={title.id}
                        className="md:flex mb-5 md:mb-0 h-[50px] w-full justify-between"
                      >
                        <Box className="md:w-[30%]">
                          <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                            {t([title.title])}
                          </Typography>
                        </Box>
                        <Box className="w-full md:w-[70%]">
                          <CustomTextField
                            className="w-full mb-0"
                            label={t([title.placeholder])}
                            name="date"
                          />
                          {title.id == 2 && (
                            <Typography className="text-xs mt-1 text-textDark2 dark:text-text2">
                              {t(["Example"])}: 001,002,003,004
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    );
                  })}

                  <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                    <PublicIcon /> {t(["Apartment plan"])}
                  </Box>
                  <Box>
                    <Box className="w-full">
                      <Box className="w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                          {t(["Email address"])}
                        </Typography>
                      </Box>
                      <CustomTextField
                        className="w-full"
                        label={t(["Email address"])}
                        name="date"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box className="w-full">
                      <Box className="w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                          {t(["Phone number"])}
                        </Typography>
                      </Box>
                      <CustomTextField
                        className="mb-0"
                        label={t(["Phone number"])}
                        name="date"
                      />
                      <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                        {t(["Example"])}: 994xxxxxxxxx
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                    <PanoramaOutlinedIcon /> {t(["Notification method"])}
                  </Box>
                  <Box>
                    <Box className="w-full">
                      <Box className="w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                          {t(["Photo"])}
                        </Typography>
                      </Box>
                      <Box className="flex items-center rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                        <Button className="capitalize" variant="contained">
                          <CustomFile
                            variant="contained"
                            className="mb-0"
                            title={t(["Choose file"])}
                            name="date"
                          />
                        </Button>
                        <Typography className="ml-3">
                          No FIle Choosen
                        </Typography>
                      </Box>
                      <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                        {t(["Size"])}: 1600px-1600px
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                    <PanoramaOutlinedIcon /> {t(["Photos"])}
                  </Box>
                  <Box className="w-full flex-wrap md:flex">
                    {photoInputLabels.map((item) => {
                      return (
                        <Box className="w-full px-3 my-3 md:w-1/2">
                          <Box className="w-[30%]">
                            <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                              {t(["Photo"])} {item.id}
                            </Typography>
                          </Box>
                          <Box className="flex  items-center rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                            <Button className="capitalize" variant="contained">
                              <CustomFile
                                className="mb-0"
                                title={t(["Choose file"])}
                                name="date"
                              />
                            </Button>
                            <Typography className="ml-3">
                              {t([item.label])}
                            </Typography>
                          </Box>
                          <Typography className="text-xs mt-2 text-textDark2 dark:text-text2">
                            {" "}
                            {t(["Size"])}: 1000px-710px
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box className="my-4 pl-3 flex items-center gap-3 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize dark:to-mainSecondary w-full">
                    <AccountCircleIcon /> {t(["Additional information"])}
                  </Box>
                  <Box>
                    <Box className="w-full">
                      {/* <Box className="w-[30%]">
                        <Typography className=" h-full flex items-center font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize">
                          {t(["Write something..."])}
                        </Typography>
                      </Box> */}
                      {/* <CustomTextField
                        className="mb-0 font-semibold text-textDark2 dark:text-text2 text-[16px]"
                        label={t(["Write something..."])}
                        name="date"
                        multiline
                        rows={5}
                      /> */}
                    </Box>
                   
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Box className="flex justify-between items-center gap-x-1 bg-bgLight dark:bg-[#404954] py-5 px-3 sm:px-6 rounded mt-2">
        <Link to="/">
          <Button
            startIcon={<ReplyIcon className="text-white dark:text-black" />}
            variant="contained"
            className="capitalize"
          >
            {t(["Back"])}
          </Button>
        </Link>
        <Box className="flex gap-3">
          <Button variant="contained" className="capitalize flex gap-1">
            <CheckCircleOutlineOutlinedIcon fontSize="xsmall" />{" "}
            {t(["Submit & Create"])}
          </Button>
          <Button variant="contained" className="capitalize flex gap-1">
            <CheckCircleOutlineOutlinedIcon fontSize="xsmall" /> {t(["Submit"])}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateInvoice;
