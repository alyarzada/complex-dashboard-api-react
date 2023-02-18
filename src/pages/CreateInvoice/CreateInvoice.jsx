import { Formik, Form } from "formik";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomTextField from "../../components/Form/CustomTextField";
import Header from "../../components/UI/Header";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomDateRangePicker from "../../components/Form/CustomDateRangePicker";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReplyIcon from "@mui/icons-material/Reply";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

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
                  <Box className="md:flex mb-5 md:mb-0 h-[50px] w-full justify-between">
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
