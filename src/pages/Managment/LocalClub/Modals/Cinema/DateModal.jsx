import React from "react";
import CustomModal from "../../../../../components/UI/CustomModal";
import CustomTextField from "../../../../../components/Form/CustomTextField";
import CustomSelect from "../../../../../components/Form/CustomSelect";
import CustomDatePicker from "../../../../../components/Form/CustomDatePicker";
import { useDispatch } from "react-redux";
import { bookCinemaRoom } from "../../../../../app/Slicers/leisure/cinema";
import Cookies from "js-cookie";

import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";

//multiselect
const optionsCinemaTime = [
  { label: "09:30", value: "09:30" },
  { label: "11:00", value: "11:00" },
  { label: "13:00", value: "13:00" },
  { label: "15:30", value: "15:30" },
  { label: "18:00", value: "18:00" },
  { label: "20:30", value: "20:30" },
];
const optionsNumberOfResident = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
];
const optionsNumberOfGuests = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
];

const DateModal = ({
  setOpenDateModal,
  guests,
  setGuests,
  dateDefaultValue,
}) => {
  const handleGuestDelete = (index) => {
    const list = [...guests];
    list.splice(index, 1);
    setGuests(list);
  };

  const dispatch = useDispatch();

  return (
    <CustomModal
      handleClose={() => setOpenDateModal(false)}
      title="Yeni bronlama"
      className="h-fit"
      bron
    >
      <Formik
        initialValues={{
          start_date: "",
          duration: "",
          message: "",
          number_of_residents: "",
          number_of_guest: "",
        }}
        onSubmit={(values) => {
          // const start = [values.start, "00"].join(":");
          // const tempdate = [temp[0], temp[1], temp[2]].join("-");
          // const tempstart = [tempdate, start].join("T");
          dispatch(
            bookCinemaRoom({
              data: values,
              token: Cookies.get("token"),
            })
          );
          setOpenDateModal(false);
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <CustomDatePicker
              label="Rezervasiya tarixi"
              name="start_date"
              defaultValue={dateDefaultValue}
              calendar
            />
            <CustomSelect
              label="Bronlama vaxtı"
              options={optionsCinemaTime}
              name="duration"
              onlyValue
              noTranslation
            />
            <CustomSelect
              label="Sakinlərin sayı"
              options={optionsNumberOfResident}
              name="number_of_residents"
              onlyValue
              noTranslation
            />
            <CustomSelect
              label="Qonaqların sayı"
              options={optionsNumberOfGuests}
              name="number_of_guest"
              calendar
              className="mb-0"
              onlyValue
              noTranslation
            />
            <CustomTextField label="Şərhiniz" name="message" multiline />
            <Box className="flex gap-x-2 my-3 justify-end">
              <Button
                onClick={() => setOpenDateModal(false)}
                type="button"
                variant="outlined"
                color="error"
                className="capitalize"
              >
                Bağla
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                className="capitalize"
              >
                Yadda saxla
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default DateModal;
