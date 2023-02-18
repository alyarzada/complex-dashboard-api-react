import React from "react";
import CustomSearchFilter from "../../../../components/UI/CustomSearchFilter";
import CustomFile from "../../../../components/Form/CustomFile";
import { Box, Button, Typography } from "@mui/material";
import Header from "../../../../components/UI/Header";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import CustomTextField from "../../../../components/Form/CustomTextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { CameraAltOutlined } from "@mui/icons-material";
import ReplyIcon from "@mui/icons-material/Reply";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Link } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

const answers = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const SurveySwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default function SurveyCreate() {
  const { t } = useTranslation();
  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Create new ticket"]),
          icon: EmojiObjectsOutlinedIcon,
        }}
        extra={"Survey Manage"}
        to="surveymanage"
        icon={
          <EmojiObjectsOutlinedIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="my-4 py-4 px-6 rounded drop-shadow-lg bg-bgLight  dark:bg-bgMain w-full">
        <CustomSearchFilter flex={true} />
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
              <Box className="mb-5 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg  bg-logoColor dark:bg-bgMain  text-white dark:text-text2 text-[16px] capitalize w-full">
                <HelpOutlineIcon /> {t(["Enter question"])}
              </Box>
              <Box className="lg:flex gap-3 w-full mt-3">
                <Box className="w-full">
                  <Typography className="flex items-center text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                    Azərbaycan
                  </Typography>
                  <CustomTextField
                    className="w-full mb-0"
                    label={t(["Azərbaycan"])}
                    name="date"
                    multiline
                    rows={10}
                  />
                </Box>
                <Box className="w-full">
                  <Typography className="flex items-center text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                    English
                  </Typography>
                  <CustomTextField
                    className="w-full mb-0"
                    label={t(["English"])}
                    name="date"
                    multiline
                    rows={10}
                  />
                </Box>
                <Box className="w-full">
                  <Typography className="flex items-center text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                    Русский
                  </Typography>
                  <CustomTextField
                    className="w-full mb-0"
                    label={t(["Русский"])}
                    name="date"
                    multiline
                    rows={10}
                  />
                </Box>
              </Box>
              <Box className="mb-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-bgMain bg-logoColor  text-white dark:text-text2 text-[16px] capitalize  w-full">
                <CheckCircleOutlineOutlinedIcon /> {t(["Enter answers"])}
              </Box>
              {answers.map((id) => {
                return (
                  <Box>
                    <Box className="pl-3 flex items-center gap-3 py-4 px-6 rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain text-textDark2 dark:text-text2 text-[16px] capitalize  w-full">
                      <RadioButtonCheckedIcon /> {t([`Answer`]) + ` #${id.id}`}
                    </Box>
                    <Box className=" lg:flex gap-3 mb-4 -mt-2 py-2 px-6 rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
                      <Box className="w-full">
                        <Typography className="flex items-center text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                          Azərbaycan
                        </Typography>
                        <CustomTextField
                          className="w-full mb-0"
                          label={t(["Azərbaycan"])}
                          name="date"
                        />
                      </Box>
                      <Box className="w-full">
                        <Typography className="flex items-center text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                          English
                        </Typography>
                        <CustomTextField
                          className="w-full mb-0"
                          label={t(["English"])}
                          name="date"
                        />
                      </Box>
                      <Box className="w-full">
                        <Typography className="flex items-center text-textDark2 dark:text-text2 text-[16px] mb-2 capitalize">
                          Русский
                        </Typography>
                        <CustomTextField
                          className="w-full mb-0"
                          label={t(["Русский"])}
                          name="date"
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
              <Box className="mb-1 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg  bg-logoColor text-white dark:text-text2 text-[16px] capitalize dark:bg-bgMain w-full">
                <ErrorOutlineIcon /> {t(["Reflect the results of surveys"])}
              </Box>
              <FormControlLabel
                className="ml-1"
                control={<SurveySwitch defaultChecked />}
              />
              <Box className="mb-[5px] pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-logoColor dark:from-mainPrimary text-white dark:text-text2 text-[16px] capitalize dark:to-mainSecondary w-full">
                <CameraAltOutlined /> {t(["Foto upload"])}
              </Box>
              <Box className="mb-1 pl-3 flex items-center gap-3 py-4 px-6 rounded drop-shadow-lg  bg-logoColor dark:from-mainPrimarytext-white dark:text-text2 text-[16px] capitalize dark:bg-bgMain w-full">
                <Button
                  variant="contained"
                  className="capitalize flex gap-1 bg-[#FDBD06] hover:bg-[#DBA31F]"
                >
                  <CustomFile
                    title={
                      <span>
                        <CameraAltOutlined /> {t("Photo")}
                      </span>
                    }
                  />
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
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
            <CheckCircleOutlineOutlinedIcon fontSize="xsmall" /> {t(["Submit"])}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
