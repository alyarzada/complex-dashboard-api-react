import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../../../components/UI/Header";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Formik, Form, FieldArray, Field } from "formik";
import CustomSelect from "../../../components/Form/CustomSelect"
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';

const fakeData=[
  {
    label:"asd",
    value:"asd"
  },
  {
    label:"asdf",
    value:"asdf"
  },
  {
    label:"asdfe",
    value:"asdfe"
  },
]

export default function ReportsFilter() {
  return (
    <Box>
        <Box>

            <Formik
              initialValues={{
                date: ["sad","dasd"],
                cooperative: [],
                complex: [],
                building: "",
                apartment: "",
              }}
              onSubmit={(values) => {
                console.log(values)
              }}
            >
              {()=>(
                <Form>
                  <CustomSelect
                    label="Tarix araligi"
                    name="date"
                    options={fakeData}
                  />
                  <CustomSelect
                    label="Mənzil-Tikinti Kooperativi"
                    name="cooperative"
                    options={fakeData}
                  />
                  <CustomSelect
                    label="Kompleks"
                    name="complex"
                    options={fakeData}
                  />
                  <CustomSelect
                    label="Bina"
                    name="building"
                    options={fakeData}
                  />
                  <CustomSelect
                    label="Mənzil"
                    name="apartment"
                    options={fakeData}
                  />
                  <Box className="flex gap-3 md:w-[300px]">
                    <Button variant="contained" className="capitalize" type="submit" startIcon={<FilterAltOutlinedIcon/>}>Tetbiq etmek</Button>
                    <Button className="capitalize" type="reset" startIcon={<FilterAltOffOutlinedIcon/>}>Temizlemek</Button>
                  </Box>
                </Form>
              )}
            </Formik>

            
        </Box>
    </Box>
  )
}
