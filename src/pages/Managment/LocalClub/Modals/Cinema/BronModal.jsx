import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomModal from "../../../../../components/UI/CustomModal";
import CustomTextField from "../../../../../components/Form/CustomTextField";
import CustomSelect from "../../../../../components/Form/CustomSelect";
import CustomDatePicker from "../../../../../components/Form/CustomDatePicker";

import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";

// redux
import { bookCinemaRoom } from "../../../../../app/Slicers/leisure/cinema";
import { changeBookedCinemaStatus } from "../../../../../app/Slicers/leisure/cinema";
import Cookies from "js-cookie";

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

const BronModal = ({ setOpenModal, guests, setGuests }) => {
  const { bookCinemaStatus } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleGuestDelete = (index) => {
    const list = [...guests];
    list.splice(index, 1);
    setGuests(list);
  };

  useEffect(() => {
    if (bookCinemaStatus === "succeeded") {
      console.log("successsssssssssss");
      toast.success(t("Your application has been sent successfully !"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        setOpenModal(false);
        dispatch(changeBookedCinemaStatus("idle"));
      }, 1000);
    }

    if (bookCinemaStatus === "failed") {
      toast.error(t("Reservations are possible one week in advance."), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        dispatch(changeBookedCinemaStatus("idle"));
      }, 1000);
    }
  }, [bookCinemaStatus]);

  return (
    <CustomModal
      title="Yeni bronlama"
      handleClose={() => setOpenModal(false)}
      bron
      className="h-fit"
    >
      <Box>
        <Formik
          initialValues={{
            start_date: "",
            duration: "",
            message: "",
            number_of_residents: "",
            number_of_guest: "",
          }}
          onSubmit={(values) => {
            dispatch(
              bookCinemaRoom({
                data: values,
                token: Cookies.get("token"),
              })
            );
          }}
        >
          {() => (
            <Form>
              <CustomDatePicker label="Rezervasiya tarixi" name="start_date" />
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
                  onClick={() => setOpenModal(false)}
                  type="button"
                  variant="outlined"
                  color="error"
                  className="capitalize"
                >
                  {t("Close")}
                </Button>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="success"
                  className="capitalize"
                  loading={bookCinemaStatus === "loading"}
                >
                  {t("Save")}
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </CustomModal>
  );
};

export default BronModal;
