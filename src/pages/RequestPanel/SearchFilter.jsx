import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import CustomSelectNew from "../../components/Form/CustomSelectNew";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";

const SearchFilter = () => {
  const submitHandler = (values) => {
    console.log(values);
  };

  // const output = [
  //   ...new Map(
  //     allRequests?.map((item) => [item?.requestFormType["name"], item])
  //   ).values(),
  // ];

  return (
    <Box className="dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary flex-wrap bg-white drop-shadow-lg pt-4 pb-4 px-6 mb-4 mt-4">
      <Box>
        <Typography className="text-white mb-4">Axtarış filtri</Typography>
      </Box>
      <Formik
        initialValues={{ departments: [], requestType: "", requestOwner: "" }}
        onSubmit={submitHandler}
      >
        {() => (
          <Form>
            <Box className="flex justify-between items-center flex-col md:flex-row w-full">
              <Box className="w-full">
                <Typography className="text-white pb-2">Şöbələr</Typography>
                <CustomSelectNew
                  name="departments"
                  options={[]}
                  className="w-full md:w-[350px]"
                />
              </Box>
              <Box className="w-full">
                <Typography className="text-white pb-2">
                  Müraciət növləri
                </Typography>
                <CustomSelectNew
                  name="requestType"
                  options={[]}
                  className="w-full md:w-[350px]"
                />
              </Box>
              <Box className="w-full mb-2 md:mb-0">
                <Typography className="text-white pb-2">
                  Müraciət sahibi
                </Typography>
                <CustomSelectNew
                  name="requestOwner"
                  options={[]}
                  className="w-full md:w-[350px]"
                />
              </Box>
              <Button
                type="submit"
                startIcon={<Search />}
                variant="contained"
                className="bg-[#BDB26D] capitalize dark:text-white w-full md:w-auto"
              >
                Axtar
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SearchFilter;
