import React from 'react'
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
//components
import Header from "../../components/UI/Header";
import CustomFile from "../../components/Form/CustomFile";


//icon
import PhotoSizeSelectLargeOutlinedIcon from '@mui/icons-material/PhotoSizeSelectLargeOutlined';
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined';


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

const PhotoEdit = () => {
    const { t } = useTranslation();
  return (
    <Box>
        <Header currentPage={{ title: t(["Edit photos"]), icon: PhotoSizeSelectLargeOutlinedIcon }} />
        
      <Box className="my-4 p-5 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box
        className="mb-7 pl-3 flex items-center gap-3 py-3 px-6 rounded drop-shadow-lg dark:bg-[#404954] bg-[#C9B26D] dark:from-mainPrimary text-white dark:text-text2 text-[16px] capitalize dark:to-mainSecondary w-full"      
      >
        <FilterOutlinedIcon /> {t(["Photos"])}
      </Box>
        <Formik
            initialValues={{
              date: ["sad", "dasd"],
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
                <Form>
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
                    </Form>
                    )}
                    </Formik>
                    </Box>
    </Box>
  )
}

export default PhotoEdit